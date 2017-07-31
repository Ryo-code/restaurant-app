import React from 'react';
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Confirmation from './components/Confirmation';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/restaurants/:id' component={Restaurant}/>
        <Route path='/confirmation' component={Confirmation}/>
      </Switch>
    </main>
  );
}

export default App;