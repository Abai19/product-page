import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;

    img {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        max-width: 400px;

    }
`;