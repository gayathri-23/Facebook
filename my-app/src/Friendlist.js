import React from 'react';

const Friendslist = () => {
 const[state,setState]=React.useState([
 {id:1,img:"../img/allu.jpg",name:"AlluArjun"},
 {id:2,img:"../img/ram.jpg",name:"Ramcharan "},
 {id:3,img:"../img/Sri.jpg",name:"Sridev"},
 {id:4,img:"../img/mahesh.jpg",name:"maheshbabu "},
 {id:5,img:"../img/ran.jpg",name:"Ranbeer kapoor "},
 ]);




 return(
  <div className="freind">
  {state.map((f)=>(
  <div className="friendlist" key={f.id}>
   <div className="friendlistimg">
    <span className="s"></span>
    <img src={f.img}/>
    </div>   
  <div className="friendlistname">{f.name}</div>
  </div>
  ))}  


  </div>
 )
}















export default Friendslist;