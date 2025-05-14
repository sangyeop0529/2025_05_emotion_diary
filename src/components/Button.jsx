import "./Button.css";

const Button = ({ text = "Button", onClick, type }) => {
  return (
    <div className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
