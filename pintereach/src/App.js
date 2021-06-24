import './App.css';
import {Link, Route, Switch, useHistory}from 'react-router-dom'
import {useState} from 'react';
import createUserSchema from './validation/createUserSchema';
import * as yup from 'yup'
import axios from 'axios'

//components imports
import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser';
import Login from './components/Login'
import MyFeed from './components/MyFeed';
import MySavedArticles from './components/MySavedArticles';

// first thing I need to do is think about creating the create-user-form
const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService: false,
  username: ''
  };


// const login values
const initialLoginValues = {
  username: '',
  password: ''
}

function App() {
  const  history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState([]);
  const [loginValues, setLoginValues] = useState(initialLoginValues)

// CREATE USER STUFF

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

// submit handler for create user
const createUserSubmit = () => {
  const newUser = {
    firstName: formValues.firstName.trim(),
    lastName: formValues.lastName.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    username: formValues.username.trim()
  }
  postNewUser(newUser)
  history.push('registration-complete')
}

// post new user to backend api
const postNewUser = (newUser) => {
  axios
    .post('our api', newUser)
    .catch(error => console.log('problem with axios post', error))
}



// LOGIN STUFF

// change handler for login
const loginChange = (name, value) => {
  setLoginValues({
    ...loginValues,
    [name]: value
  })
}

// submit handler for login
const loginButtonSubmit = () => {
  const loggedInUser = {
    username: loginValues.username,
    password: loginValues.password
  }
  history.push('my-feed')
  actuallyLoginUser(loggedInUser)
}

const actuallyLoginUser = (loggedInUser) => {
  axios
    .post('our api', loggedInUser)
    .then(response => {
      // some type of function to take people to user my-feed, where user can save articles and such (my-board)
    })
    .catch(error => console.log('problem with login axios post', error))
} 

  return (
   <div className='app-container'>
      
      <Route exact path='/' component={LandingPage} />

      <Route exact path='/create-user'>
        <CreateUser
          change={createUserChange}
          errors={formErrors}
          submit={createUserSubmit}
          values={formValues}
        />
      </Route>

      <Route exact path='/login'>
        <Login
          change={loginChange}
          login={loginButtonSubmit}
          values={loginValues}
        />
      </Route>

      <Route exact path='/my-feed'>
        <MyFeed />
      </Route>

      <Route exact path='/my-saved-articles'>
        <MySavedArticles/>
      </Route>

   </div>
  )
}

export default App;
