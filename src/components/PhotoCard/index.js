import React, { useEffect, useRef, useState } from "react";
import { Article, Button, Img, ImgWrapper } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('Si');
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <a href={`/default/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size={32} />{likes} likes!
          </Button>
        </>
      }
    </Article>
  );
};