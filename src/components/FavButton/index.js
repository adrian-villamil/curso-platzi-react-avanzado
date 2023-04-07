import React from "react";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from "./styles";
import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation LikeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

export const FavButton = ({ id, liked, likes, setLiked }) => {
  const [likeAnonymousPhoto, { data, loading, error }] = useMutation(LIKE_PHOTO);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const handleLike = () => {
    likeAnonymousPhoto({ variables: { input: { id: id } }});
    setLiked(!liked);
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Button onClick={handleLike}>
      <Icon size={32} />{likes} likes!
    </Button>
  );
};