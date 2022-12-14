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
  const [showPage, setShowPage] = useState(false);

  // const [showEdit, setShowEdit] = useState(false)

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
  setShowClothes(false)
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
      'http://localhost:3000/boutique',
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
        .get('http://localhost:3000/boutique')
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
      'http://localhost:3000/accessories',
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
        .get('http://localhost:3000/accessories')
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
      'http://localhost:3000/users/new',
      {
        username: newUser,
        password: newPassword
      }, {withCredentials:true}
    ).then(() => {
      axios
        .get('http://localhost:3000/users/new')
        .then((response) => {
          console.log(response.data)
        })
    })
    getLogin()
  }

  const handleLogin = (event) => {
    event.preventDefault()
    axios.post(
      'http://localhost:3000/sessions/userLogin',
      {
        username: newUser,
        password: newPassword
      }, {withCredentials:true}
    ).then(() => {
      axios
        .get('http://localhost:3000/sessions/new', {withCredentials:true})
        .then((response) => {
          console.log(response.data)
          setUsers(response.data.username)
          
        })
    })
  }

  const handleSessionsDelete = (event) => {
    axios.delete(
      'http://localhost:3000/sessions/', {withCredentials:true}
    ).then(() => {
      axios
        .get('http://localhost:3000/sessions/new')
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
        `http://localhost:3000/boutique/${clothesData._id}`,
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
          .get('http://localhost:3000/boutique')
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
        `http://localhost:3000/accessories/${accessoriesData._id}`,
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
          .get('http://localhost:3000/accessories')
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
        .delete(`http://localhost:3000/boutique/${clothesData._id}`)
        .then(() => {
          axios
              .get('http://localhost:3000/boutique')
              .then((response) => {
                setClothes(response.data)
              })
        })
  }

  // ==============================
  //        DELETE ACCESSORIES
  // ===============================
  const handleDeleteAccessorie = (accessoriesData) => {
    axios
        .delete(`http://localhost:3000/accessories/${accessoriesData._id}`)
        .then(() => {
          axios
              .get('http://localhost:3000/accessories')
              .then((response) => {
                setAccessories(response.data)
              })
        })
  }



  useEffect(() => {
    axios
      .get('http://localhost:3000/accessories')
      .then((response) => {
        // console.log(response.data)
        setAccessories(response.data)
      })
    axios
      .get('http://localhost:3000/boutique')
      .then((response) => {
        setClothes(response.data)
      })
      axios
      .get('http://localhost:3000/sessions/new', {withCredentials:true})
      .then((response) => {
        setUsers(response.data.username)
        // console.log(response.data)
      })
  }, [])



  return (
    <main>
      <h1>Welcome, {users}</h1>
      {/* <button onClick={getSignUp}>Sign Up</button>
      <button onClick={getLogin}>Login</button> */}
      {/* <button onClick={() => {
        handleSessionsDelete()
      }}>Log Out</button> */}

      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/vetores-gratis/fundo-do-conceito-boutique-loja-fachada-com-tabuleta_1441-2619.jpg?w=2000" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://img03.shop-pro.jp/PA01003/897/etc/1.jpg?cmsp_timestamp=20190312200659" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/450567/item/goods_02_450567.jpg?width=850" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div> */}

      {users ? <>
        <button onClick={() => {
        handleSessionsDelete()
      }}>Log Out</button>
        <div>
          <button onClick={getAddForm}>Add Clothes</button>
          <button onClick={getAddAccessorieForm}>Add Accessories</button>
          <button onClick={getAccessories}>Accessories</button>
          <button onClick={getClothes}>Clothes</button>
        </div>
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
              <input type="submit" className="form-control btn-info" value="Add New Item" />
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
                <input type="submit" className="form-control btn-dark" value="Add New Accessories" />
              </div>

            </form>
          </div>
        </>
        : null }

      {showClothes ? 
        <div className="row row-cols-2 row-cols-md-3 g-4" >
          {
            clothes.map((clothes, i) => {
              return(
                <Clothes key={i} i={i} clothes={clothes} handleUpdate={handleUpdate} handleUpdatedName={handleUpdatedName} handleUpdatedPrice={handleUpdatedPrice} handleUpdatedStore={handleUpdatedStore} handleUpdatedImage={handleUpdatedImage} handleUpdatedLink={handleUpdatedLink} handleUpdatedType={handleUpdatedType} handleDelete={handleDelete}/>
              )
            })
          }
        </div> : null}

      { showAccessories ? 
        <div className="row row-cols-2 row-cols-md-3 g-4" >
          {
            accessories.map((accessories, i) => {
              return(
                <Accessories key={i} i={i} accessories={accessories} handleUpdateAccessorie={handleUpdateAccessorie} handleUpdatedAccessorieName={handleUpdatedAccessorieName} handleUpdatedAccessoriePrice={handleUpdatedAccessoriePrice} handleUpdatedAccessorieStore={handleUpdatedAccessorieStore} handleUpdatedAccessorieImage={handleUpdatedAccessorieImage} handleUpdatedAccessorieLink={handleUpdatedAccessorieLink} handleUpdatedAccessorieType={handleUpdatedAccessorieType} handleDeleteAccessorie={handleDeleteAccessorie}/>
              )
            })
          }
        </div>: null }
      </> : <>
      <button onClick={getSignUp}>Sign Up</button>
      <button onClick={getLogin}>Login</button>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/vetores-gratis/fundo-do-conceito-boutique-loja-fachada-com-tabuleta_1441-2619.jpg?w=2000" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://img03.shop-pro.jp/PA01003/897/etc/1.jpg?cmsp_timestamp=20190312200659" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/450567/item/goods_02_450567.jpg?width=850" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
      {showLogin ? 
      <>
        <h2>Log In Now!</h2>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input type='text' onChange={handleNewUsername}></input><br></br>
          <label>Password: </label>
          <input type='password' onChange={handleNewPassword}></input><br></br>
          <input type='submit' value='Login'></input>
        </form>
      </> : <></>}</>}
      

      {showSignUp ? 
      <>
        <h2>Sign Up Form</h2>
        <form onSubmit={handleNewUser}>
          <label>Username: </label>
          <input type='text' onChange={handleNewUsername}></input><br></br>
          <label>Password: </label>
          <input type='password' onChange={handleNewPassword}></input><br></br>
          <input type='submit' value='Sign Up'></input>
        </form>
      </> : <></>}

      {/* {showLogin ? 
      <>
        <h2>Log In Now!</h2>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input type='text' onChange={handleNewUsername}></input><br></br>
          <label>Password: </label>
          <input type='password' onChange={handleNewPassword}></input><br></br>
          <input type='submit' value='Login'></input>
        </form>
      </> : <></>} */}

      {/* {showAddForm ?
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
              <input type="submit" className="form-control btn-info" value="Add New Item" />
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
                <input type="submit" className="form-control btn-dark" value="Add New Accessories" />
              </div>

            </form>
          </div>
        </>
        : null }

      {showClothes ? 
        <div className="row row-cols-2 row-cols-md-3 g-4" >
          {
            clothes.map((clothes, i) => {
              return(
                <Clothes key={i} i={i} clothes={clothes} handleUpdate={handleUpdate} handleUpdatedName={handleUpdatedName} handleUpdatedPrice={handleUpdatedPrice} handleUpdatedStore={handleUpdatedStore} handleUpdatedImage={handleUpdatedImage} handleUpdatedLink={handleUpdatedLink} handleUpdatedType={handleUpdatedType} handleDelete={handleDelete}/>
              )
            })
          }
        </div> : null}

      { showAccessories ? 
        <div className="row row-cols-2 row-cols-md-3 g-4" >
          {console.log(accessories)}
          {
            accessories.map((accessories, i) => {
              return(
                <Accessories key={i} i={i} accessories={accessories} handleUpdateAccessorie={handleUpdateAccessorie} handleUpdatedAccessorieName={handleUpdatedAccessorieName} handleUpdatedAccessoriePrice={handleUpdatedAccessoriePrice} handleUpdatedAccessorieStore={handleUpdatedAccessorieStore} handleUpdatedAccessorieImage={handleUpdatedAccessorieImage} handleUpdatedAccessorieLink={handleUpdatedAccessorieLink} handleUpdatedAccessorieType={handleUpdatedAccessorieType} handleDeleteAccessorie={handleDeleteAccessorie}/>
              )
            })
          }
        </div>: null } */}
        

    </main>
  )
}

export default App;
