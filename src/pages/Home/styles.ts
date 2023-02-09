
import Button from "components/base/Button";
import { Container } from "components/base/Container/styles";
import styled from "styled-components";

export const ContainerMain = styled(Container)`
`

export const ContainerCard = styled.div`
    width: ${({ theme }) => theme.grid.col_10};
    background-color: ${({ theme }) => theme.colors.white[1]};
    border-radius: 25px;
    position: relative;
    margin: auto;
    padding: ${({ theme }) => theme.sizes.lg};

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.tablet}) {
        width: ${({ theme }) => theme.grid.col_8};
        top: 50%;
        transform: translateY(-50%);
    }
`
export const ContainerButton = styled.div`
    width: ${({ theme }) => theme.grid.col_10};
    margin: auto;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
        width: ${({ theme }) => theme.grid.col_8};
    }
`

export const TitleLogin = styled.h1`
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.tablet}) {
        font-size: 22px;
        line-height: 27px;
    }

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
        font-size: 24px;
        line-height: 29px;
    }
`

export const ParagraphyLogin = styled.p`
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;

    @media screen and (min-width: ${({ theme }) => theme.sizeScreen.desktop}) {
        font-size: 18px;
        line-height: 22px;
    }
`

export const ButtonHome = styled(Button)`
color: ${({ theme }) => theme.colors.white[3]};
    background-color: ${({ theme }) => theme.colors.red[2]};
    transition: 0.3s;
`