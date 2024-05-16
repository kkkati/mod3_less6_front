import styled from "styled-components";
import { Authorization, Form, Table } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  const [dataFromServer, setDataFromServer] = useState(null);

  return (
    <AppColumn>
      <div>{dataFromServer}</div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/table" element={<Table />} />
        <Route path="/*" element={<div>Такой страницы не существует</div>} />
      </Routes>
    </AppColumn>
  );
};

export default App;
