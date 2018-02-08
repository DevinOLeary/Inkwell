import React from 'react';

const mapStyle = {
  width: '100%',
  height: '400px'
}

const Map = () => (
  <iframe style={mapStyle} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=the%20Inkwell%20Cafe&key=AIzaSyC6Qvt9Jbh5UoEsUxSR6pMsQl3kQ7XjZNo" allowFullScreen></iframe>
);

export default Map;
