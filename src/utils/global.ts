import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
  }
  body,
  input,
  textarea,
  select,
  button {
    font: ${({ theme }) => theme.font.weight.normal} 1em ${({ theme }) =>
  theme.font.family.Roboto}, sans-serif;
  }
  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white[1]};
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  ul,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p{
    font-size: ${({ theme }) => theme.font.textSize.base};
  }

  .root{
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
