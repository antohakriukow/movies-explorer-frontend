import './Footer.css';

const Footer = ({ path }) => {
  const classSwitcher = `footer ${
    (path === '/profile' || path === '/signin' || path === '/signup')
    ? "footer_hidden"
    : ""
  }`

  return(
    <section className={classSwitcher}>
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__flex-area">
        <p className="footer_copyright">© Антон Крюков | 2021</p>
        <ul className="footer__links">
          <li className="footer__link-item">
            <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-item">
            <a href="https://github.com/antohakriukow?tab=repositories" className="footer__link">Github</a>
          </li>
          <li className="footer__link-item">
            <a href="https://www.facebook.com/" className="footer__link">Facebook</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
