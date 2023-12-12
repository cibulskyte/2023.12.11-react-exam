

import PropTypes from 'prop-types';
import styles from '../components/Button.module.scss';
const Button = ({ label, onClick, type, disabled, className, style, icon }) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <div className={styles.buttonContent}>
      {icon && <img src={icon} alt="Google" className="google-icon" />}
    {label && <span className={styles.label}>{label}</span>}
    </div>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  color:PropTypes.string,
  style:PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
  style: {},
  icon:'',
};

export default Button;