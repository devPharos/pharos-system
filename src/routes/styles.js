import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: left;
  align-items: flex-start;
  height:100%;

  & > main {
    width:100%;
    height:100%;
    max-width:calc(100% - 170px);
    padding-top:15px;
  }

  header, content {
    width:100%;
  }
`;


export const Content = styled.div`
  width:100%;
  background: #eee;
  margin:15px;
`;
