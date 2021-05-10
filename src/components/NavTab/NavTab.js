import './NavTab.css';

const NavTab = () => {
  return(
    <section className="navtab">
      <nav className="navtab__container">
        <ul className="navtab__list">
          <li className="navtab__item">
            <a href="#project" className="navtab__ancor">О проекте</a>
          </li>
          <li className="navtab__item">
            <a href="#techs" className="navtab__ancor">Технологии</a>
          </li>
          <li className="navtab__item">
            <a href="#student" className="navtab__ancor">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
