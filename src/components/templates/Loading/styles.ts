import styled from "styled-components";


export const LoadingBackground = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingImage = styled.img`
    width: 150px;
    height: 150px;
`