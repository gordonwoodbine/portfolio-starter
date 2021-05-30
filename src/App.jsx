import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </main>
      <Footer />
    </div>
  )
};

export default App;