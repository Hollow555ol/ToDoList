import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ todoes }) => {
  return (
    <div>
      {todoes.map((el) => {
        return <ListItem el={el} key={el.id} />;
      })}
    </div>
  );
};

export default List;
