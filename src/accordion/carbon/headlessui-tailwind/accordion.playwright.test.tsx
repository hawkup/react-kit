import { test, expect } from '@playwright/experimental-ct-react';

import { Accordion } from './accordion';

test('event should work', async ({ mount }) => {
  const component = await mount(<Accordion />);

  await component.getByText('Is team pricing available?').click();

  await expect(component.getByText(/Yes! You can purchase a license/)).toBeVisible();
});
