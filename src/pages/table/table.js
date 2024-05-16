import { useEffect, useState } from "react";
import styled from "styled-components";
import { requestServer } from "../../utils/request_server";
import { H2, RequestRow, TableRow } from "../../component";

const TableContainer = ({ className }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    requestServer("/requests").then(({ data: requests }) => {
      setRequests(requests);
    });
  }, []);

  console.log(requests);

  return (
    <div className={className}>
      <H2>Заявки с формы</H2>
      {requests.length ? (
        <>
          <TableRow>
            <div className="date-column">Дата отправки</div>
            <div className="FIO-column">ФИО</div>
            <div className="telephone-column">Телефон</div>
            <div className="descriptions-column">Проблема</div>
          </TableRow>
          {requests.map(({ id, date, FIO, telephone, descriptions }) => (
            <RequestRow
              key={id}
              date={date}
              FIO={FIO}
              telephone={telephone}
              descriptions={descriptions}
            />
          ))}
        </>
      ) : (
        <div> Заявки не найдены</div>
      )}
      {/* <table>
        <tr>
          <th>Дата отправки</th>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>Проблема</th>
        </tr>
      </table> */}
    </div>
  );
};

export const Table = styled(TableContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 570px;
  font-size: 16px;
`;
