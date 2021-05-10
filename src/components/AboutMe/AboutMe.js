import './AboutMe.css';

const AboutMe = () => {
  return(
    <section className="aboutme" id="student">
      <h2 className="aboutproject__title">Студент</h2>
      <div className="aboutme__area">
        <div className="aboutme__info">
          <p className="aboutme__name">Антон</p>
          <p className="aboutme__short">Фронтенд-разработчик, 31 год</p>
          <p className="aboutme__full">Живу в Питере, закончил магистратуру СПБГЭУ по направлению "Учет, анализ и аудит". В прошлом - серийный бухгалтер. Женат, есть сын и кот.</p>
          <ul className="aboutme__social">
            <li className="aboutme__social-item">
              <a href="https://www.facebook.com/" className="aboutme__social-link">Facebook</a>
            </li>
            <li className="aboutme__social-item">
              <a href="https://github.com/antohakriukow" className="aboutme__social-link">Github</a>
            </li>
          </ul>
        </div>
        <div className="aboutme__avatar"></div>
      </div>
    </section>
  );
}

export default AboutMe;
