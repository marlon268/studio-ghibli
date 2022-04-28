import React, { useState, useEffect } from 'react'


export const MovieWatched = (props) => {
  const [watched, setWatched] = useState(props.watched);
  
    const handleClick = () => {
      setWatched(!watched);
    }

  return (
    <React.Fragment>
        <input className="heart" type="checkbox" id="heart" onClick={() => handleClick(!watched)} />
        <label htmlFor="heart">❤</label>
    </React.Fragment>
    
  )
}
