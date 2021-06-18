import React from 'react';

export default function CreateUser(props) {
    const { change, errors, submit, values } = props

    const onChange = event => {
        const {name, value} = event.target
        // const valueToUse = (type === checkbox ? checked : value)
        change(name, value)
    }

    const createUserSubmit = event => {
        event.preventDefault()
        submit()
    }



    return (
        <div className='create-user-container'>
            <form className='create-user-form'>
                <h2>We're excited that you've decided to join us</h2>
                <label htmlFor='firstName'>
                    First Name:
                    <input
                        id='firstNameInput'
                        name='firstName'
                        onChange={onChange}
                        placeholder='First Name'
                        type='text'
                        value={values.firstName}
                    />
                </label>
                <label htmlFor='lastName'>
                    Last Name:
                    <input
                        id='lastNameInput'
                        name='lastName'
                        onChange={onChange}
                        placeholder='Last Name'
                        type='text'
                        value={values.lastName}
                    />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input 
                        id='emailInput'
                        name='email'
                        onChange={onChange}
                        placeholder='Email'
                        type='email'
                        value={values.email}
                    />
                </label>
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
                <label htmlfor='password'>
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
                {/* <label htmlFor='termsOfService'>
                    Have you read and agreed to our terms of service?
                    <input
                        name='termsOfServiceCheck'
                        onChange={onChange}
                        type='checkbox'
                    />
                </label> */}

                <button id='create-user-submit'>Join Pintereach</button>

                <div className="errors">
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.username}</div>
                </div>
            </form>
        </div>
    )
}

