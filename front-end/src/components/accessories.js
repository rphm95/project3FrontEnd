import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const Accessories = (props) => {
    const [showInfoAccessories, setShowInfoAccessories] = useState(false)
   

    const showDescriptionAccessories = () => {
        setShowInfoAccessories(!showInfoAccessories);
    }

    const handleUpdateLikeAccessories = (accessoriesData) => {
      axios
          .put(`http://localhost:3000/accessories/${accessoriesData._id}`, 
          {
            like: !accessoriesData.like
          })
          .then((response) => {
            axios
                .get('http://localhost:3000/accessories')
                .then((response) => {
                  props.setAccessories(response.data)
                })
          })
    }


    return (
        <div className="col">
            <div className="card border-danger" style={{maxWidth: "18 rem"}} id="margin">
                <div class="card-header"><b>{props.accessories.store}</b></div>
                <img src={props.accessories.image} id="animation" className="card-img-top" alt="..." onClick={showDescriptionAccessories}/>
                <div className='card-body'>
                    <h4 className="card-title" onClick={showDescriptionAccessories}>{props.accessories.name}</h4>

                    {showInfoAccessories ? 
                    <div>
                      <h5>{props.accessories.type}</h5>
                      <p className='card-text'>${props.accessories.price}</p>

                      {props.accessories.like ? <><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="..." style={{width:"30px", height:"30px", marginBottom:"2%"}} onClick={() => {handleUpdateLikeAccessories(props.accessories)}}></img><br></br></> : <><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/2048px-Heart_empty_font_awesome.svg.png" alt="..." style={{width:"30px", height:"30px", marginBottom:"2%"}} onClick={() => {handleUpdateLikeAccessories(props.accessories)}}></img><br></br></>}


                      <a href={props.accessories.link} className='btn btn-success' id="bt12">Ready to Buy?</a>
                      <button className='btn btn-danger' id="bt5" onClick={(event) => {
                        props.handleDeleteAccessories(props.accessories)
                      }}>Delete</button>
                      <button className='btn btn-info' data-bs-toggle="modal" id="bt6" data-bs-target={`#exampleModal${props.accessories._id}`}>Edit</button>
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
                              <button type="button" className="btn btn-secondary" id="bt7" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" id="bt8" data-bs-dismiss="modal" onClick={(event) => {props.handleUpdateAccessorie(props.accessories)}}>Save changes</button>
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