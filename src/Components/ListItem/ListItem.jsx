import React from "react";
import classes from "./ListItem.module.css";

const ListItem = ({ el, remove }) => {
  return (
    <div className={classes.listItem}>
      <h1>{el.title}</h1>
      <button onClick={() => remove(el.id)}>Delete</button>
    </div>
  );
};

export default ListItem;
