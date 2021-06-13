import {
  Container,
  Day,
  ContentWrapper,
  Category,
  Description,
  TransactionValueWrapper,
  IconsWrapper,
} from "./styles";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ITransaction } from "../../../types";

interface ITransactionProps {
  transaction: ITransaction;
}

export function Transaction({ transaction }: ITransactionProps) {
  const { value, description, category, day } = transaction;

  return (
    <Container defaultValue={value}>
      <Day>{day}</Day>
      <ContentWrapper>
        <Category>{category}</Category>
        <Description>{description}</Description>
      </ContentWrapper>
      <TransactionValueWrapper>R$ {value}</TransactionValueWrapper>
      <IconsWrapper>
        <FiEdit size="1.25rem" />
        <FiTrash2 size="1.25rem" />
      </IconsWrapper>
    </Container>
  );
}
