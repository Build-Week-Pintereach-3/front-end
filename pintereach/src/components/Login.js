import React from 'react'
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground, StyledForm, FormDiv } from '../theme'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { useHistory } from 'react-router-dom';


export default function Login(props) {
    // const {change, login, values} = props
    let history = useHistory();

    const onChange = event => {
        props.setValues({
          initialLoginValues: {
            ...props.initialLoginValues,
            [event.target.name]: event.target.value
          }
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('/api/auth/login', props.loginValues)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          history.push('/my-feed')
        })
        .catch(err => console.log(err))
    }

    return (
        <StyledBackground className='login-container'>
            <StyledForm onSubmit={onSubmit}>
            <div className="signInHeader">
                <h3>Welcome Back!</h3>
                <h4>Please Sign In</h4>
            </div>            
                <FormDiv>
                    <label htmlFor='username'>
                        Username:
                        <input
                            id='usernameInput'
                            name='username'
                            onChange={onChange}
                            placeholder='Username must be between 4 and 15 characters'
                            type='text'
                            value={props.username}
                        />
                    </label>
                    <label htmlFor='password'>
                        Password:
                        <input
                            id='password'
                            name='password'
                            onChange={onChange}
                            placeholder='Password must be between 6 and 20 characters'
                            type='password'
                            value={props.password}
                        />
                    </label>
                </FormDiv>
                <ButtonDiv>
                    <StyledButton
                        onClick={onSubmit}
                        className='login-button'>Login
                    </StyledButton>
                </ButtonDiv>
                
            </StyledForm>
        </StyledBackground>
    )
}