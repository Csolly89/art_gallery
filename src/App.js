import React, { useState, useEffect } from 'react'
import Buttons from './Components/Buttons'
import Frame from './Components/Frame'

function App() {
// state variables here
let [artId, setArtId] = useState(12720)
let [data, setData] = useState({})

useEffect (() => {
  document.title='Welcome to the ArtWorld'
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
  .then(response => response.json())
  .then(resData => setData(resData))
} , [artId])

const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

const displayImage = () => {
  if(!data.primaryImage){
  return (
  <h2>No Image!!</h2>
  )}
}

  return (
    <div className="App">
      <Frame objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Buttons handleIterate={handleIterate}/>
      <displayImage />
    </div>
  );
}

export default App;




// Fetch and display a work of art
// Present buttons to go  forward in the gallery rendering a new work of art
// present buttons to go backward in the gallery rendering past works of art
// gallery fram component
// buttons bar component
// What Values are we storing in state, Id, data returned
//  current artwork integer ID to make api call, buttons will iterate this integer
// useEffect will listen for changes in ID
// data returned from api, gallery frame will display and image from api call
// useEffect will set this state after rendering