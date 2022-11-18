import React from "react";
import {
  Container,
  InputContent,
  Label,
  Input,
  Select,
  Button,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  coment: yup
    .string()
    .required("Comentário é obrigatório")
    .max(400, "400 caracteres suportados"),
  fname: yup
    .string()
    .required("Nome é obrigatório")
    .max(40, "40 caracteres suportados"),
  option: yup.string().required("Opção nao escolhida"),
});

const Form = ({ inforCards }) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const handleSubimit = (e) => {
    inforCards(e);
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(handleSubimit)}>
      <InputContent>
        <Label htmlFor="fname">Full Name</Label>
        <Input
          type="text"
          name="fname"
          {...register("fname")}
          placeholder="Full name.."
        />
        <p style={{ color: "red" }}>{errors.fname?.message}</p>
      </InputContent>
      <InputContent>
        <Label htmlFor="country">Options</Label>
        <Select {...register("option")} name="option">
          <option value="excelent">Excelent</option>
          <option value="good">Good</option>
          <option value="mediun">Mediun</option>
        </Select>
        <p style={{ color: "red" }}>{errors.option?.message}</p>
      </InputContent>
      <InputContent>
        <Label htmlFor="lname">Live a Comment</Label>
        <Input
          type="text"
          name="coment"
          {...register("coment")}
          placeholder="Your coment"
        />
        <p style={{ color: "red" }}>{errors.coment?.message}</p>
      </InputContent>

      <Button type="submit">Submit</Button>
    </Container>
  );
};

export default Form;
