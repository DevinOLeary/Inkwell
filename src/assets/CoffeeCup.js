
import React from 'react';


class CoffeeCup extends React.Component {
  render(){
    const coffeeCupStyle={
      margin: '5vw'
    }
    return (
      <svg width="70px" height="70px" viewBox="0 0 49 50" version="1.1" style={coffeeCupStyle}>
          <title>Coffee icon</title>
          <desc>Created with Sketch.</desc>
          <defs>
              <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
                  <stop stopColor="#F89D35" offset="0%"></stop>
                  <stop stopColor="#C97CCD" offset="100%"></stop>
              </linearGradient>
          </defs>
          <g id="Desktop-Copy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-381.000000, -477.000000)">
              <g id="Coffee-icon" transform="translate(382.000000, 477.000000)" stroke="url(#linearGradient-1)">
                  <g id="steam" transform="translate(13.000000, 0.000000)" strokeLinecap="round">
                      <path d="M1.41410047,19 C1.97739727,17.2063751 2.13451954,15.9424862 1.8854673,15.2083333 C1.29962292,13.4813891 1.11022302e-16,12.1980137 0,10.875 C7.40148683e-17,8.70833333 0.471366824,7.08333333 1.41410047,6" id="one"></path>
                      <path d="M7.41410047,13 C7.97739727,11.2063751 8.13451954,9.94248622 7.8854673,9.20833333 C7.29962292,7.48138912 6,6.19801375 6,4.875 C6,2.70833333 6.47136682,1.08333333 7.41410047,0" id="two"></path>
                      <path d="M15.4141005,17 C15.9773973,15.2063751 16.1345195,13.9424862 15.8854673,13.2083333 C15.2996229,11.4813891 14,10.1980137 14,8.875 C14,6.70833333 14.4713668,5.08333333 15.4141005,4" id="three"></path>
                  </g>
                  <g id="cup" transform="translate(0.000000, 24.000000)" strokeWidth="2" stroke="#4A4A4A">
                      <path d="M0.5,24.5 L41.5,24.5" id="Line-7" strokeLinecap="square"></path>
                      <circle id="Oval-3" cx="42.5" cy="9.5" r="4.5"></circle>
                      <path d="M20,24 C25.2913479,24 31.5549913,23.0506142 35,17 C38.386878,11.051483 38,-1.38161088e-14 38,4.83563806e-15 C38,-1.38161088e-15 32,-1.60365548e-15 20,4.16950425e-15 L3,0 C3.51277873,8.86788287 4.51277873,14.5345495 6,17 C9.92057974,23.4993658 15.5413755,24 20,24 Z" id="Oval-2"></path>
                  </g>
              </g>
          </g>
      </svg>
    );
  }
}

export default CoffeeCup;
