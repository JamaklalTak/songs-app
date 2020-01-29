import Styled from 'styled-components';
import { dim } from '../../Styles/theme';

const HeaderStyledContainer = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 5%;
background-color: ${props => props.theme.color.base_100};
height: ${dim._60px};
box-shadow: 0 1px 3px 0 rgba(47, 83, 215, 0.25), 0 0 1px 0 rgba(47, 83, 215, 0);
position: sticky;
top: 0;

.site-name {
    color: ${props => props.theme.color.blue_50};
}

.search-btn {
    margin-left: ${dim._8px};
    cursor: pointer;
}
`;

export default HeaderStyledContainer;