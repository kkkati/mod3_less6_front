import styled from "styled-components";

const ErrorContainer = ({ className }) => {
  return <div className={className}>Ошибка</div>;
};

export const Error = styled(ErrorContainer)`
  color: red;
`;
