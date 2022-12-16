import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Clothes from './components/clothes'
import Accessories from './components/accessories'


const App = () => {

  // ==================
  // HOOKS FOR CLOTHES
  // ==================

  const [clothes, setClothes] = useState([])
  // show
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // new Clothes
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState()
  const [newStore, setNewStore] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newLink, setNewLink] = useState('')
  const [newType, setNewType] = useState('')

  // update
  const [updatedName, setUpdatedName] = useState()
  const [updatedPrice, setUpdatedPrice] = useState()
  const [updatedStore, setUpdatedStore] = useState()
  const [updatedImage, setUpdatedImage] = useState()
  const [updatedLink, setUpdatedLink] = useState()
  const [updatedType, setUpdatedType] = useState()

  // =====================
  // HOOKS FOR ACCESSORIES
  // =====================
  const [accessories, setAccessories] = useState([])

  // show
  const [showAddAccessories, setShowAddAccessories] = useState(false)
  const [showAccessories, setShowAccessories] = useState(false)
  const [showClothes, setShowClothes] = useState(false)

  //new accessorie
  const [newAccessorieName, setNewAccessorieName] = useState('')
  const [newAccessoriePrice, setNewAccessoriePrice] = useState()
  const [newAccessorieStore, setNewAccessorieStore] = useState('')
  const [newAccessorieImage, setNewAccessorieImage] = useState('')
  const [newAccessorieLink, setNewAccessorieLink] = useState('')
  const [newAccessorieType, setNewAccessorieType] = useState('')

  // update
  const [updatedAccessorieName, setUpdatedAccessorieName] = useState()
  const [updatedAccessoriePrice, setUpdatedAccessoriePrice] = useState()
  const [updatedAccessorieStore, setUpdatedAccessorieStore] = useState()
  const [updatedAccessorieImage, setUpdatedAccessorieImage] = useState()
  const [updatedAccessorieLink, setUpdatedAccessorieLink] = useState()
  const [updatedAccessorieType, setUpdatedAccessorieType] = useState()

  // ==================
  // HOOKS FOR LOGIN
  // ==================
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

// ==============
// get functions
// ==============
const getAddForm = () => {
  setShowAddForm(!showAddForm)
  setShowAddAccessories(false)

}

const getSignUp = () => {
  setShowSignUp(!showSignUp)
  setShowAddForm(false)
  setShowLogin(false)
  setShowClothes(false)

}

const getLogin = () => {
  setShowLogin(!showLogin)
  setShowAddForm(false)
  setShowSignUp(false)
  setShowClothes(false)

}

const getClothes = () => {
  setShowClothes(!showClothes)
  setShowAccessories(false)
  setShowAddAccessories(false)
  if(showAddForm === true) {
    setShowAddForm(false)
  }

}

// for accessories
const getAddAccessorieForm = () => {
  setShowAddAccessories(!showAddAccessories)
  setShowClothes(false)
  setShowAddForm(false)

  
}
const getAccessories = () => {
  setShowAccessories(!showAccessories)
  setShowClothes(false)
  setShowAddForm(false)
  if(showAddAccessories=== true) {
    setShowAddAccessories(false)
  }
}


