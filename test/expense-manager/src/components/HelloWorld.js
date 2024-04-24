import React from "react";
import styles from "./HelloWorld.css";

class HelloWorld extends React.Component {
   render() {
      return (
         <div className={styles.itemStyle}>
            <h1>Hello World!</h1>
         </div>
      );
   }
}
export default HelloWorld;