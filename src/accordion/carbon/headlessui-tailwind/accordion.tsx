import * as React from 'react'
import { Disclosure, type DisclosureProps, type DisclosureButtonProps, type DisclosurePanelProps } from '@headlessui/react'
import { ChevronDown } from '../icons/chevron-down'

export type AccordionProps = { children: React.ReactNode }
export type AccordionItemProps = DisclosureProps<'div'>
export type AccordionButtonProps = DisclosureButtonProps<'button'>
export type AccordionPanelProps = DisclosurePanelProps<'div'>

export function Accordion(props: AccordionProps) {
  return <div {...props} />
}

Accordion.Item = function AccordionItem({ ...props }: AccordionItemProps) {
  return <Disclosure {...props} as="div" className="min-w-[400px] flex flex-col" />
}

Accordion.Header = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(function AccordionHeader({ children, ...props }, ref) {
  return (
    <Disclosure.Button {...props} as="button" ref={ref} className="py-[14px] px-4 flex flex-1 items-center justify-between border-t border-[#e0e0e0] text-sm" data-testid="accordion-head">
      {({ open }) => (
        <>
          {children}
          <ChevronDown className={open ? 'rotate-180 transform' : ''} />
        </>
      )}
    </Disclosure.Button>
  )
})

Accordion.Panel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(function AccordionPanel({ ...props }, ref) {
  return <Disclosure.Panel {...props} as="div" ref={ref} className="pt-2 pb-6 px-4 text-sm" data-testid="accordion-panel" />
})
