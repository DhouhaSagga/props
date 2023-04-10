import React from 'react'

function Bio({bio, handlealert,img}) {
  return (
    <div>
        <button onClick={()=>handlealert("hello my name is Dhouha Sagga")} style={{margin:"0 35%", color:"blue"}}> Click here to show name</button>
    <div>
        <br></br>
      {img.map((el)=><div>
        <img src={el.img}/>
      </div>)}

        <h1 style={{fontFamily:"-moz-initial", textAlign:"center",fontSize:"20px"}}>{bio}</h1>
    </div>
    </div>
  )
}

export default Bio