import { styled } from "styled-components";

interface NicknameCounterProps {
    nickname: string;
}

export const NicknameInput = styled.input`
    font-family: "SpoqaHanSansNeo-Regular";
    border: none;
    background-color: #d9d9d9;
    width: 90%;
    height: 50px;
    padding: 16px;
`;

export function NicknameCounter({ nickname }: NicknameCounterProps) {
    return <p>{nickname.length}/10</p>;
}

export const NicknameCheck = styled.div`
    width: 90%;
    margin-left: 36px;
    margin-top: 5px;
    color: #757575;
`;
