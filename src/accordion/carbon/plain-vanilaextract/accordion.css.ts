import { style } from '@vanilla-extract/css';

export const head = style({
  // cast to pixels
  padding: 10,
  marginTop: 25,

  // unitless properties
  flexGrow: 1,
  opacity: 0.5
});
