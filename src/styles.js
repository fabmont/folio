import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const StaticBottomPanel = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 30px;
  padding: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Open Sans';

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomButtons = styled.button`
  padding: 6px 14px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: 0;

  :hover {
    color: #a3f7bf;
  }
`;
