import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
  margin-top: -40px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 360px;
    width: 90%;
  }
`;

