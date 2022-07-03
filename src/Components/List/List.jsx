import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ todoes, remove }) => {
  return (
    <div>
      {todoes.map((el) => {
        return <ListItem remove={remove} el={el} key={el.id} />;
      })}
    </div>
  );
};

export default List;
