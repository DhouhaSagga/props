import React from 'react'


function FullName(props) {
  return (
    <div style={{textAlign:"center" , fontFamily:"cursive", fontSize:"20px"}}>
    <h1>{props.name}</h1>
    </div>
  )
}

export default FullName