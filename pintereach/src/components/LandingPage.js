import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground } from '../theme/index'
// we will eventually link these buttons to different components


const StyledHeader = styled.header`
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        
        h3 {
            margin: 0;
        }
    }
`

export default function LandingPage() {
    return (
        <StyledBackground className = 'landing-page-container'>
            <StyledHeader className='landing-page-header'>
                <div>
                    <h3>Welcome to</h3>
                    <h2>Pintereach</h2>
                </div>
                <h4 className ='landing-page-info'>Pintereach is a portal to browse the internet then bring the articles home with you through downloads and personally categorized boards</h4>
            </StyledHeader>
            
            <ButtonDiv>
                <Link to='/create-user'>
                    <StyledButton className='create-user-button'>Create Account</StyledButton>
                </Link>

                <Link to='/login'>
                    <StyledButton className='login-button'>Login</StyledButton>
                </Link>
            </ButtonDiv>

            <footer className='landing-page-footer'>&copy; Copyright - Kewl Krew 2021</footer>
        </StyledBackground>
    )
}