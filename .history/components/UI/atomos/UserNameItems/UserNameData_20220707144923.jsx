import React from 'react'

export const UserNameData = (props) => {
  return (
    <div className="UserNameData">
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
    </div>
    )
}
