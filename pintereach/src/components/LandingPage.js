import React from 'react'
import {Link} from 'react-router-dom'
// we will eventually link these buttons to different components

export default function LandingPage() {
    return (
        <div className = 'landing-page-container'>
            <header className='landing-page-header'>Welcome to Pintereach</header>
                <h3 className ='landing-page-info'>Pintereach is a portal to browse the internet then bring the articles home with you through downloads and personally categorized boards</h3>
            
            <Link to='/create-user'>
                <button className='create-user-button'>Create Account</button>
            </Link>

            <Link to='/login'>
                <button className='login-button'>Login</button>
            </Link>

            <footer className='landing-page-footer'>Copyright - Kewl Krew 2021</footer>
        </div>
    )
}