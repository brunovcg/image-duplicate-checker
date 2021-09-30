import StyledButton from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  setClick,
  setWidth,
  setFont,
  setBackground,
  setType,
  setMaxWidth,
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
      setMaxWidth={setMaxWidth}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
