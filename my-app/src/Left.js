
    import React, { useState } from 'react';
    import index from './index.css';
    
    const Left = () => {
        const[lg,setState]=React.useState([
        {id:1, img:"../img/allu.jpg", name:"alluarjun group"},
        {id:2, img:"../img/mahesh.jpg", name:"mahesh babu group"},
        {id:3, img:"../img/ram.jpg", name:"ram charan group"},
        {id:4, img:"../img/ran.jpg", name:"ranbeer kapoor group"},
        {id:5, img:"../img/Sri.jpg", name:"Sridevi group"},
        ]);


        return(
            <div className="left">
                {lg.map((i)=>(
                    <div className="leftl" key={i.id}>
                        <div className="leftimg">
                            <img src={i.img} />
                        </div>
                        <div className="leftlname">{i.name}</div>
                        </div>
                )
                
                
                
                )}
           
            </div>
        )
    }
    export default Left;