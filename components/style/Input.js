import styled from 'styled-components'

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #c3c3c3;
    width: 70%;
    padding-bottom: 1rem;
    text-align: center;
    font-family: Helvetica;
    font-weight: 300;
    font-style: italic;
    font-size: 1.6rem;
    margin-bottom: 3rem;
    line-height: 2.3rem;

    ::placeholder { 
        color: #A3A3A3;
        font-family: Helvetica;
        font-weight: 300;
        font-style: italic;
        font-size: 1.6rem;
        line-height: 2.3rem;
        text-align: center;
    }
    :focus {
        outline: 0;
    }
`
export default Input