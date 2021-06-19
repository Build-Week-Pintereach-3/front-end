import styled from "styled-components";

const ThemeObject = {
    primaryColor: 'black',
    secondaryColor: 'crimson',
}

const StyledButton = styled.button`
    background-color: white;
    border: none;
    color: ${(props) => props.theme.secondaryColor};
    padding: 6px;
    font-size: 16px;
    font-weight: 700;
    margin: 3px;

    &:hover {
        background-color: ${(props) => props.theme.secondaryColor};
        color: white;
    }
`

const ButtonDiv = styled.div`
    background-color: ${(props) => props.theme.secondaryColor};
    padding: 2px;
    display: flex;
    justify-content: space-evenly;
`

const StyledBackground = styled.div`
    background-color: ${(props) => props.theme.primaryColor};
    height: 100vh;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h2 {
        font-size: 6rem;
        margin: 0 auto;
    }

    h4 {
        width: 80%;
    }

`

const StyledForm = styled.form`
width: 75%;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

label {
    color: white;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    

    p {
        margin: 0;
        min-width: 100px;
        text-align: right;
    }

    signInHeader {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
`
const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

`

export { StyledButton, ButtonDiv, StyledBackground, StyledForm, FormDiv };

export default ThemeObject;
