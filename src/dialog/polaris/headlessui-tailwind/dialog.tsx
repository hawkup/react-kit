import * as React from 'react';
import { Dialog as DialogHeadless } from '@headlessui/react'
import type {
  DialogTitleProps as DialogHeadlessTitleProps,
  DialogPanelProps as DialogHeadlessPanelProps
} from '@headlessui/react'

import { Cancel } from '../icons/cancel'

export type DialogProps = {
  children: React.ReactNode
}
export type DialogTriggerProps = {
  children: React.ReactNode
}
export type DialogPortalProps = {
  children: React.ReactNode
}
export type DialogContentProps = DialogHeadlessPanelProps<'div'>
export type DialogTitleProps =  DialogHeadlessTitleProps<'h2'>
export type DialogDescriptionProps = {
  children: React.ReactNode
}
export type DialogFooterProps = {
  children: React.ReactNode
}

type DialogContextValue = {
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null)

function useDialog() {
  const context = React.useContext(DialogContext)

  if (context === undefined) {
    throw new Error(`useDialog must be used within DialogContext`)
  }

  return context
}

export function Dialog({ children, ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <DialogContext.Provider
      {...props}
      value={{
        open,
        onOpenChange: setOpen,
        onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen])
      }}>
      {children}
    </DialogContext.Provider>
  )
}

Dialog.Portal = React.forwardRef<HTMLDivElement, DialogPortalProps>(function DialogPortal({ children }, ref) {
  const context = useDialog()

  return (
    <DialogHeadless
      ref={ref}
      open={context?.open}
      onClose={() => context?.onOpenChange(false)}
      className="rounded-lg bg-white"
    >
      {children}
    </DialogHeadless>
  )
})

Dialog.Content = React.forwardRef<HTMLDivElement, DialogContentProps>(function DialogContent({ children, ...props }, ref) {
  return (
    <DialogHeadless.Panel {...props} ref={ref}>
      {children}
    </DialogHeadless.Panel>
  )
})

Dialog.Trigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(function DialogTrigger({ children }, ref) {
  const context = useDialog()
  return <button onClick={context?.onOpenToggle} ref={ref}>{children}</button>
})

Dialog.Title = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(function DialogTitle({ children }, ref) {
  const context = useDialog()

  return (
    <DialogHeadless.Title as="h2" className="px-4 py-5 text-xl flex items-center justify-between shadow-[inset_0_-1px_0px_#E1E3E5]" ref={ref}>
      <>
      {children}
      <button onClick={() => context?.onOpenChange(false)}>
        <Cancel />
      </button>
      </>
    </DialogHeadless.Title>
  )
})

Dialog.Description = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(function DialogDescription({ children }, ref) {
  return (
    <DialogHeadless.Description className="p-5" ref={ref}>
      {children}
    </DialogHeadless.Description>
  )
})

Dialog.Footer = React.forwardRef<HTMLDivElement, DialogFooterProps>(function DialogFooter({ children }, ref) {
  return (
    <div className="p-4 shadow-[inset_0_1px_0px_#E4E5E7]" ref={ref}>
      {children}
    </div>
  )
})
