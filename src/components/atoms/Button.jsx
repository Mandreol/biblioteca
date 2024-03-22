import '../../styles/atoms/button.css';
const Button = ({ buttontext, handleFuntion }) => {
  return <button onClick={handleFuntion}>{buttontext}</button>;
};

export default Button;
