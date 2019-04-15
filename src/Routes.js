import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const NewNote = React.lazy(() => import('./components/NewNote'));
const DisplayNotes = React.lazy(() => import('./components/DisplayNotes'));
const NoMatch = React.lazy(() => import('./components/NoMatch'));

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={DisplayNotes} />
          <Route path='/new' component={NewNote} />

          {/* The NoMatch component is used if the above components aren't rendered */}
          <NoMatch />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;