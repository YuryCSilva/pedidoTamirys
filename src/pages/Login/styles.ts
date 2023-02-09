import styled from "styled-components";
import Button from "components/base/Button";
import { Container } from "components/base/Container/styles";

export const ContainerMain = styled(Container)`
    width: 100vw;
    height: 100vh;    
`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerForm = styled.form`
    width: ${({ theme }) => theme.grid.col_10};
    background-color: ${({ theme }) => theme.colors.white[1]};
    border-radius: 25px;
    position: relative;
    margin: auto;
    padding: ${({ theme }) => theme.sizes.lg};
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.tablet}) {
        width: ${({ theme }) => theme.grid.col_8};
    }

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
        width: ${({ theme }) => theme.grid.col_6};
    }
`

export const ButtonLogin = styled(Button)`
    width: ${({ theme }) => theme.grid.col_12};
    color: ${({ theme }) => theme.colors.white[3]};
    background-color: ${({ theme, isValid }) => isValid ? theme.colors.red[2] : theme.colors.grey[2]};
    cursor: ${({ isValid }) => isValid ? 'disabled' : 'pointer'};
    transition: 0.3s;

    @media screen and(min-width: ${({ theme }) => theme.sizeScreen.tabletLarge}) {
        width: ${({ theme }) => theme.grid.col_6};
    }

    @media screen and(min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
        width: ${({ theme }) => theme.grid.col_3};
    }
`
