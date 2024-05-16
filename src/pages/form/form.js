import styled from "styled-components";
import { Button, H2, Input } from "../../component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveRequstAsync } from "../../actions/save-request-async";
import { dateTransform } from "../../utils/date-transform";

export const FormContainer = ({ className }) => {
  const [fioValue, setFioValue] = useState("");
  const [telephoneValue, setTelephoneValue] = useState("");
  const [descriptionsValue, setdescriptions] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(
      saveRequstAsync({
        FIO: fioValue,
        telephone: telephoneValue,
        descriptions: descriptionsValue,
        date: dateTransform(new Date()),
      })
    );
    console.log();
  };

  const onFioChange = ({ target }) => setFioValue(target.value);
  const onTelephoneChange = ({ target }) => setTelephoneValue(target.value);
  const onDescriptionChange = ({ target }) => setdescriptions(target.value);

  return (
    <div className={className}>
      <H2>Запись к врачу</H2>
      <form onSubmit={onSave}>
        <div>ФИО</div>
        <Input type="text" onChange={onFioChange}></Input>
        <div>Номер телефона</div>
        <Input type="text" onChange={onTelephoneChange}></Input>
        <div>Опишите вашу проблему</div>
        <Input type="text" onChange={onDescriptionChange}></Input>
        <Button type="supmit">Отправить</Button>
      </form>
    </div>
  );
};

export const Form = styled(FormContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    border: solid 1px #000;
    border-radius: 5px;
    padding: 15px;
  }
`;
