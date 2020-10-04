import React, { useState, useEffect } from "react";
import "./main.css";
async function fetchData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return response.json();
}

export default function App() {
  const [repoDataPoke, setRepoDataPoke] = useState(null);
  const [isLoadingPoke, setLoadingPoke] = useState(false);
  const [errorPoke, setErrorPoke] = useState(undefined);

  const handleFetch = async () => {
    setLoadingPoke(true);
    try {
      const pokedexRepo = await fetchData();
      setRepoDataPoke(pokedexRepo);
    } catch {
      setErrorPoke("  !!Can not loading data !! ");
    }
    setLoadingPoke(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="Container">
      {!isLoadingPoke && repoDataPoke && (
        <div className="">
          <h1>Poke-Dex-Data</h1>
          {repoDataPoke.results.map((item) => (
            <div className="content-container">
              <ul>
                <li>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
