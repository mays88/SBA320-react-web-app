import { motion } from "framer-motion";
import styled from "styled-components";

export const Modal = styled(motion.div)`
    display: block;
    position: initial;
    width: 500px;
    height: 300px;
    border: 1px solid #a3a3a36e;
    margin: auto;
    border-radius: 10px;
    .closeIcon {
        display: flex;
        justify-content: flex-end;
    }
`;
