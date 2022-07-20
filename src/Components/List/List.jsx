import React from "react";
import ListItem from "../ListItem/ListItem";
import classes from "./List.module.css";

const List = ({ todoes, remove }) => {
  return (
    <div className={classes.list}>
      {todoes.map((el) => {
        return <ListItem remove={remove} el={el} key={el.id} />;
      })}
    </div>
  );
};

export default List;
