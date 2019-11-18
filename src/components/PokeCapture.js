import React from 'react';

function PokeCapture({ capturedPokemons }) {

    return (
        <React.Fragment>
            <div className={catchCon}
                style={catchCon}>
                <div className={pokeCounter}
                    style={pokeCounter}>

                    <div className="pokeAdd">
                        {
                            capturedPokemons.map((item, id) =>
                                <div className="pokemons" key={id}>

                                    <img src={item.img} alt="img" className="captured" /> <br />
                                    <p> {item.name}   </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const catchCon = {
    maxWidth: '100%',
    boxSizing: 'border-box',
    border: '5px solid #FF0000',
    display: 'flex',
    margin: '10px',
}

const pokeCounter = {
    width: '200px',
    backgroundColor: '#0000CD',
    boxSizing: 'border-box',
    fontFamily: 'monospace',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '50px',
    margin: '40px',
}

export default PokeCapture;