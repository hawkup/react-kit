import styles from './accordion.module.css'

export const Accordion = () => {
  return (
    <>
      <button type="button" className={styles.head}>Head</button>
      <div role="region">
        Panel
      </div>
    </>
  )
};
