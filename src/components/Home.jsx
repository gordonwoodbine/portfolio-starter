import { motion } from 'framer-motion';

const homeVariants = {
  hidden: {
    opacity: 0,
    y: 500
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1
    }
  }
}

const Home = () => {
  return (
    <motion.section 
      className="home container"
      variants={homeVariants}
      initial='hidden'
      animate='visible'
    >
      <div className="grid-it">
        <div className="home__text">
          <h1 className="home__text__greet">
            Hi there! I'm <span className="highlight">Mike</span>
            <motion.i 
              className="far fa-smile-beam"
              
            ></motion.i>
            </h1>
          <h2 className="home__text__tag">I'm a <span className="highlight">web developer</span>, currently focusing on the front-end. I love to work on simple and elegant user interfaces.</h2>
          <p>I built this site so you can learn a little bit more about me, the technologies I like to use and some of the projects I've built to date. I hope you like it!</p>
          <div className="home-btns">
            <button className="btn cta-btn">About Me</button>
            <button className="btn cta-btn btn--outline">Projects</button>
          </div>
        </div>
        <div className="home__avatar">
          <div className="home__avatar__img-wrapper">
            <img src="home-icon.png" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;