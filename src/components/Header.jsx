import { Link } from 'react-router-dom';
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
          <Link to="/" className="site-header__links__link">Home</Link>
          <Link to="/about" className="site-header__links__link">About</Link>
          <Link to="/" className="site-header__links__link">Projects</Link>
          <Link to="/" className="site-header__links__link">Contact</Link>
        </nav>
      </motion.div>
    </header>
  )
};

export default Header;