import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1
    }
  }
}

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <motion.main
        variants={mainVariants}
        initial='hidden'
        animate='visible'
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </AnimatePresence>
      </motion.main>
      <Footer />
    </div>
  )
};

export default App;