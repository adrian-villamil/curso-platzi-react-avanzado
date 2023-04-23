import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  const { categoryId } = useParams();

  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name="description" content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos" />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};