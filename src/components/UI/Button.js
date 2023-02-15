import  styled from './Button.module.css'
const Button = (props) => {
  return <button type={props.type || "button"} className={styled.alo}>{props.children}</button>;
};
export default Button;
