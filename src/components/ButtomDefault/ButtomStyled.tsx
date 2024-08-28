import styled from "styled-components";

export const ButtomStyled = styled.button`
    width: 150px;
    height: auto;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: #000000;
    text-align: start;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05); 
        transition: transform 0.3s ease;
    }
`;