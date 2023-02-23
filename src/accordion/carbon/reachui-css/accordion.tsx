import * as React from "react";
import * as AccordionReachUI from "@reach/accordion";
import type { AccordionProps, AccordionItemProps, AccordionButtonProps, AccordionPanelProps } from "@reach/accordion";

import { ChevronDown } from '../icons/chevron-down';

import "@reach/accordion/styles.css";
import "./accordion.css";

export function Accordion(props: AccordionProps) {
  return <AccordionReachUI.Accordion {...props} />
}

Accordion.Item = React.forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(props, ref) {
  return <AccordionReachUI.AccordionItem {...props} ref={ref} />
})

Accordion.Header = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(function AccordionHeader({ children, ...props }, ref) {
  return (
    <AccordionReachUI.AccordionButton {...props} ref={ref}>
      {children}
      <ChevronDown />
    </AccordionReachUI.AccordionButton>
  )
})

Accordion.Panel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(function AccordionPanel(props, ref) {
  return <AccordionReachUI.AccordionPanel {...props} ref={ref} />
})
