import React from 'react';
import PropTypes from 'prop-types';
import './animatedLogo.css';


const AnimatedLogo = props => {

    const peices = [];
  
    for(let i = 0; i < 6; i++){
     peices.push({cName: `AnimatedLogoPeice-${i}`, src: `/Logo_${30 + 60*i}.svg`})
    }

    return (
    <div className="Logo-area">
    {peices && peices.map(p => {return (
      <div className={p.cName}>
      <div className="App-logo-filler"/>
      <img src={p.src} className="logo-peice" alt="logo" />
    </div>
    )})}
  </div>) ;
};

AnimatedLogo.propTypes = {};

export default AnimatedLogo;