import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  h3 {
    word-wrap: normal; 
    text-overflow: wrap;
  }

`;

export const Wrapper = styled.div`
  background-color: #e3e3e3;
  padding: 120px;
  width: 60%;
  border-radius: 3px;

  @media ${device.mobileS} { 
    background-color: #e3e3e3;
    padding: 40px;
    width: 95%;
    border-radius: 3px;
  }
`;

export const Option = styled.div`
  padding: 10px;
  border: 3px solid ${props => props.color};
  width: 70%;
  border-radius: 3px;
  margin: 5px;
  cursor: pointer;
`;

export const BtnNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  .btn-default {
    width: 70%;
  }
`;