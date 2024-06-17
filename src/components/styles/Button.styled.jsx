import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.input)`
    margin-top: 0.63em;
    width: 3.3rem;
    padding: 0.6em;
    align-self: self-end;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 1em;
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
