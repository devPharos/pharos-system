import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  display: flex;
  height: calc(100% - 40px);
  flex: 1;
  width: 1200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  main {
    width: calc(100% - 200px);
    flex: 1;
    height: 100%;

    header {
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #efefef;
      height: 64px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100%;
`;

export const Table = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse; 
  thead {
    tr {
      th {
        background-color: #222;
        padding: 6px;
        color: #fff;
        position: sticky;
        top: 0; /* Don't forget this, required for the stickiness */
      }
    }
  }
  tbody {
    tr {
        background-color: rgba(255,255,255,.2);
        border-top: 1px solid rgba(255,255,255,.2);
      &:nth-child(even) {
        background-color: rgba(255,255,255,.25);
      }
      td {
        padding: 12px 6px;
      }
    }
  }
`;

export const ClienteButton = styled.button`
  background: #fff;
  border: none;
  color: #222;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  margin-top: 6px;

  &.active {
    background: #222;
    color: #fff;
  }
`;

export const OSListItem = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
  text-align: center;
  color: #868686;
  font-size: 12px;
  position: relative;

  p {
    margin: 6px 0;
  }

  .status {
    font-size: 12px;
    padding: 5px;
    margin: 6px 0;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #eee;
    text-align: center;

    &.F {
      color: #7c7;
      border-color: #7c7;
    }
  }

  .detalhe {


    .textarea {
        height: 18px;
        background-color: transparent;
        width: 100%;
        border: 1px solid #efefef;
        transition: all .2s ease-in;
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        resize: none;
        border-color: transparent;
    }

    &:hover {
      .textarea {
        color: #222;
      }
    }
  }
`;