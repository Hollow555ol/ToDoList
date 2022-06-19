import React from "react";
import ListItem from "../ListItem/ListItem";
const List = ({ todoes }) => {
  return (
    <div>
      {todoes.map((el, i) => {
        console.log(el);
        return <ListItem el={el} key={i} />;
      })}
    </div>
  );
};

export default List;
