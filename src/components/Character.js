// Write your Character component here
import React from "react";

import styled from "styled-components";

export default function Character(props) {
  const { characterData } = props;

  console.log(characterData);

  const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
  `;

  const StyledCharacterBox = styled.div`
    height: 150px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
  `;

  const StyledName = styled.h3`
    font-size: 1.1rem;
    text-align: center;
    color: white;
    background-color: black;
  `;

  const StyledStatus = styled.p`
    font-size: 0.8rem;
    text-align: center;
    color: white;
    background-color: black;
  `;

  const StyledSpecies = styled.p`
    font-size: 1rem;
    text-align: center;
    color: white;
    background-color: black;
  `;
  //   console.log(characterData.data.info.results);

  return (
    <StyledContainer>
      {characterData.results.map((character, index) => {
        return (
          <StyledCharacterBox>
            <StyledName>{character.name}</StyledName>
            <StyledStatus> {character.status}</StyledStatus>
            <StyledSpecies> {character.species}</StyledSpecies>
          </StyledCharacterBox>
        );
      })}
    </StyledContainer>
  );
}
