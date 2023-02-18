import { head } from './accordion.css'

export const Accordion = () => {
  return (
    <>
      <button type="button" className={head}>Head</button>
      <div role="region">
        Panel
      </div>
    </>
  )
};
