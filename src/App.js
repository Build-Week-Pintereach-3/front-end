import './App.css';
import {Route}from 'react-router-dom'
import {useState} from 'react';
import createUserSchema from './validation/createUserSchema';
import * as yup from 'yup'

//components imports
import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser';
import Login from './components/Login'
import MyFeed from './components/MyFeed';
import PrivateRoute from './components/PrivateRoute';
import MySavedArticles from './components/MySavedArticles';

// first thing I need to do is think about creating the create-user-form
const initialFormValues = {
  firstName: '',
  lastName: '',
  // email: '',
  password: '',
  // termsOfService: false,
  username: ''
  };


// const login values
const initialLoginValues = {
  username: '',
  password: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState([]);
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [articles, setArticles] = useState([]);

// change handler for create user
const createUserChange = (name, value) => {
  yup
  .reach(createUserSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: ' ',
    })
  })
  .catch(error => {
    setFormErrors({
      ...formErrors,
      [name]: error.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value
  })
}


  return (
   <div className='app-container'>
    <Route exact path='/' component={LandingPage} />

    <Route exact path='/create-user'>
      <CreateUser
        change={createUserChange}
        errors={formErrors}
        values={formValues}
        setValues = {setFormValues}
      />
    </Route>

    <Route exact path='/login' render = {(props) => {
      return <Login {...props} loginValues = {loginValues} setValues = {setLoginValues}/>      
    }}>
    </Route>

    <PrivateRoute exact path='/my-feed'>
      <MyFeed />
    </PrivateRoute>

    <Route exact path='/my-saved-articles' render = {(props) => {
      return <MySavedArticles {...props} articles = {articles} setArticles = {setArticles}/>
    }}>
    </Route>

   </div>
  )
}

export default App;
