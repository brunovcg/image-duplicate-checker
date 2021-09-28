import StyledButton from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  setClick,
  setWidth,
  setFont,
  setBackground,
}) => {
  return (
    <StyledButton
      setBackground={setBackground}
      onClick={setClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
      setColor={setColor}
    >
      {children}
    </StyledButton>
  );
};
export default Button;