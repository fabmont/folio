import styled from 'styled-components';

import worklist from '../../constants/worklist';

const workListLength = worklist.length;

export const Container = styled.div`
  display: grid;
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(${parseInt(workListLength / 3 + 1)}, 1fr);
  width: 100%;
  margin: 80px 0;

  @media (max-width: 1365px) {
    margin: 80px 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