// ==========
// NEW FORM
// ==========
//clothes
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPrice = (event) => {
    setNewPrice(event.target.value)
  }

  const handleNewStore = (event) => {
    setNewStore(event.target.value)
  }

  const handleNewImage = (event) => {
    setNewImage(event.target.value)
  }

  const handleNewLink = (event) => {
    setNewLink(event.target.value)
  }

  const handleNewType = (event) => {
    setNewType(event.target.value)
  }

  const handleNewUsername = (event) => {
    setNewUser(event.target.value)
  }

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value)
  }

  // handle new form
  const handleNewClothes = (event) => {
    event.preventDefault()
    axios.post(
      'https://quiet-cove-66596.herokuapp.com/boutique',
      {
        name: newName,
        price: newPrice,
        store: newStore,
        image: newImage,
        link: newLink,
        type: newType
      }
    ).then(() => {
      axios
        .get('https://quiet-cove-66596.herokuapp.com/boutique')
        .then((response) => {
          setClothes(response.data)
        })
    })
  }

  // ================================
  //        NEW FORM ACCESSORIES
  // =================================
  const handleNewAccessorieName = (event) => {
    setNewAccessorieName(event.target.value)
  }

  const handleNewAccessoriePrice = (event) => {
    setNewAccessoriePrice(event.target.value)
  }

  const handleNewAccessorieStore = (event) => {
    setNewAccessorieStore(event.target.value)
  }

  const handleNewAccessorieImage = (event) => {
    setNewAccessorieImage(event.target.value)
  }

  const handleNewAccessorieLink = (event) => {
    setNewAccessorieLink(event.target.value)
  }

  const handleNewAccessorieType = (event) => {
    setNewAccessorieType(event.target.value)
  }

  // handle new ACCESSORIES form
  const handleNewAccessorie = (event) => {
    event.preventDefault()
    axios.post(
      'https://quiet-cove-66596.herokuapp.com/accessories',
      {
        name: newAccessorieName,
        price: newAccessoriePrice,
        store: newAccessorieStore,
        image: newAccessorieImage,
        link: newAccessorieLink,
        type: newAccessorieType
      }
    ).then(() => {
      axios
        .get('https://quiet-cove-66596.herokuapp.com/accessories')
        .then((response) => {
          setAccessories(response.data)
        })
    })
  }

  // ===============
  //  USER HANDLER
  // ===============
  const handleNewUser = (event) => {
    axios.post(
      'https://quiet-cove-66596.herokuapp.com/users/new',
      {
        username: newUser,
        password: newPassword
      }, {withCredentials:true}
    ).then(() => {
      axios
        .get('https://quiet-cove-66596.herokuapp.com/users/new')
        .then((response) => {
          console.log(response.data)
        })
    })
    getLogin()
  }

  const handleLogin = (event) => {
    event.preventDefault()
    axios.post(
      'https://quiet-cove-66596.herokuapp.com/sessions/userLogin',
      {
        username: newUser,
        password: newPassword
      }, {withCredentials:true}
    ).then(() => {
      axios
        .get('https://quiet-cove-66596.herokuapp.com/sessions/new', {withCredentials:true})
        .then((response) => {
          console.log(response.data)
          setUsers(response.data.username)
          
        })
    })
  }

  const handleSessionsDelete = (event) => {
    axios.delete(
      'https://quiet-cove-66596.herokuapp.com/sessions/', {withCredentials:true}
    ).then(() => {
      axios
        .get('https://quiet-cove-66596.herokuapp.com/sessions/new')
        .then((response) => {
          console.log(response)
          setUsers('')
          setShowLogin(false)
          setShowAccessories(false)
          setShowClothes(false)
          setShowAddAccessories(false)
          setShowAddForm(false)
        })
    })
  }
  // ===============================
  //        UPDATE CLOTHES
  // ================================
  const handleUpdatedName = (event) => {
    setUpdatedName(event.target.value)
  }

  const handleUpdatedPrice = (event) => {
    setUpdatedPrice(event.target.value)
  }

  const handleUpdatedStore = (event) => {
    setUpdatedStore(event.target.value)
  }

  const handleUpdatedImage = (event) => {
    setUpdatedImage(event.target.value)
  }

  const handleUpdatedLink = (event) => {
    setUpdatedLink(event.target.value)
  }

  const handleUpdatedType = (event) => {
    setUpdatedType(event.target.value)
  }

  const handleUpdate = (clothesData) => {
    axios
      .put(
        `https://quiet-cove-66596.herokuapp.com/boutique/${clothesData._id}`,
        {
          name: updatedName,
          price: updatedPrice,
          store: updatedStore,
          image: updatedImage,
          link: updatedLink,
          type: updatedType
        }
      ).then((response) => {
        axios
          .get('https://quiet-cove-66596.herokuapp.com/boutique')
          .then((response) => {
            setClothes(response.data)
          })
      })
  }
  // ===================================
  //          UPDATE ACCESSORIES
  // ===================================
  const handleUpdatedAccessorieName = (event) => {
    setUpdatedAccessorieName(event.target.value)
  }

  const handleUpdatedAccessoriePrice = (event) => {
    setUpdatedAccessoriePrice(event.target.value)
  }

  const handleUpdatedAccessorieStore = (event) => {
    setUpdatedAccessorieStore(event.target.value)
  }

  const handleUpdatedAccessorieImage = (event) => {
    setUpdatedAccessorieImage(event.target.value)
  }

  const handleUpdatedAccessorieLink = (event) => {
    setUpdatedAccessorieLink(event.target.value)
  }

  const handleUpdatedAccessorieType = (event) => {
    setUpdatedAccessorieType(event.target.value)
  }

  const handleUpdateAccessorie = (accessoriesData) => {
    axios
      .put(
        `https://quiet-cove-66596.herokuapp.com/accessories/${accessoriesData._id}`,
        {
          name: updatedAccessorieName,
          price: updatedAccessoriePrice,
          store: updatedAccessorieStore,
          image: updatedAccessorieImage,
          link: updatedAccessorieLink,
          type: updatedAccessorieType
        }
      ).then((response) => {
        axios
          .get('https://quiet-cove-66596.herokuapp.com/accessories')
          .then((response) => {
            // console.log(response.data)
            setAccessories(response.data)
          })
      })
  }

  // ===============================
  //        DELETE CLOTHES
  // ===============================
  const handleDelete = (clothesData) => {
    axios
        .delete(`https://quiet-cove-66596.herokuapp.com/boutique/${clothesData._id}`)
        .then(() => {
          axios
              .get('https://quiet-cove-66596.herokuapp.com/boutique')
              .then((response) => {
                setClothes(response.data)
              })
        })
  }

  // ==============================
  //        DELETE ACCESSORIES
  // ===============================
  const handleDeleteAccessories = (accessoriesData) => {
    axios
        .delete(`https://quiet-cove-66596.herokuapp.com/accessories/${accessoriesData._id}`)
        .then(() => {
          axios
              .get('https://quiet-cove-66596.herokuapp.com/accessories')
              .then((response) => {
                setAccessories(response.data)
              })
        })
  }



  useEffect(() => {
    axios
      .get('https://quiet-cove-66596.herokuapp.com/accessories')
      .then((response) => {
        // console.log(response.data)
        setAccessories(response.data)
      })
    axios
      .get('https://quiet-cove-66596.herokuapp.com/boutique')
      .then((response) => {
        setClothes(response.data)
      })
      axios
      .get('https://quiet-cove-66596.herokuapp.com/sessions/new', {withCredentials:true})
      .then((response) => {
        setUsers(response.data.username)
        // console.log(response.data)
      })
  }, [])



  return (
    <section>
      {users ? <>
        <nav>
          <div className='logo'>
            <img id="logo" src="https://img.freepik.com/premium-vector/luxury-boutique-logo-templates_15146-128.jpg?w=2000"></img>
                <h1 id="boutique" style={{position:"relative", top:"70px"}}><strong><em>Welcome , </em>{users}</strong></h1>
                <ul className="menu-list">
                  <li className="menu" onClick={() => {
                    handleSessionsDelete()
                  }} style={{height:"3rem"}}><strong>Log Out</strong></li>
                  <li className="menu" onClick={getAccessories} style={{height:"3rem"}}><strong>Accessories</strong></li>
                  <li className="menu" onClick={getClothes} style={{height:"3rem"}}><strong>Clothes</strong></li>
                  {showClothes ? <li className="menu" onClick={getAddForm} style={{height:"3rem"}}><strong>Add Clothes</strong></li> : null}
                  {showAccessories ? <li className="menu" onClick={getAddAccessorieForm} style={{height:"3rem"}}><strong>Add Accessories</strong></li> : null}
                </ul>
          </div>
        </nav>

        {showAddForm ?
       <>
        <h2>Add New Item</h2>
        <div className='container'>
          <form className="row" onSubmit={handleNewClothes}>
            
            <div className="col-md-6">
              <label className="form-label">Name</label> 
              <input type="text" className="form-control" onChange={handleNewName} /><br/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Name of Store</label>  
              <input type="text" className="form-control" onChange={handleNewStore} /><br/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input type="number" className="form-control" onChange={handleNewPrice}/><br/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Type/Category</label>  
              <input type="text" className="form-control" onChange={handleNewType} /><br/>
            </div>

            <div className="col-md-12">
              <label className="form-label">Image Link</label>  
              <input type="text" className="form-control" onChange={handleNewImage} /><br/>
            </div>

            <div className="col-md-12">
              <label className="form-label">Link to Store Site</label>  
              <input type="text" className="form-control" onChange={handleNewLink} /><br/>
            </div>
            
            <div className="col-md-12"> 
              <input type="submit" className="form-control btn-info" id="bt1" value="Add New Item" />
            </div>

          </form>
        </div>
       </>  
      : null }


        {showAddAccessories ?  
        <>
          <h2>Add New Accessories</h2>
          <div className='container'>
            <form className="row" onSubmit={handleNewAccessorie}>
              
              <div className="col-md-6">
                <label className="form-label">Name</label> 
                <input type="text" className="form-control" onChange={handleNewAccessorieName} /><br/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Name of Store</label>  
                <input type="text" className="form-control" onChange={handleNewAccessorieStore} /><br/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" onChange={handleNewAccessoriePrice}/><br/>
              </div>

              <div className="col-md-6">
                <label className="form-label">Type/Category</label>  
                <input type="text" className="form-control" onChange={handleNewAccessorieType} /><br/>
              </div>

              <div className="col-md-12">
                <label className="form-label">Image Link</label>  
                <input type="text" className="form-control" onChange={handleNewAccessorieImage} /><br/>
              </div>

              <div className="col-md-12">
                <label className="form-label">Link to Store Site</label>  
                <input type="text" className="form-control" onChange={handleNewAccessorieLink} /><br/>
              </div>
              
              <div className="col-md-12"> 
                <input type="submit" className="form-control btn-dark" id="bt2" value="Add New Accessories" />
              </div>

            </form>
          </div>
        </>
        : null }

      {showClothes ? 
      <>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 g-4" >
              {
                clothes.map((clothes, i) => {
                  return(
                    <Clothes key={i} i={i} clothes={clothes} handleUpdate={handleUpdate} handleUpdatedName={handleUpdatedName} handleUpdatedPrice={handleUpdatedPrice} handleUpdatedStore={handleUpdatedStore} handleUpdatedImage={handleUpdatedImage} handleUpdatedLink={handleUpdatedLink} handleUpdatedType={handleUpdatedType} handleDelete={handleDelete} setClothes={setClothes}/>
                  )
                })
              }
        </div></div></> : null}

      { showAccessories ? 
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 g-4" >
            {
              accessories.map((accessories, i) => {
                return(
                  <Accessories key={i} i={i} accessories={accessories} handleUpdateAccessorie={handleUpdateAccessorie} handleUpdatedAccessorieName={handleUpdatedAccessorieName} handleUpdatedAccessoriePrice={handleUpdatedAccessoriePrice} handleUpdatedAccessorieStore={handleUpdatedAccessorieStore} handleUpdatedAccessorieImage={handleUpdatedAccessorieImage} handleUpdatedAccessorieLink={handleUpdatedAccessorieLink} handleUpdatedAccessorieType={handleUpdatedAccessorieType} handleDeleteAccessories={handleDeleteAccessories} setAccessories={setAccessories}/>
                )
              })
            }
         </div></div>: null }
      </> : <>
      {/* <h1 id="boutique"><em>La Boutique!</em></h1> */}
      <div className='container' style={{marginTop: "2%"}}>
        <h1 id="boutiquee">La Boutique</h1>
        <button className='btn' onClick={getSignUp} id="bt3">Sign Up</button>
        <button className='btn' onClick={getLogin} id="bt4">Login</button>
      </div>
      <div className="containerr">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{width: "90%", margin: "auto", marginTop: "5%", height: "20rem", objectFit: "cover", border: "5px solid black"}}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{height:"310px"}} src="https://img.freepik.com/vetores-gratis/fundo-do-conceito-boutique-loja-fachada-com-tabuleta_1441-2619.jpg?w=2000" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src="https://www.mesdemoisellesparis.com/img/cms/BOUTIQUES/cambon-boutique-paris.jpg" style={{height:"310px"}} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://www.cristaleriamadrid.es/uploads/paginas/escaparate-tienda.jpg" style={{height:"310px"}} className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
      </div>
      {showLogin ? 
      <>
        <form onSubmit={handleLogin} className="login">
          <h2>Log In</h2>
          <label className='label'>Username: </label>
          <input className="input" type='text' onChange={handleNewUsername}/><br></br>
          <label className='label'>Password: </label>
          <input className="input" type='password' onChange={handleNewPassword}/><br></br>
          <input type='submit' value='Login' className="btn btn-success" id="bt14"></input>
        </form>
      </> : <></>}</>}
      

      {showSignUp ? 
      <>
        <form onSubmit={handleNewUser} className="signUp">
          <h2>Sign Up Form</h2>
          <label className='label'>Username: </label>
          <input className="input" type='text' onChange={handleNewUsername}></input><br></br>
          <label className='label'>Password: </label>
          <input className="input" type='password' onChange={handleNewPassword}></input><br></br>
          <input type='submit' id="bt15" className="btn btn-success" value='Sign Up'></input>
        </form>
      </> : <></>}
        
      <footer>
        <div className="card text-center" id="footer" style={{marginTop: "20vh"}}>
          <div className="card-header" id="h5">
            La Boutique
          </div>
          <div className="card-body">
            <h5 className="card-title" id="h5">Contact Infomation</h5>
            <p className="card-text" id="p">Got any questions? Feel free to contact us at any of these links.</p>
            <ul className="socials">
              <li><a href="https://github.com/rphm95"><i className="fa fa-github"></i></a></li>
              <li><a href="https://github.com/mnmmar"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/rafaela-hollanda"><i className="fa fa-linkedin-square"></i></a></li>
              <li href="https://www.linkedin.com/in/marmar-min"><a><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>
          <div className="card-footer text-muted">
            c 2022 Developed by Rafaela Hollanda and Mar Mar Min using Node.js, Express.js, React, MongoDB and BootStrap.
          </div>
        </div>
      </footer>
    </section>
    
  )
}

export default App;
