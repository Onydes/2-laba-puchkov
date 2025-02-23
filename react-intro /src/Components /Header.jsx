import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/616/616554.png" 
        alt="Логотип енциклопедії тварин" 
        className="header-logo"
      />
      <h1 className="header-title">Ласкаво просимо до Енциклопедії Тварин</h1>
      <p className="header-subtitle">Дізнайтеся більше про дивовижний світ природи!</p>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3069/3069171.png" 
        alt="Зображення тварин" 
        className="header-animals"
      />
    </header>
  );
}

export default Header;
