import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RecipeAPI from './components/RecipeAPI';
import RestarantAPI from './components/RestaurantAPI';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/recipes' component={RecipeAPI} />
            <Route path='/restaurants' component={RestarantAPI} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
