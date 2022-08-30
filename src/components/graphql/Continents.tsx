import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import PAISESSELECAO from '../../pages/Teste/teste';

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
  {
        continents{
          name
          code
        }
  }
`;

// create a component that renders a select input for coutries
const CountrySelect = () => {

    const [continent, setContinent] = useState('Africa');
    const { data, loading, error } = useQuery(LIST_CONTINENTS, { client });

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    function handleCreate(e) {
        e.preventDefault()
        alert(continent)  
      }
        

    return (
        <div>
            <select value={continent}
            onChange={(event) => {
                    console.log(event.target.value);
                    setContinent(event.target.value)
                }
            }>
            {data.continents.map(continent => (
                <option key={continent.code} value={continent.code}>
                    {continent.name}
                </option>   
      ))}
        </select>
        <button onClick={handleCreate}>
            Seleção Continente
        </button>
        </div>
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