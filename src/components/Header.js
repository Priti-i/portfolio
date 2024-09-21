import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="nav-item1 navbar">
          <h3>Priti</h3>
        </div>
        <div className="nav-item2 navbar">
          <ul>
            <a href="#"><li><i className="fas fa-home"/> Home</li></a>
            <a href="#about"><li><i className="fas fa-info-circle"/> About</li></a>
            <a href="#contact"> <li><i className="fas fa-phone"/> Contact</li> </a>
            <a href="#skills"><li><i className="fas fa-code"/> Skills</li> </a>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
