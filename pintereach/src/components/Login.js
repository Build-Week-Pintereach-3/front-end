import React from 'react'

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
        <div className='login-container'>
            <form onSubmit={onSubmit}>
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

                <button onClick={onSubmit} className='login-button'>Login</button>
            </form>
        </div>
    )
}