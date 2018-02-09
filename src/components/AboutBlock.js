import React from 'react';

const AboutBlock = (props) => (
  <article dangerouslySetInnerHTML={{ __html: props.about }} className="full-width container column"/>
)

export default AboutBlock;
