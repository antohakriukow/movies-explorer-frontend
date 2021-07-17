import './Popup.css';

const Popup = ({
  text,
  isOpen,
  onClose,
  onClick
  }) => {

  return (
    <section
      className={`popup ${isOpen && 'popup_opened'}`}
      onClick={onClick}
    >
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        />
        <p className="popup__text">
          {text}
        </p>
      </div>
    </section>
  );
}

export default Popup;
