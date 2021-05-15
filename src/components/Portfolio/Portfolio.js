import './Portfolio.css';

const Portfolio = () => {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio_list">
        <li className="portfolio_item">
          <a href="https://antohakriukow.github.io/how-to-learn/" className="portfolio_link" target="blank">Статичный сайт</a>
        </li>
        <li className="portfolio_item">
          <a href="https://antohakriukow.github.io/russian-travel/" className="portfolio_link" target="blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio_item">
          <a href="https://antohakriukow.github.io/mesto/" className="portfolio_link" target="blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
