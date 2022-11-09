import styled from "styled-components";

// import background from "../../assets/images/bg_siaf_opacity.png";

import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(to top right,rgba(18,20,69),rgba(228,104,53,1),rgba(249,185,40,1)) no-repeat center bottom;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width:100%;
  max-width:800px;
  text-align:center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color:#555;
      margin:0 0 10px;

      &::placeholder {
        color:#aaa;
      }
    }

    span {
      color: #ccc;
      align-self: flex-start;
      margin:0 0 10px;
      font-style: italic;
      font-size:12px;
    }

    button {
      margin: 5px 0 0;
      height:44px;
      background: #3b9eff;
      color:#fff;
      font-weight:bold;
      border:0;
      border-radius:4px;
      font-size:16px;
    }

    a {
      color:#FFF;
      margin-top:15px;
      font-size:16px;
      opacity:.8;

      &:hover {
        opacity:1;
      }
    }
  }

`;
