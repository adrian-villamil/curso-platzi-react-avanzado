import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import axios from "axios";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get('https://petgram-server-edsf8xpy2.now.sh/categories');
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  useEffect(() => {
    const onScroll = (event) => {
      window.scrollY > 200 ? setShowFixed(true) : setShowFixed(false);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
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