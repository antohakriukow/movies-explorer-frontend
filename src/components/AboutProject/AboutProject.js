import './AboutProject.css';

const AboutProject = () => {
  return(
    <section className="aboutproject" id="project">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__cards-area">
      <div className="aboutproject__card">
        <p className="aboutproject__card-title">Дипломный проект включал 5 этапов</p>
        <p className="aboutproject__card-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="aboutproject__card">
        <p className="aboutproject__card-title">На выполнение диплома ушло 5 недель</p>
        <p className="aboutproject__card-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      </div>
      <div className="aboutproject__time-container">
        <div className="aboutproject__progress aboutproject__progress_green">1 неделя</div>
        <div className="aboutproject__progress">4 недели</div>
        <p className="aboutproject__time">Back-end</p>
        <p className="aboutproject__time">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
