import styled from "styled-components";

const TableRowContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  ${({ border }) => (border ? "border: 1px solid #000;" : "")}
  // height: 100px;

  & > div {
    display: flex;
    padding: 0 10px;
  }

  & .date-column {
    width: 110px;
  }

  & .FIO-column {
    width: 170px;
  }

  & .telephone-column {
    width: 110px;
  }

  & .descriptions-column {
    width: 180px;
  }
`;
