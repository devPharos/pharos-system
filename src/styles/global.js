import { createGlobalStyle } from "styled-components";

// import background from "~/assets/images/bg_siaf_opacity.png";

import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";

//@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root {
  --body-bg: #fafafa;
  --body-color: #555;
  --link-color: #222;
  --link-color-hover: #ec5840;
}

/* val(--body-bg) */

* {
  margin:0;
  padding:0;
  outline: unset !important;
  box-sizing: border-box;
}


button::-moz-focus-inner {
  border: 0 !important;
}

*:focus {
  outline: unset !important;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:  #aaa !important;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color:  #aaa !important;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color:  #aaa !important;
}

html,body,#root {
  height:100%;
  overflow-x: hidden;
}

.fadeColor {
  filter: grayscale(100%);
  transition:all .2s ease-in;
}

.fadeColor:hover, .fadeColor:focus {
  filter: grayscale(0%);
}

body {
  -webkit-font-smoothing: antialiased;
  background:#efefef no-repeat center bottom fixed;
  background-size: cover;

  &::after {
    content:'';
    width:100%;
    height:100%;
    display:block;
    position: fixed;
    top: 0;
    left: 0;
    z-index:-1;
  }
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

input:read-only, textarea:read-only {
  color:  #888 !important;
  border: 1px dashed  #ccc !important;
  cursor: not-allowed !important;
}

a {
  text-decoration:none;
  color:#333;
  transition: all .2s ease-in;
  outline:none !important;

  &:hover, &:hover svg {
    color: ${props => (props.trash ? "rgba(215,47,47,1)" : "#333")};
  }
}

ul, li {
  list-style:none;
}

button {
  cursor:pointer;
}

p, input, table, textarea, td {
  color:#333;
}

.read {
  font-size: 12px;
  border: 0;
  background: none;
  color:  #555;
}

table, thead, tbody, tr, td {
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    vertical-align: inherit;
    text-align: left;
    font-weight: inherit;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
    vertical-align: middle;
}

.Toastify .success {
  background:rgb(155,213,49);
  font-weight:bold;
}

.Toastify .error {
  background:rgb(215,47,47);
  font-weight:bold;
}

.successColor {
  color: #339e2b;
}

.errorColor {
  color: rgba(215,47,47,1) !important;
  border-color: rgba(215,47,47,1) !important;
}



label > input, label > select, label > .input {
  width:calc(100% - 60px);
  border: 0;
  background:#FFF;
  height:54px;
  padding: 0 15px;
  color:#333;
  margin:0 5px;
  display:Flex;
  align-items:center;
}

label.radioInput {
  position: relative;
  cursor:pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 54px !important;
  flex: none !important;

  input[type=radio] {
    display:none;
  }

  .radioCheck {
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    width: 44px;
    margin: 5px 5px 0;
    background-color: transparent;
    border: 1px solid rgb(155,213,49);
    color: rgb(155,213,49);
    text-align:center;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
}

span {
  color: #ccc;
  align-self: flex-start;
  margin:0 0 10px;
  font-style: italic;
  font-size:12px;
}

hr {
  border:0;
  height:1px;
  background: rgba(0,0,0,.1);
  margin:10px 0 20px;
}

h1.h1Open {
  cursor:pointer;
}

button.btnAdd, button.btnFinish, button.btn {
  margin: 5px 5px 0;
  height:44px;
  background: transparent;
  padding:0 15px;
  color:#555;
  border:0;
  border-radius:4px;
  transition: background 0.2s;
  border:1px solid #555;
  display:flex;
  align-items:center;
}

button.btnAdd:hover {
    background: rgb(155,213,49);
    border-color: rgb(155,213,49);
    color:#fff;
  }
button.btnFinish, button.btn {
  background: rgb(155,213,49);
  color: #FFF;
  border:1px solid rgb(155,213,49);
  cursor:pointer;

  &:hover {
    background: rgb(155,213,49);
    color: #fff;
  }

  &:disabled {
    background: #ccc;
    border-color: #aaa;
    color: #777;
    cursor:auto;

    &:hover {
      background: #ccc;
      color:#777;
    }
  }
}

.btnFind {
  border:none;
  background: rgb(155,213,49);
  color:#FFF;
  width:54px;
  height:54px;
  display:flex;
  align-items:center;
  border-radius:4px;
  justify-content: center;
  cursor:pointer;

  &:hover {

  }
}

.btnFind {
  border:none;
  background: rgb(155,213,49);
  color:#FFF;
  width:54px;
  height:54px;
  display:flex;
  align-items:center;
  border-radius:4px;
  justify-content: center;
  cursor:pointer;

  &:hover {

  }
}

button.btnAdd svg {
  margin-right:7px;
}

button.btnFinish svg {
  margin-left:7px;
}

.date-filter-element > .react-datepicker-wrapper {
  min-width:0px !important;
}

.react-datepicker-wrapper {
  padding: 0 !important;
  min-width:100px !important;
}

.react-datepicker__input-container {
  height:100% !important;
}

.react-datepicker__input-container > .date-filter-picker {
  width: 100%;
  padding: 0px !important;
}

.react-datepicker__input-container input {
  padding:15px !important;
  height:100%;
  width:100%;
}

.react-confirm-alert-overlay {
  background:rgba(0,0,0,.5) !important;

  h1 {
    font-size: 20px;
    margin-bottom:5px;
  }

  .react-confirm-alert-button-group {
    button {
      border-radius:4px;
      background: transparent;
      border: 1px solid #222;
      color: #222;
      transition:all .2s;

      &:first-child:hover {
        background:#339e2b;
        border: 1px solid transparent;
        color:#FFF;
      }
      &:last-child:hover {
        background:rgba(215,47,47,1);
        border: 1px solid transparent;
        color:#FFF;
      }
    }
  }
}

.gradeTable {
  width:100%;
  background: #fff;
}

.gradeFiltros {
  background: #777;
  display:flex;
  flex-direction: row;
  align-items:center;
  height:39px;
  color: #FFF;

  p {
    padding:0 20px;
    color: #FFF;
  }
}

.gradeHeader tr {
  background: #888;
  border-bottom:2px solid rgba(0,0,0,.05);

  td {
    padding:10px;
    font-weight: bold;
    font-size:14px;
    color:#FFF;
  }

  td.iconSize {
    width:25px;
  }
}

.gradeBody tr {
    width:100%;
    cursor:pointer;
    position:relative;
    transition: all .1s ease-in;

    &:nth-child(odd) {
      background: rgba(0,0,0,.05);
    }

    &:hover {
      background: #ddd;
    }

    &:hover td {
      color: #222;
    }

    &.active ul {
      display:block;
    }

    td:first-child {
      border-left: 5px solid transparent;
    }

    &.approved:hover {
      background: rgb(155,213,49);
      td {
        color: #FFF;
      }
    }

    &.conciliated:hover {
      background: rgb(43,131,219);
      td {
        color: #FFF;
      }
    }

    &.approved td:first-child {
      border-left: 5px solid rgb(155,213,49);
    }

    &.conciliated td:first-child {
      border-left: 5px solid rgb(43,131,219);
    }

    &.canceled td:first-child {
      border-left: 5px solid rgba(215,47,47,1);
    }

    &.conciliated:hover {
      background: rgb(43,131,219);
      color: #fff;
    }

    td {
      padding:10px;
      font-size:14px;
      border-bottom:1px solid rgba(0,0,0,.05);
      position:relative;
      transition: all .1s ease-in;

      & input {
        border: 1px solid #ccc;
        background: #FFF;
        border-radius: 4px;
        height: 40px;
        padding: 5px 8px;
      }

      & .btn {
        & svg {
          margin-right: 5px;
        }
      }
    }

    &.approved:hover td.approved {
      color: #FFF;
    }

    &.conciliated:hover td.conciliated {
      color: #FFF;
    }
  }

  .dialog {
    position:absolute;
    z-index:2;
    left:0;
    top:100%;
    width:200px;
    background:#FFF;
    border-radius:4px;
    display:none;
    cursor:auto;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
    transition: all .1s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    &::before {
      content:'';
      position:absolute;
      left:5px;
      top: -5px;
      width:0;
      height:0;
      border-left:5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #fff;
    }

    li {
      border-bottom:1px solid rgba(0,0,0,.05);
      width:100%;
      padding:10px;
      cursor:pointer;
      transition:all .2s;
      color: #555;

      &:hover {
        color:#888;
      }

      &.trash:hover {
        cursor:pointer;
        color: rgb(215,47,47);
      }
    }
  }

`;
