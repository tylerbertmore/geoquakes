import React from 'react';


const QuakeP = (props) => {

  console.log('QuakeP Props:', props);
  const quakesArr = props.quakes.map((quake) => (
    <p key={quake.id}>{quake.properties.mag} - {quake.properties.place} / {new Date(Date.now() - quake.properties.time).getHours()} hours ago </p>
  ));
  return(
    <>
    {quakesArr}
    </>
  )
}

export default QuakeP;