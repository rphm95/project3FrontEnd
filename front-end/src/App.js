import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Clothes from './components/clothes'

const App = () => {

  // ========
  // HOOKS 
  // ========

  const [clothes, setClothes] = useState([])
  // show
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  // new Cloth
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState()
  const [newStore, setNewStore] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newLink, setNewLink] = useState('')
  const [newType, setNewType] = useState('')

// ==========
// get functions
// ==========
const getAddForm = () => {
  setShowAddForm(!showAddForm)
}

const getShowEdit = () => {
  setShowEdit(!showEdit)
}

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






  useEffect(() => {
    axios
      .get('http://localhost:3000/boutique')
      .then((response) => {
        setClothes(response.data)
      })
  }, [])

  return (
    <main>
      <h1>Welcome to...</h1>
      <button onClick={getAddForm}>Add Clothes</button>

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
          clothes.map((clothes) => {
            return(
              <Clothes clothes={clothes} getShowEdit={getShowEdit} showEdit={showEdit}></Clothes>
            )
          })
        }
      </div>


    </main>
  )
}

export default App;
