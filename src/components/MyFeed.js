import React, {useEffect} from 'react'
import styled from 'styled-components'
import { StyledButton,StyledBackground } from '../theme/index'
import NavBar from './NavBar';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import axios from 'axios';

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


export default function MyFeed(props) {
  const {articles, setArticles} = props;

  useEffect(() => {
    axiosWithAuth().get('/api/articles')
    .then(res => {
      console.log(res)
      setArticles(res.data)
    })
    .catch(err => console.log(err))
    },[])

    console.log(articles)

  const addArticle = (e) => {
    e.preventDefault();
    // axios call for adding article
  }

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
                        {articles[0].title}
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Save
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                        {articles[1].title}
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Save
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                        {articles[2].title}

                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Save
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                        {articles[3].title}
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Save
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                        {articles[4].title}
                </StyledFeedCard>

                <StyledFeedCard>
                    Hello
                        <StyledButton>
                            Save
                        </StyledButton>
                        <StyledButton>
                            Hide
                        </StyledButton>
                        {articles[5].title}
                </StyledFeedCard>        

            </StyledFeedContainer>
        </StyledBackground>
    </div>
    )
}