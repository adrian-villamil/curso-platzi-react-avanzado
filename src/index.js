import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { AppProvider } from "./context/AppContext";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://petgram-server-edsf8xpy2.now.sh/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>
);