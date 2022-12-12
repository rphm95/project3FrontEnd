import React from 'react';
import {useState} from 'react';

const Clothes = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const showDescription = () => {
        setShowInfo(!showInfo)
      }

    return(
        <div className="col">
                <div className="card" style={{width: "18 rem"}}>
                  <h2>{props.clothes.store}</h2>
                  <img src={props.clothes.image} className="card-img-top" onClick={showDescription}></img>
                  <div className='card-body'>
                    <h5 className="card-title">{props.clothes.name}</h5>
                    {showInfo ? <div>
                      <h5>{props.clothes.type}</h5>
                      <p className='card-text'>${props.clothes.price}</p>
                      <a href={props.clothes.link} className='btn btn-success'>Ready to Buy?</a>
                      <button className='btn btn-danger'>Delete</button>
                      <button className='btn btn-danger' onClick={props.getShowEdit}>Edit</button>
                    </div> : <></>}
                  </div>
                  
                </div>
              </div>
    )
}

export default Clothes