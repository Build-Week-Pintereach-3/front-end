import React from 'react'
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground } from '../theme/index'
import { connect } from 'react-redux'

const StyledFeedContainer = styled.div`
    border: 5px solid green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    width: 700px;
`

const StyledFeedCard = styled.div`
    border: 5px solid magenta;
    text-align: center;
    margin: 15px;
    width: 150px;
    height: 150px
`

const StyledHeader = styled.div`
    text-transform: uppercase    
`


export default function MyFeed() {
    return (
        <StyledBackground>
           <StyledHeader>
                    User's Feed
                </StyledHeader>


        <StyledFeedContainer>
            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                         Hide
                    </StyledButton>
            </StyledFeedCard>

            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                        Hide
                    </StyledButton>
            </StyledFeedCard>

            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                        Hide
                    </StyledButton>
            </StyledFeedCard>

            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                        Hide
                    </StyledButton>
            </StyledFeedCard>

            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                        Hide
                    </StyledButton>
            </StyledFeedCard>

            <StyledFeedCard>
                Hello
                    <StyledButton>
                        Save
                    </StyledButton>
                    <StyledButton>
                        Hide
                    </StyledButton>
            </StyledFeedCard>        

        </StyledFeedContainer>
    </StyledBackground>
    )
}