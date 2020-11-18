import React, { useEffect, useState} from 'react';
 import {getAllPokemon, getPokemon} from './PokemonList';
 import Card from './Component/Card';
 import Navbar from './Navbar/Navbar';
 import './App.css';


function App () {
    const [pokemonData, setpokemonData] = useState([]);
    const[nexturl, setnexturl] = useState('');
    const[prevurl, setprevurl] = useState('');
    const[loading, setloading] = useState('');
    const initialUrl = ' https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
    
    // const fetchURL = "https://pokeapi.co/api/v2/pokemon?limit=100&of";
    
    // const getItems = () => fetch(fetchURL).then(res => {
    //     setpokemon(res.data.results.map(p =>p.name))
    // });
      
     useEffect(() => {
      async function fetchData() {
          let response = await getAllPokemon(initialUrl);
          console.log(response);
          setnexturl(response.next);
          setprevurl(response.previous);
          let pokemon = await loadingPokemon(response.results);
          console.log(pokemon);
          setloading(false);
      }
      fetchData();
     }, []);
     const prev = async () => {
         if(!prevurl) return;
        setloading(true);
        let data = await getAllPokemon(nexturl);
        await loadingPokemon(data.results);
        setnexturl(data.next);
        setprevurl(data.previous);
        setloading(false);
    }  
       const next = async () => {
           setloading(true);
           let data = await getAllPokemon(prevurl);
           await loadingPokemon(data.results);
           setnexturl(data.next);
           setprevurl(data.previous);
           setloading(false);
       }  
     const loadingPokemon = async (data) => {
         let _pokemondata = await Promise.all(data.map(async pokemon => {
             let pokemonRecord = await getPokemon(pokemon.url);
             return pokemonRecord;
         })
         );
      setpokemonData(_pokemondata);
     };
    return (
       <div>
           { loading ? <h1>Loading...</h1>: (
               <>
               <Navbar />
               <div  className = "btn"> 
               <button onClick={prev}>Prev</button>
               <button onClick={next}>Next</button>
               </div>
               <div className ="grid--container">
                   {pokemonData.map((pokemon, i) => {
                       return <Card key ={i} pokemon = {pokemon}></Card>
                   })}
               </div>
               <div  className = "btn"> 
               <button onClick={prev}>Prev</button>
               <button onClick={next}>Next</button>
               </div>
               </>
            ) }
       </div>
    )
}
export default App;