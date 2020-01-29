import Styled from 'styled-components';

import { dim } from '../../Styles/theme';

const HomeStyledContainer = Styled.div`
padding: 0px 5%;

.container {
  display: flex;
  flex-wrap: wrap;
}

.poster-container {
  width: ${dim._scale(128)};
  margin: ${dim._8px};
}

.data-title {
  color: ${props => props.theme.color.base_30};
}

.track-name {
  color: ${props => props.theme.color.base_10};
}

.artist-name {
  color: ${props => props.theme.color.base_10};
}

.genre {
  color: ${props => props.theme.color.base_10};
}

.kind {
  color: ${props => props.theme.color.base_10};
}
`;

export default HomeStyledContainer;