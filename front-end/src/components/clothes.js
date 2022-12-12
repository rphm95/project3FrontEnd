import React from 'react';
import {useState} from 'react';

const Clothes = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showEdit, setShowEdit] = useState(false)

    const showDescription = () => {
      setShowInfo(!showInfo)
    }

    const getShowEdit = () => {
      setShowEdit(!showEdit)
    }
    // const myModal = document.getElementById('myModal')
    // const myInput = document.getElementById('myInput')

    // myModal.addEventListener('shown.bs.modal', () => {
    //   myInput.focus()
    // })

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
                      <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={getShowEdit}>Edit</button>
                    </div> : <></>}
                    
                    {showEdit ? 
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT {props.clothes.name}</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
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
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" onClick={(event) => {props.handleUpdate(props.clothes)}}>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    : null}

                  </div>
                </div>
          </div>

    )
}

export default Clothes