import React from "react";
import ReactLoading from "react-loading";
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.Loader}>
      <ReactLoading type="spokes" color="#AC5D98" height={"15%"} width={"20%"} />
    </div>
  );
}

export default Loader;
