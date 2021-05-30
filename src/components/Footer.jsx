import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1
      }
    }
  }

  return (
    <motion.footer
      className="site-footer"
      variants={footerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className="container">
        <p>Coded with <i className="fas fa-heart site-footer__icon heart"></i> and <i className="fas fa-mug-hot site-footer__icon"></i> by Mike J. Lightfoot</p>
        <p>&copy; {year}</p>
      </div>
    </motion.footer>
  )
};

export default Footer;