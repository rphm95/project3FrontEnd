import React from 'react';
import {useState} from 'react';

const Accessories = (props) => {
    const [showInfoAccessories, setShowInfoAccessories] = useState(false)
    // const [showEditAccessories, setShowEditAccessories] = useState(false)

    const showDescriptionAccessories = () => {
        setShowInfoAccessories(!showInfoAccessories);
    }

    return (
        <div className="col">
            <div className="card" style={{width: "18 rem"}}>
                <h2>{props.accessories.store}</h2>
                <img src={props.accessories.image} className="card-img-top" onClick={showDescriptionAccessories}></img>
                <div className='card-body'>
                    <h5 className="card-title" onClick={showDescriptionAccessories}>{props.accessories.name}</h5>

                    {showInfoAccessories ? 
                    <div>
                      <h5>{props.accessories.type}</h5>
                      <p className='card-text'>${props.accessories.price}</p>
                      <a href={props.accessories.link} className='btn btn-success'>Ready to Buy?</a>
                      <button className='btn btn-danger' onClick={(event) => {
                        props.handleDelete(props.accessories)
                      }}>Delete</button>
                      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target={`#exampleModal${props.accessories._id}`}>Edit</button>
                    </div> : <></>}

            {/* --------------- ACCESSORIES EDIT MODAL ------------------ */}

                    <div className="modal fade" id={`exampleModal${props.accessories._id}`}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT {props.accessories.name}</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <form className="row">
              
                                <div className="col-md-6">
                                  <label className="form-label">Name</label> 
                                  <input type="text" className="form-control" defaultValue={props.accessories.name} onChange={props.handleUpdatedAccessorieName} /><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Name of Store</label>  
                                  <input type="text" className="form-control" defaultValue={props.accessories.store} onChange={props.handleUpdatedAccessorieStore} /><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Price</label>
                                  <input type="number" className="form-control" defaultValue={props.accessories.price} onChange={props.handleUpdatedAccessoriePrice}/><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Type/Category</label>  
                                  <input type="text" className="form-control" defaultValue={props.accessories.type} onChange={props.handleUpdatedAccessorieType} /><br/>
                                </div>

                                <div className="col-md-12">
                                  <label className="form-label">Image Link</label>  
                                  <input type="text" className="form-control" defaultValue={props.accessories.image} onChange={props.handleUpdatedAccessorieImage} /><br/>
                                </div>

                                <div className="col-md-12">
                                  <label className="form-label">Link to Store Site</label>  
                                  <input type="text" className="form-control" defaultValue={props.accessories.link} onChange={props.handleUpdatedAccessorieLink} /><br/>
                                </div>

                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(event) => {props.handleUpdateAccessorie(props.accessories)}}>Save changes</button>
                            </div>
                          </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )  

}

export default Accessories;