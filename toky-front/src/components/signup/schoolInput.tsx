import { styled } from "styled-components";

export const SchoolBtn = styled.button<{ children: string; value: string }>`
    background-color: #d9d9d9;
    width: 128px;
    height: 128px;
    border-radius: 100%;
    border: none;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        border-width: 3px;
        border-style: solid;
        border-color: ${(props) =>
            props.children === "고려대학교" ? "crimson" : "#0123b4"};
    }
`;

export const SchoolBtnWrapper = styled.div`
    position: relative;
    width: 128px;
    margin-right: 24px;
`;
