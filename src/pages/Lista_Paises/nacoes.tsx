import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
  {
    countries {
        name
    }
}
 
`;

// create a component that renders a select input for coutries
export const Select = () => {
    const { data, loading, error } = useQuery(LIST_CONTINENTS, { client });
    const [ show, setShow ] = useState(true);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <div className='nations'> 
            { show && <p>
                {data.countries.map(countries => (
                    <option key={countries.name} value={countries.name}>
                        {countries.name}
                        {countries.code}
                   </option>
                  ))}
              </p>
            }
          <button   
                type="button" 
                className="button" 
                onClick={()=>setShow(!show)}>  
                Paises        
          </button>
      </div> 
                     
    )
}

export default Select;


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