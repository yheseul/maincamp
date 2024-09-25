"use client"
import styles from "./styles.module.css";

export default function TailwindCss () {
  return (
    <>
      <button className={styles.button}>button</button>
      <div className={styles.box1}>box1</div>
      <br />
      <div className={styles.box2}>box2</div>
      <div className="lg:greenTextBox"></div>
    </>
  )
}