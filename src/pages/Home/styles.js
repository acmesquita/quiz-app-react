import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px;
  background-color: #e3e3e3;
  border-radius: 8px;

  @media ${device.mobileS} { 
    padding: 50px;
  }
`;
