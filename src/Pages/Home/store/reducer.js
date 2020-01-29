import { createSelector } from 'reselect';
import { actions } from './actions';

const initialState = {
  movieData: [],
};

// Memorized  Selector Function
export const getDataSelector = createSelector(
  state => state.homeReducer.movieData,
  (movieData) => movieData
);

const HomeReducer = (state = initialState, payload = {}) => {
  switch (payload.type) {
    case actions.SAVE_DATA:{
      return {
        ...state,
        movieData: payload.data
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default HomeReducer;
