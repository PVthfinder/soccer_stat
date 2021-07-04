function Footer () {
    return (
        <footer className="page-footer deep-purple darken-4">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text | AlexD
            <a 
              className="grey-text text-lighten-4 right" 
              href="https://github.com/PVthfinder" 
              target="_blank"
              rel="noreferrer"
            >My GitHub</a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;