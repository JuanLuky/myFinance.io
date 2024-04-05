import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 130px;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 25px;
  flex: 1;
  border: 2px solid #7ED18D;

  @media (max-width: 500px) {
    align-items: center;
    p {
      font-size: 16px;
    }

    span {
      font-size: 26px;
    }
    
  }
`;

export const ContainerTwo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-top: 8px;
`;
