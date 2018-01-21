import React from 'react';


const StoreHours = (props) => (
  <div className="text-center" style={props.layout}>
    <h3 style={props.header}>Hours</h3>
    <h4>Monday-Friday</h4>
    <h4>7:30AM-4:00PM</h4>
    <br/>
    <h4>Saturday & Sunday</h4>
    <h4>8:00AM-4:00PM</h4>
  </div>
);

export default StoreHours;
