import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import styled from '@emotion/styled';

import { ChevronDown } from '../icons/chevron-down';

const StyledRoot = styled(AccordionPrimitive.Root)`
  font-family: 'IBM Plex Sans';
  font-size: 14px;
  color: #161616;
`

const StyledItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled(AccordionPrimitive.Trigger)`
  all: unset;
  display: flex;
  font-family: inherit;
  background-color: transparent;
  padding: 14px 16px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const StyledPanel = styled(AccordionPrimitive.Content)`
  padding: 8px 16px 24px;
`

const StyledChevronDown = styled(ChevronDown)`
  [data-state=open] & {
    transform: rotate(180deg);
  }
`

export function Accordion(props: AccordionPrimitive.AccordionSingleProps) {
  return <StyledRoot {...props} type="single" />
}

Accordion.Item = React.forwardRef<HTMLDivElement, AccordionPrimitive.AccordionItemProps>(function AccordionItem({ ...props }, ref) {
  return <StyledItem {...props} ref={ref} />
})

Accordion.Header = React.forwardRef<HTMLButtonElement, AccordionPrimitive.AccordionTriggerProps>(function AccordionHeader({ children, ...props }, ref) {
  return (
    <StyledHeader {...props} ref={ref}>
      {children}
      <StyledChevronDown />
    </StyledHeader>
  );
})

Accordion.Panel = React.forwardRef<HTMLDivElement, AccordionPrimitive.AccordionContentProps>(function AccordionPanel({ ...props }, ref) {
  return <StyledPanel {...props} ref={ref} />
})
