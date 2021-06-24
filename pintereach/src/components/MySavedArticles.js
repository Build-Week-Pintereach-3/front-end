import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground } from '../theme/index'
import NavBar from './NavBar'

const StyledFeedContainer = styled.div`
    border: 5px solid green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    width: 80%;
`

const StyledFeedCard = styled.div`
    border: 5px solid magenta;
    text-align: center;
    margin: 15px;
    width: 20%;
    height: 150px
`

const StyledHeader = styled.div`
    text-transform: uppercase    
`
// .get for specific articles
// .delete for deletion of articles

export default function MySavedArticles() {
    return (

        <div>
            <NavBar></NavBar>
            <StyledBackground>
            <StyledHeader>
                        User's Saved Articles
                    </StyledHeader>


            <StyledFeedContainer>
                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Remove
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                </StyledFeedCard>        

            </StyledFeedContainer>
        </StyledBackground>
    </div>
    )
}