import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body, html {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: ${props => props.theme.color.base_90};
  color: ${props => props.theme.color.base_20};
  font-size: ${props => props.theme.dim._14px};
  margin: 0;
  height: 100%;
  scrollbar-width: none !important;
}

input {
  border: 1px solid ${props => props.theme.color.base_80};
  border-radius: 4px;
  padding: ${props => props.theme.dim._8px} ${props => props.theme.dim._12px};
  :focus {
    outline: none;
    border-color: ${props => props.theme.color.blue_50};
    box-shadow: 0 1px 3px 0 rgba(47, 83, 215, 0.25), 0 0 1px 0 rgba(47, 83, 215, 0);
  }
}

button {
  border-radius: 4px;
  padding: ${props => props.theme.dim._8px} ${props => props.theme.dim._8px};
  :focus {
    outline: none;
    box-shadow: 0 1px 3px 0 rgba(47, 83, 215, 0.25), 0 0 1px 0 rgba(47, 83, 215, 0);
  }
  :hover{
    background-color: ${props => props.theme.color.blue_50};
    color: ${props => props.theme.color.base_100};
  }
}

img {
  width: 100%;
  height: 120px;  
}

// -------->>>>> Font size <<<<<---------
.header24 {
  font-size: ${props => props.theme.dim._24px};
  font-weight: 600;
  font-family: inherit;
}
.headerNormal24 {
  font-size: ${props => props.theme.dim._24px};
  font-weight: normal;
  font-family: inherit;
}
.header14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: normal;
  font-family: inherit;
}
.headerBold12 {
  font-size: ${props => props.theme.dim._12px};
  font-weight: 600;
  font-family: inherit;
}
.header12 {
  font-size: ${props => props.theme.dim._12px};
  font-weight: normal;
  font-family: inherit;
}
`;

export default GlobalStyle;
