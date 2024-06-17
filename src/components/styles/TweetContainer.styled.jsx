import { motion } from "framer-motion";
import styled from "styled-components";

export const TweetContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 2em;
    width: 35rem;
    border: 0.063em solid #d6d6d6b5;
    margin-bottom: 1em;
    box-shadow: 0.32em 0.32em 1em #00000028;
    background-color: ${({ theme }) => theme.colors.light};

    .userContainer {
        display: flex;
        align-items: center;
    }

    .heartIcon {
        color: red;
    }

    .retweetIcon {
        color: blue;
    }

    .ninjaIcon {
        margin: 0.63em;
    }

    .iconContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.6em;
        margin: 0.63em;
    }

    .content {
        padding: 0.63em;
    }

    .icons {
        display: flex;
        gap: 0.32em;
    }
`;

export const CloseButton = styled(motion.div)`
    align-self: self-end;
`;
