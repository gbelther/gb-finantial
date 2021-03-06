import { SignIn } from "../components/SignIn";

import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Loader from "react-loader-spinner";

import {
  Container,
  SignWrapper,
  Title,
  InputTextWrapper,
  InputTextSection,
  InputText,
  InputButtonWrapper,
  Button,
  Warning,
} from "./styles-home";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

interface ILoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function Home() {
  const router = useRouter();

  const { isLoading, setIsLoading } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  function handleLogin(event: FormEvent) {
    router.push("/dashboard");
    setIsLoading(true);
  }

  return (
    <Container>
      <SignWrapper onSubmit={handleSubmit(handleLogin)}>
        <Title>Entrar</Title>
        <InputTextWrapper>
          <InputTextSection>
            <InputText
              type="text"
              placeholder="E-mail"
              {...register("email")}
            />
            <Warning>{errors.email?.message}</Warning>
          </InputTextSection>
          <InputTextSection>
            <InputText
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <Warning>{errors.password?.message}</Warning>
          </InputTextSection>
        </InputTextWrapper>
        <InputButtonWrapper>
          <Button type="submit">
            {isLoading ? (
              <Loader type="Oval" width={20} height={20} color="blue" />
            ) : (
              "Entrar"
            )}
          </Button>
        </InputButtonWrapper>
      </SignWrapper>
    </Container>
  );
}
