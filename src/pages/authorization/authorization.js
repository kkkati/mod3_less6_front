import styled from "styled-components";
import { AuthFormError, Button, Error, H2, Input } from "../../component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { requestServer } from "../../utils/request_server";
import { setUser } from "../../actions";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы и цифры"
    )
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
    )
    .min(4, "Неверно заполнен пароль. Минимум 6 символа")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
});

export const AuthorizationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();
  const store = useStore();
  const [wasLogin, setWasLogin] = useState(false);

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    const unsubscribe = store.subscribe(() => {
      let previousWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== previousWasLogout) {
        reset();
      }
    });
    return unsubscribe;
  }, [reset, store]);

  const onSubmit = ({ login, password }) => {
    requestServer("/login", "POST", { login, password }).then(
      ({ error, user }) => {
        if (error) {
          setServerError(`Ошибка запроса: ${error}`);
          return;
        }
        dispatch(setUser(user));
        sessionStorage.setItem("userData", JSON.stringify(user));
        setWasLogin(true);
      }
    );
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (wasLogin) {
    return <Navigate to="/table"></Navigate>;
  }

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", { onChange: () => setServerError(null) })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
      </form>
    </div>
    // <div className={className}>
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>Электронная почта</div>
    //     <input type="text" placeholder="Логин..."></input>
    //     <div>Пароль</div>
    //     <input type="password" placeholder="Пароль..."></input>
    //     <Error></Error>
    //     <button type="supmit"> Войти</button>
    //   </form>
    // </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
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
