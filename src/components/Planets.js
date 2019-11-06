import React from 'react';

const Planets = ({ planets }) => {
  return (
    <div>
      <h1>Planets of Star Wars :</h1>
      <hr></hr>
      {planets.map((planet) => (
        <div key={planet.id}>
          <h4>{planet.name}</h4>
          <p>Terrain : {planet.terrain}</p>
          <p>Population : {planet.population ? planet.population + ' people' : 'unknown'}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default Planets