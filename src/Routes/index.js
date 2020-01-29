import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

const Home = lazy(() => import('../Pages/Home'));

const Routes = () => {
  return(
    <Suspense
      fallback={
        <div className="loaderContainer">
          <div className="loaderWrapper">
            <div className="loader">Loading...</div>
          </div>
        </div>
      }
    >
      <Switch>
          <Route path='/' component={Home}/>
      </Switch>
    </Suspense>
  );
}

export default Routes;