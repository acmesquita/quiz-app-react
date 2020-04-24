import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
  background-color: #e3e3e3;
  padding: 120px;
  width: 50%;
  border-radius: 3px;
  text-align: center;

  @media ${device.mobileS} { 
    background-color: #e3e3e3;
    padding: 40px;
    width: 95%;
    border-radius: 3px;
  }
`;
