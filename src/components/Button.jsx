import "./Button.css";

const Button = ({ text = "Button", onClick, type }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
