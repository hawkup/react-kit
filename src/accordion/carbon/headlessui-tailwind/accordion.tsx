import * as React from 'react'
import { Disclosure, type DisclosureProps, type DisclosureButtonProps, type DisclosurePanelProps } from '@headlessui/react'
import { ChevronDown } from '../icons/chevron-down'

export type AccordionProps = { children?: React.ReactNode }
export type AccordionItemProps = DisclosureProps<'div'>
export type AccordionButtonProps = DisclosureButtonProps<'button'>
export type AccordionPanelProps = DisclosurePanelProps<'div'>

export function Accordion(props: AccordionProps) {
  return <div {...props} />
}

Accordion.Item = function AccordionItem({ ...props }: AccordionItemProps) {
  return <Disclosure {...props} as="div" />
}

Accordion.Header = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(function AccordionHeader({ children, ...props }, ref) {
  return (
    <Disclosure.Button {...props} as="button" ref={ref} className="font-['IBM_Plex_Sans'] py-2 flex items-center justify-between border-t border-[#e0e0e0] min-w-[400px]" data-testid="accordion-head">
      <>
        {children}
        <ChevronDown />
      </>
    </Disclosure.Button>
  )
})

Accordion.Panel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(function AccordionHeader({ ...props }, ref) {
  return <Disclosure.Panel {...props} as="div" ref={ref} className="font-['IBM_Plex_Sans'] text-gray-500 min-w-[400px]" data-testid="accordion-panel" />
})
