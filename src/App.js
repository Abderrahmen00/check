
import React from 'react';
import logo from './logo.svg';
import myimage from './imageInSrc.png';
import "./style.css"  


function App(){
  return(
    <div>
      <div className="title red">
<h1 style={{border: "solid 1px black", maxWidth:"100vw"}}>My title</h1>
</div>
<img src={myimage} style={{width:"99.8%"}}></img>
<img src="/imageInPublic.jpeg" style={{width:"99.8%"}}></img>
</div>)
};


export default App;
