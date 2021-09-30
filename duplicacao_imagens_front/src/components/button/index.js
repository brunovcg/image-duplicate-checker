import StyledButton from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  setClick,
  setWidth,
  setFont,
  setBackground,
  setType
}) => {
  return (
    <StyledButton
      setBackground={setBackground}
      onClick={setClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
      setColor={setColor}
      type={setType}
    >
      {children}
    </StyledButton>
  );
};
export default Button;