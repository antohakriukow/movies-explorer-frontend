import './Promo.css';
import promoImg from '../../images/promo_back_img.png'

const Promo = () => {
  return(
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img" src={promoImg} alt="promo_img" />
      </div>
    </section>
  );
}

export default Promo;
