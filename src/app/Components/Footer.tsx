export default function Footer(){
    return(
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>My Portfolio</h2>
        </div>
        
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link github">GitHub</a>
          <a href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/" target="_blank" rel="noopener noreferrer" className="footer-link linkedin">LinkedIn</a>
          <a href="mailto:nimraulfat47@gmail.com" className="footer-link email">Email</a>
        </div>
      </div>
    
      <div className="footer-bottom">
        <p>© 2024 Nimra Ulfat. All Rights Reserved.</p>
      </div>
    </footer>
    
    );
  };
