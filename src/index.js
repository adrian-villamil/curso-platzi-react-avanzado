import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from "./context/AppContext";

const client = new ApolloClient({
  uri: 'https://petgram-server-edsf8xpy2.now.sh/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
);