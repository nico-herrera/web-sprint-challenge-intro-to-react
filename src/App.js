import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterList = await axios(
          "https://rickandmortyapi.com/api/character/"
        );
        console.log(characterList);
        setCharacterList(characterList.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>No info for today!</div>;
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterData={characterList} />
    </div>
  );
};

export default App;
