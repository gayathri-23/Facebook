import React from "react";

const Mnews = () => {
 const[s,setState]=React.useState([
  {id:1, userImg:"../img/allu.jpg",name:"Alluarjun", time:"1h", text:"Find me in a Bigboss",postImg:"../img/allu.jpg"},
  {id:2, userImg:"../img/ram.jpg",name:"Ramcharan", time:"2h",text:"BigBoss",postImg:"../img/ram.jpg"},
 ])
 return(
  <div className="news">
   {s.map((post)=>(
    <div key={post.id} className="empty">
     <div className="newsheader">
      <div className="newsheaderimg">
       <img src={post.userImg }alt="user"/>
    </div>
    
    
    <div className="newsheadername">
     {post.name}
   <div className="date"> {post.time}</div>
    </div>
   </div>
    <div className="newsbody">
   <div className="newsbodytext"> {post.text} </div>
   <div className="newsbodyimg" > <img src ={post.postImg} alt="post" />
  </div>

</div>
   </div>

   ))}


  </div>
  
 )
}

export default Mnews;