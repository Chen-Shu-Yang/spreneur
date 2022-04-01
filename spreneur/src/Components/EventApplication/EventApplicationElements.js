import styled from "styled-components";

export const EventApplicationContainer = styled.div`
    margin-top: 50px;
    margin-bottom: -60px;
`;

export const EventApplicationContent = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const EventApplicationP = styled.p`
    text-align: center;
    margin-bottom: 30px;
`;

export const Form = styled.form`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    color: #A5A5A5;
`;

export const NameInput = styled.input`
    padding: 7px 10px;
    border: 1px solid #A5A5A5;
    outline: none;
`;

export const EmailInput = styled.input`
    padding: 7px 10px;    
    border: 1px solid #A5A5A5;
    outline: none;
`;

export const JointBtn = styled.button`
    padding: 7px 10px;
    background: #EF8A56;
    color: #fff;
    border: 2px solid #EF8A56;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        background: none;
    }
`;