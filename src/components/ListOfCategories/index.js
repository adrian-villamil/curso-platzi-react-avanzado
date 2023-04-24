import React, { memo, useEffect, useState } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      window.scrollY > 200 ? setShowFixed(true) : setShowFixed(false);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item><Category /></Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = memo(ListOfCategoriesComponent);