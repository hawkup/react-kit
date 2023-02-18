import { Disclosure } from '@headlessui/react'

import 'virtual:fonts.css'

export const Accordion = () => {
  return (
    <Disclosure>
      <Disclosure.Button className="font-['IBM_Plex_Sans'] py-2" data-testid="accordion-head">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500" data-testid="accordion-panel">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  )
}
