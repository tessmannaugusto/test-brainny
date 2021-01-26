import ReactDom from 'react-dom';
import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App';

const el = document.getElementById('root')


const httpLink = createHttpLink({
    uri: 'http://test.frontend.api.brainny.cc/graphql',
});

const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('token');
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDom.render(
    <ApolloProvider client={client}>
        <App></App>

    </ApolloProvider>
    , el
)