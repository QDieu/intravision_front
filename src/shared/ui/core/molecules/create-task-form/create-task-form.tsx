import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Icons } from "../../../icons";
import { Button } from "../../atoms";

const Wrapper = styled.div`
  background-color: #ecf3f7;
`;

const Header = styled.div`
  padding: 22px 32px;
  background-color: #1a4876;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 20px;

  margin-top: 3px;
`;

const IconWrapper = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: 0.3s;
  }
`;

const Form = styled.form`
  padding: 50px 42px;

  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 40%;
`;

const InputFormWrapper = styled.div`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;

  color: #9f9ea7;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
`;

const InputForm = styled.textarea`
  resize: none;

  border: 1px solid #e8e8e8;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  margin-top: 64px;

  max-width: 180px;

  padding: 10px 19px 12px 19px;
  border-radius: 20px;

  background-color: #008cf0;
  border: 1px solid #008cf0;
  color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #008cf0;
    color: #008cf0;
  }
`;

type TProps = {};

type TFormData = {
  [key: string]: string;
};

export const CreateTaskForm: React.FC<TProps> = ({}) => {
  const { register, handleSubmit } = useForm<TFormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Wrapper>
      <Header>
        <Title>Новая заявка</Title>
        <IconWrapper>
          <Icons.Close />
        </IconWrapper>
      </Header>

      <Form onSubmit={onSubmit}>
        <InputFormWrapper>
          <Label>Название</Label>
          <InputForm {...register("newTask")} rows={5} />
        </InputFormWrapper>
        <InputFormWrapper>
          <Label>Описание</Label>
          <InputForm {...register("description")} rows={7} />
        </InputFormWrapper>

        <Input type="submit" value="Сохранить" />
      </Form>
    </Wrapper>
  );
};