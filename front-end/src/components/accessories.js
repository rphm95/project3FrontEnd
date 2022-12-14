import React from 'react';
import {useState} from 'react';

const Accessories = (props) => {
    return(
        <div>
            <h1>{props.accessories.name}</h1>
        </div>
        // <div className="col">
        //         <div className="card" style={{width: "18 rem"}}>
        //           <h2>{props.accessories.store}</h2>
        //           <img src={props.accessories.image} className="card-img-top"></img>
        //           <div className='card-body'>
        //             <h5 className="card-title">{props.accessories.name}</h5>
        //             </div>
        //         </div>
        // </div>
    )
}

export default Accessories