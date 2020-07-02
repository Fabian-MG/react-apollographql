import React from "react";
import ReactDOM from "react-dom";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import * as serviceWorker from "./serviceWorker";

import App from "./App/index";

import "./style.css";

const GITHUB_BASE_URL = "https://api.github.com/graphql";
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer bc9a75f0724633724d13d4c9773e7e2c5f9d5358`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
