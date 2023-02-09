import styled from "styled-components";
import { ButtonProps } from "types/GlobalInterfaces";

export const Button = styled.button<ButtonProps>`
    padding: calc(${({ padding }) => padding}px / 2) ${({ padding }) => padding}px;
    border-radius: ${({ border_radius }) => border_radius}px;
    margin: ${({ margin }) => margin}px;
`