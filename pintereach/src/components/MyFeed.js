import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { StyledButton, ButtonDiv, StyledBackground } from '../theme/index'
import NavBar from './NavBar';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';

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
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axiosWithAuth().get('/api/articles')
    .then(res => {
      setArticles(res.data)
    })
    .catch(err => console.log(err))
    },[])
    return (

        <div>
            <NavBar></NavBar>
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
    </div>
    )
}