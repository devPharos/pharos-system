import styled from "styled-components";

import lighthouse from '../../assets/images/lighthouse.jpg';

export const Container = styled.div`
  display: flex;
  height: 316px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Leftbox = styled.div`
  background: url(${lighthouse}) center top no-repeat;
  width: 316px;
  height: 316px;
  background-size: 316px;
`;

export const Rightbox = styled.div`
  background: rgba(255,255,255,.1);
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 90%;

`;