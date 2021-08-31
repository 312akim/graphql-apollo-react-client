import '../styles/App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './GetUsers';

// Graphql Error handler
const errorLink = onError(({graphqlErrors, networkErrors}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error message: ${message} location: ${location} path: ${path}`);
      return null;
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <header>
        Test Page
      </header>
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
