import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { styled } from '@stitches/react';

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: '1px solid gainsboro',
});

export const Accordion = () => (
  <AccordionPrimitive.Root type="single">
    <StyledItem value="item-1">
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger>
          <span>Trigger text</span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content>…</AccordionPrimitive.Content>
    </StyledItem>
  </AccordionPrimitive.Root>
);
