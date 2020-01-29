import React, { useEffect, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../Components/Header';
import Routes from '../../Routes';

import { getData } from '../Home/store/actions';

import { AppStyledContainer, PagesStyledContainer } from './App.styled';

function App(props) {

  useEffect(() => {
    props.dispatch(getData());
  });

  return (
    <Suspense
      fallback={
        <div className="loaderContainer">
          <div className="loaderWrapper">
            <div className="loader">Loading...</div>
          </div>
        </div>
      }
    >
      <AppStyledContainer>
        <Header />
        <PagesStyledContainer>
          <Routes />
        </PagesStyledContainer>
      </AppStyledContainer>
    </Suspense>
  );
}

export default withRouter(connect()(App));
