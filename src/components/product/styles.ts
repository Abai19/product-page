import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 20px;
  border-radius: 10px;
  gap: 50px;

  @media (max-width: 1240px) {
    flex-direction: column;
  } 
`;