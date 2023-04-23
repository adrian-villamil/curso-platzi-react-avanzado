import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { gql, useQuery } from "@apollo/client";
import { Layout } from "../components/Layout";

const GET_FAVS = gql`
  query GetFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const Favs = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Layout
      title={'Petgram - Tus favoritos'}
      subtitle={'Aquí puedes encontrar tus favoritos'}
    >
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};