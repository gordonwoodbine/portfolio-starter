import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, buttonVariants } from '../helpers/motionVariants';

const Home = () => {
  return (
    <motion.section 
      className="home container"
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className="grid-it">
        <div className="home__text">
          <h1 className="home__text__greet">
            Hi there! I'm <span className="highlight">Mike</span>
            <i className="far fa-smile-beam"></i>
            </h1>
          <h2 className="home__text__tag">I'm a <span className="highlight">web developer</span>, currently focusing on the front-end. I love to work on simple and elegant user interfaces.</h2>
          <p>I built this site so you can learn a little bit more about me, the technologies I like to use and some of the projects I've built to date. I hope you like it!</p>
          <div className="home-btns">
            <Link to="/about" className="link-btn">
              <motion.button className="btn cta-btn" variants={buttonVariants} whileHover='hover'>About Me</motion.button>
            </Link>
            <Link to="/projects" className="link-btn">
              <motion.button className="btn cta-btn btn--outline" variants={buttonVariants} whileHover='hover'>Projects</motion.button>
            </Link>
          </div>
        </div>
        <div className="home__avatar">
          <div className="home__avatar__img-wrapper">
            <img src="img/home-icon.png" alt="icon of a computer and a mobile phone" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;