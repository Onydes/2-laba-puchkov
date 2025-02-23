import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img 
        src="https://img.lovepik.com/png/20231118/an-angry-lion-logo-on-a-white-background-clipart-vector_629764_wh1200.png" 
        alt="Лев" 
        className="footer-logo"
      />
      <div className="footer-links">
        <a href="#">Про тварин</a>
        <a href="#">Рідкісні види</a>
        <a href="#">Контакти</a>
        <a href="#">Галерея</a>
      </div>
      <p className="footer-text">© 2025 Animal Encyclopedia. Усі права захищені.</p>
      <img 
        src="https://e7.pngegg.com/pngimages/20/597/png-clipart-bengal-tiger-logo-tiger-art-mammal-cat-like-mammal-thumbnail.png" 
        alt="Тигр у природі" 
        className="footer-banner"
      />
      <div className="footer-social">
        <p>Слідкуйте за нами:</p>
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;
