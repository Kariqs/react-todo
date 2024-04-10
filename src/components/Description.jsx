import React from "react";
import styles from "./Description.module.css";

const Description = (props) => {
  const buttonClickHandler = () => {
    props.onShowForm(true);
  };
  return (
    <React.Fragment>
      <div className={styles.textdiv}>
        <h2>TODOS CAN MAKE YOUR DAY MORE PRODUCTIVE AND ORGANIZED</h2>
        <p>
          "He, who every morning plans the transactions of the day and follows
          that plan, carries a thread that will guide him through a labyrinth of
          the busiest life."
        </p>
        <div className={styles.buttondiv}>
          <button onClick={buttonClickHandler}>Create todos</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
