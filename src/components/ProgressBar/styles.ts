import styled from 'styled-components';

export const Container = styled.div`
  progress[value] {
    width: 10rem;
    appearance: none;

    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 20px;
      background-color: #eee;
    }

    ::-webkit-progress-value {
      height: 10px;
      border-radius: 20px;
      background-color: #e2c72d;
    }
  }
`;