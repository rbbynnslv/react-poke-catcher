import React from 'react';

function PokeLogo() {
    return (
        <header>
            <div style={divStyle}>
                <img
                    style={imageStyle}
                    alt="logo"
                    src="https://66.media.tumblr.com/0784160564afca81f597617636f635bb/tumblr_inline_phy0sgNASN1sg4575_500.gifv"
                />
            </div>
        </header>
    )
}

const divStyle = {
    width: '500px',
    height: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const imageStyle = {
    width: '100%',
    height: '100%',
}

export default PokeLogo;