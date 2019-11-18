import React from 'react';
import PokeButton from './PokeButton';

function PokeEncounter({ possiblePoke,
  possiblePokeImg,
  captureBtn,
  possiblePokeStat,
  disable,
  capturedPokemons
}) {

  var len = capturedPokemons.length - 1;

  return (
    <React.Fragment>
      <div className={pokemonCon}
        style={pokemonCon} >
        <div className={encounterCon}
          style={encounterCon}>
          {!disable ?
            (
              <div className="pad">
                <p>You Captured.. </p>
                <div className="found" >
                  <img src={possiblePokeImg} alt="img" className="pokemon" />
                </div>

                <center>
                  <div> {possiblePoke} </div>
                  <div id="captureDiv">
                    <PokeButton btn={captureBtn} > Capture </PokeButton>
                  </div>
                </center>

                <div className="pad two" >
                  <p >Details</p>
                  <div style={detailStyle}>
                    <div style={divMargin}>
                      <p>Speed</p>
                      <p>Special-defense</p>
                      <p>Special-attack</p>
                      <p>Defense</p>
                      <p>Attack</p>
                      <p>Hp</p>
                    </div>
                    <div style={divMargin}>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div style={divMargin}>
                      {possiblePokeStat.map(
                        (item, id) =>
                          <p key={id}>{item.base_stat}</p>
                      )
                      }
                    </div>
                  </div>
                </div>
              </div>
            ):(

              <div className="pad">
                <p> {!possiblePoke ? (<p> </p>) : (<span>Captured <span className="blue">{capturedPokemons[len].name}</span>,</span>)} Click the 'Explore' button to find more pokemons!!</p>
              </div>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}

const pokemonCon = {
  width: '100%',
  height: '500px',
  minHeight: '500px',
  boxSizing: 'border-box',
  border: '5px solid #FF0000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '10px',
}

const encounterCon = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '40px',
}

const detailStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}

const divMargin = {
  margin: "10px"
}

export default PokeEncounter;