import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayNotes from './components/DisplayNotes';

//TODO: code new note component and move to file
function NewNote() {
  return (
    <div>new note :D</div>
  );
}

function NoMatch() {
  return (
    <div>Invalid path</div>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/new' component={NewNote} />
        <Route exact path='/' component={DisplayNotes} />
        {/* The NoMatch component is used if the above components aren't rendered */}
        <NoMatch />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;