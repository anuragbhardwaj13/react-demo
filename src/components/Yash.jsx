import React from 'react'
import { useState } from 'react'
function Yash() {
    const [name,setName]=useState(0)
  return (
    <>
    <h1>Yash Kumar Pal</h1>
    <h1>{name}</h1>
    <button onClick={()=>setName("hehhe")}>change</button>
    <h1>hwhhw</h1>
    </>
  )
}

export default Yash