import React from 'react'
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground, StyledForm, FormDiv } from '../theme'



export default function Login(props) {
    const {change, login, values} = props

    const onChange = event => {
        const {name, value} = event.target
        change(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        login()
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
                            value={values.username}
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
                            value={values.password}
                        />
                    </label>
                </FormDiv>
                <ButtonDiv>
                    <StyledButton onClick={onSubmit} className='login-button'>Login</StyledButton>
                </ButtonDiv>
                
            </StyledForm>
        </StyledBackground>
    )
}