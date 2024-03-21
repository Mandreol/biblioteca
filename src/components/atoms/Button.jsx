import '../../styles/atoms/button.css';
const Button = ({ buttontext, handleFuntion }) => {
  return <div onClick={handleFuntion()}>{buttontext}</div>;
};

export default Button;
