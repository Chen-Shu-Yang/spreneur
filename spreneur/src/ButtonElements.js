import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkR)`
    color: #fff;
    font-size: 1.5rem;
    background: #EF8A56;
    padding: 10px 30px;
    border-radius: 20px;
    border: 2px solid #EF8A56;
    transition: all 0.3s ease;

    &:hover {
        background: none;
        color: #EF8A56;
    }
`;