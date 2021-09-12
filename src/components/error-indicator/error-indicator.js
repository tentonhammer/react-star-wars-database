import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Death star" />
      <span className="boom">Ты-дыщ</span>
      <span>Что-то пошло не так...</span>
      <span>Мы занимаемся этим</span>
    </div>
  );
};

export default ErrorIndicator;
