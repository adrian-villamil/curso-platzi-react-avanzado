import React from "react";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from "./styles";
import { gql, useMutation } from "@apollo/client";
import PropTypes from 'prop-types';

const LIKE_PHOTO = gql`
  mutation LikePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

export const FavButton = ({ id, liked, likes }) => {
  const [likePhoto, { data, loading, error }] = useMutation(LIKE_PHOTO);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const handleLike = () => {
    likePhoto({ variables: { input: { id: id } } });
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Button onClick={handleLike}>
      <Icon size={32} />{likes} likes!
    </Button>
  );
};

FavButton.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
};