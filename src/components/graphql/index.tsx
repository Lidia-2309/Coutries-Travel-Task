import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
        continents{
          name
        }
  }
`;

// create a component that renders a select input for coutries
const CountrySelect = () => {
  const [continent, setContinent] = useState('Africa');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <select value={continent} 
        onChange={event => 
            setContinent(event.target.value)}>
        {data.continents.map(continent => (
        
        <option key={continent.name} value={continent.name}>
          {continent.name}
          {continent.code}
        </option>

        

      ))}
    </select>
  );
}

export default CountrySelect;


/*  

query pegarTodosContinentes{
 	continents{
    name
    code
    countries{
      name
	}
}
}

query PegarUmContinente {
  continent(code: "AF") {
    code,
    countries {
      code
      name
      currency
    }
  }
}


*/