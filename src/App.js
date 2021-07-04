import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ContextProvider} from './context';

import {
  NotFound, 
  Home, 
  Calendar, 
  CompetitionsList, 
  TeamsList, 
  Header, 
  Footer
} from './components/index';

import './components/components.css';

function App() {
  return (
    <div className="App">
      <Router basename='soccer_stat'>
        <Header/>
        <ContextProvider>
          <main>
            <Switch>              
              <Route exact path="/" component={Home}/> 
              <Route path="/competitions" component={CompetitionsList}/>
              <Route path="/teams" component={TeamsList}/>
              <Route path="/competition/:id/matches" component={Calendar}/>
              <Route path="/competition/:id/teams" component={TeamsList}/>
              <Route path="/team/:id/matches" component={Calendar}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </ContextProvider>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
