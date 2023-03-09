import iconAdd from "../../../public/assets/add-icon.svg";

import * as S from "./style";

import { InputProps } from "./type";

export const InputL = ({ type, name }: InputProps) => {
  return (
    <S.Form>
      <S.Input type={type} name={name} />
      <S.Button>
        <S.Image src={iconAdd.src} alt="icone de adicionar mais uma tarefa" />
      </S.Button>
    </S.Form>
  );
};
