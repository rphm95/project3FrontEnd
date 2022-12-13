import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Clothes from './components/clothes'


const App = () => {

  // ========
  // HOOKS ls
  // ========

  const [clothes, setClothes] = useState([])
  // show
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // const [showEdit, setShowEdit] = useState(false)

  // new Cloth
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState()
  const [newStore, setNewStore] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newLink, setNewLink] = useState('')
  const [newType, setNewType] = useState('')

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  // update
  const [updatedName, setUpdatedName] = useState()
  const [updatedPrice, setUpdatedPrice] = useState()
  const [updatedStore, setUpdatedStore] = useState()
  const [updatedImage, setUpdatedImage] = useState()
  const [updatedLink, setUpdatedLink] = useState()
  const [updatedType, setUpdatedType] = useState()

// ==========
// get functions
// ==========
const getAddForm = () => {
  setShowAddForm(!showAddForm)
}

const getSignUp = () => {
  setShowSignUp(!showSignUp)
  setShowAddForm(false)
  setShowLogin(false)
}

const getLogin = () => {
  setShowLogin(!showLogin)
  setShowAddForm(false)
  setShowSignUp(false)
}

// const getShowEdit = () => {
//   setShowEdit(!showEdit)
// }

// ==========
// NEW FORM
// ==========
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
        })
    })
  }

  // ========
  // UPDATE
  // ========
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

  // ========
  // DELETE
  // ========
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



  useEffect(() => {
    axios
      .get('http://localhost:3000/boutique')
      .then((response) => {
        setClothes(response.data)
      })
      axios
      .get('http://localhost:3000/sessions/new', {withCredentials:true})
      .then((response) => {
        setUsers(response.data.username)
        console.log(response.data)
      })
  }, [])

  return (
    <main>
      <h1>Welcome, {users}</h1>
      <button onClick={getAddForm}>Add Clothes</button>
      <button onClick={getSignUp}>Sign Up</button>
      <button onClick={getLogin}>Login</button>
      <button onClick={() => {
        handleSessionsDelete()
      }}>Log Out</button>

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
      </> : <></>}

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
      <div className="row row-cols-2 row-cols-md-3 g-4" >
        {
          clothes.map((clothes, i) => {
            return(
              <Clothes key={i} i={i} clothes={clothes} handleUpdate={handleUpdate} handleUpdatedName={handleUpdatedName} handleUpdatedPrice={handleUpdatedPrice} handleUpdatedStore={handleUpdatedStore} handleUpdatedImage={handleUpdatedImage} handleUpdatedLink={handleUpdatedLink} handleUpdatedType={handleUpdatedType} handleDelete={handleDelete}/>
            )
          })
        }
      </div>


    </main>
  )
}

export default App;
