import { TableRow } from "../table-row/table-row";
import styled from "styled-components";

const RequestRowContaiber = ({
  className,
  date,
  FIO,
  telephone,
  descriptions,
}) => {
  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="date-column">{date}</div>
        <div className="FIO-column">{FIO}</div>
        <div className="telephone-column">{telephone}</div>
        <div className="descriptions-column">{descriptions}</div>
      </TableRow>
    </div>
  );
};

export const RequestRow = styled(RequestRowContaiber)`
  display: flex;
  height: 50px;
  margin-top: 10px;
`;
