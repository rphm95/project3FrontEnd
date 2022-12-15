import React from 'react';
import axios from 'axios';
import {useState} from 'react';

const Clothes = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const showDescription = () => {
      setShowInfo(!showInfo)
    }

    const handleUpdateLike = (clothesData) => {
      axios
          .put(`http://localhost:3000/boutique/${clothesData._id}`, 
          {
            like: !clothesData.like
          }).then((response) => {
            axios
                .get('http://localhost:3000/boutique')
                .then((response) => {
                  props.setClothes(response.data)
                })
          })
    }

    return(
        <div className="col">
                <div className="card" style={{width: "18 rem"}}>
                  <h2>{props.clothes.store}</h2>
                  <img src={props.clothes.image} alt="..." className="card-img-top img-thumbnail" onClick={showDescription}/>
                  <div className='card-body'>
                    <h5 className="card-title" onClick={showDescription}>{props.clothes.name}</h5>
                    {showInfo ? <div>
                      <h5>{props.clothes.type}</h5>
                      <p className='card-text'>${props.clothes.price}</p>

                      {props.clothes.like ? <><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="..." style={{width:"30px", height:"30px", marginBottom:"2%"}} onClick={() => {handleUpdateLike(props.clothes)}}/><br></br></> : <><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/2048px-Heart_empty_font_awesome.svg.png" alt="..." style={{width:"30px", height:"30px", marginBottom:"2%"}} onClick={() => {handleUpdateLike(props.clothes)}}/><br></br></>}

                      <a href={props.clothes.link} className='btn btn-success'>Ready to Buy?</a>
                      <button className='btn btn-danger' onClick={(event) => {
                        props.handleDelete(props.clothes)
                      }}>Delete</button>
                      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target={`#exampleModal${props.clothes._id}`}>Edit</button>
                    </div> : <></>}
                    
                    {/* {showEdit ?  */}
                      <div className="modal fade" id={`exampleModal${props.clothes._id}`}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT {props.clothes.name}</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <form className="row">
              
                                <div className="col-md-6">
                                  <label className="form-label">Name</label> 
                                  <input type="text" className="form-control" defaultValue={props.clothes.name} onChange={props.handleUpdatedName} /><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Name of Store</label>  
                                  <input type="text" className="form-control" defaultValue={props.clothes.store} onChange={props.handleUpdatedStore} /><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Price</label>
                                  <input type="number" className="form-control" defaultValue={props.clothes.price} onChange={props.handleUpdatedPrice}/><br/>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">Type/Category</label>  
                                  <input type="text" className="form-control" defaultValue={props.clothes.type} onChange={props.handleUpdatedType} /><br/>
                                </div>

                                <div className="col-md-12">
                                  <label className="form-label">Image Link</label>  
                                  <input type="text" className="form-control" defaultValue={props.clothes.image} onChange={props.handleUpdatedImage} /><br/>
                                </div>

                                <div className="col-md-12">
                                  <label className="form-label">Link to Store Site</label>  
                                  <input type="text" className="form-control" defaultValue={props.clothes.link} onChange={props.handleUpdatedLink} /><br/>
                                </div>

                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(event) => {props.handleUpdate(props.clothes)}}>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/* : null} */}

                  </div>
                </div>
          </div>

    )
}

export default Clothes