import react from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, ButtonDiv } from '../theme/index'

const StyledNavBar = styled.div`
    background-color: ${(props) => props.theme.secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    h2 {
        margin-left: 20px;
    }

    .nav-button-div {
        margin-right: 20px;
    }
`

export default function NavBar() {
    return (
        <StyledNavBar>
            <h2>Pintereach</h2>

            <ButtonDiv className='nav-button-div'>
                <Link to='/my-feed'>
                    <StyledButton className='my-feeds'>My Feed</StyledButton>
                </Link>

                <Link to='/my-saved-articles'>
                    <StyledButton className='my-saved-articles-button'>My Saved Articles</StyledButton>
                </Link>
            </ButtonDiv>

        </StyledNavBar>

    )
}