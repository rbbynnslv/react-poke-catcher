import React from 'react';

import PokeButton from './PokeButton';

function Selects({ items, handleChange }) {
  return (
    <select
      style={selectStyle}
      onChange={e => handleChange(e.target.value)}
      disabled={!items.length}
    >
      {
    /* 
     <option>Choose ...</option>  
    */}

      {items.map(item => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}

    </select>
  )
}

function PokeSelector({ regions,
                        locations,
                        areas,
                        changeLocation,
                        changeArea,
                        changeRegion,
                        exploreBtn}) {
  return (
    <div className="drpStyle" style={divStyle}>
      <div className="drpDown" >
            <React.Fragment>
              <label style={labelStyle}> Region: </label>
              <Selects items={regions} handleChange={changeRegion} />
              <label style={labelStyle}> Location: </label>
              <Selects items={locations} handleChange={changeLocation} />
              <label style={labelStyle}> Area: </label>
              <Selects items={areas} handleChange={changeArea} />
              <PokeButton style={buttonStyle} btn={exploreBtn} > Explore </PokeButton>
            </React.Fragment>
      </div>
    </div>

  );
}

const divStyle = {
  width: '100%',
  height: '100px',
  border: '2px solid #000000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}

const selectStyle = {
  width: '150px',
  height: '40px',
  backgroundColor: '#FF0000',
  border: '5px solid #FF0000',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  color: '#FFFFFF',
  margin: '20px',
}

const labelStyle = {
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '15px',
}

const buttonStyle = {
    backgroundColor: 'FF0000',
    color: 'FFFFFF',
    fontWeight: 'bold',
    border: '1px solid #FED766',
    borderRadius: '20px',
    padding: '10px',
    width: '150px',
}

export default PokeSelector;
