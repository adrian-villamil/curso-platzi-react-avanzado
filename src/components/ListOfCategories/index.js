import React from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import data from '../../../api/db.json';

export const ListOfCategories = () => {
  return (
    <List>
      {
        data.categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  );
};