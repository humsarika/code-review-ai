import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CodeReviewAI. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <a href="https://www.buymeacoffee.com/humsarika"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Pizza&emoji=🍕&slug=humsarika&button_colour=378859&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
      </div>
    </footer>
  );
};

export default Footer;
