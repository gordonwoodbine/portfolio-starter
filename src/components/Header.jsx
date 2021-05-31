import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: {
    y: -200
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}

const Header = () => {
  return (
    <header className="site-header">
      <motion.div 
        className="container flex-1"
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className="site-header__logo">
          <h2 className="site-header__logo__icon">
            &lt;ML /&gt;
          </h2>
          <p className="site-header__logo__sub">
            mikelightfoot<span className="highlight">.tech</span>
          </p>
        </div>
        <nav className="site-header__links">
          <NavLink to="/" className="site-header__links__link" activeClassName="active" exact={true}>Home</NavLink>
          <NavLink to="/about" className="site-header__links__link" activeClassName="active">About</NavLink>
          <NavLink to="/projects" className="site-header__links__link" activeClassName="active">Projects</NavLink>
          <NavLink to="/contact" className="site-header__links__link" activeClassName="active">Contact</NavLink>
        </nav>
      </motion.div>
    </header>
  )
};

export default Header;