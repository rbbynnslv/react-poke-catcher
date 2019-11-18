import React from 'react';

const styles = {
    backgroundColor: 'blue',
    color: 'white',
    border: '1px solid #fed766',
    borderRadius: '20px',
    padding: '10px',
    width: '150px',
}

function PokeButton(props) {
  
  return <button 
            onClick = {props.btn}
            style={styles}
        >
        {props.children}
        </button>
}

export default PokeButton;