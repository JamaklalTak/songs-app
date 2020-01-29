import Styled from 'styled-components';

import { dim } from '../../Styles/theme';

const height = window.innerHeight;

const AppStyledContainer = Styled.div`
margin: 0 auto;
width: 100%;
`;

const PagesStyledContainer = Styled.div`
background-color: ${props => props.theme.color.base_80};
max-height: ${dim._scale(height - 80)};
overflow-y: scroll;
padding-top: ${dim._12px};
`;

export { AppStyledContainer, PagesStyledContainer };