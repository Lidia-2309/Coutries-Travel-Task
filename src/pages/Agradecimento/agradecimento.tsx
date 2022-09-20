import react from 'react';
import './agradecimento.css';
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom";

export const Agradecimento = () => {
/*     const location =  useLocation() as any;
    const data = useMemo(()=> location.state.formState.name,[])

    useEffect(()=>{console.log(location.state.formState.name)},[location]) */

    return(
        <h1>Obrigado pela preferêcia!</h1>
    );
   
}

export default Agradecimento