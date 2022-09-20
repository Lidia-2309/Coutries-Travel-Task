import { ApolloClient, InMemoryCache, gql, useQuery, useLazyQuery } from '@apollo/client';
// initialize a GraphQL client


export const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://countries.trevorblades.com'
    });
    
export const LIST_CONTINENTS = gql`
      {
            continents{
              name
              code
            }
      }
    `;
    
export const FILTRO = gql`
        query PegarUmContinente ($code: ID!){
            continent(code: $code) {
            code
            countries {
                code
                name
                currency
            }
            }
        }
    `;


