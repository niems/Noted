import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const DisplayNotes = React.lazy(() => import('./components/DisplayNotes'));
const NoMatch = React.lazy(() => import('./components/NoMatch'));

//! moving NewNote into DisplayNotes - only rendered if adding a 
//! new note or if in desktop mode
//const NewNote = React.lazy(() => import('./components/NewNote'));

function Routes({ allNotes }) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' render={(props) => <DisplayNotes {...props} allNotes={allNotes} />} /> 

          {/* The NoMatch component is used if the above components aren't rendered */}
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;