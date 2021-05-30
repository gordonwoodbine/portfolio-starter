

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>Coded with <i className="fas fa-mug-hot site-footer__icon"></i> by Mike J. Lightfoot</p>
        <p>&copy; {year}</p>
      </div>
    </footer>
  )
};

export default Footer;