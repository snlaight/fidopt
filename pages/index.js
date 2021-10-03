import Head from 'next/head';
import React from 'react'
import ComingSoon from '../components/comingSoon'
const { useState, useEffect } = React;

const Home = ()=>{

  
  let [info, setInfo]= useState({
      perros:[],
    loading: true
    })
    const fetchPerros = async () => {
        let url = "http://localhost:3001/perros";
        let response = await fetch(url).then((response) => response.json());
        setInformation(response)
        console.log(response);
      };
      const setInformation = (information) => {
        setInfo({
          perros: information,
          cargando: false,
        });
    }
    useEffect(() => {
        fetchPerros();
      }, []);
    return (
<div>
    <Head>

        </Head>
        
        <ComingSoon />
</div>
    )
}

export default Home