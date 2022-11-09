import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #efefef;
  background: #fafafa;
  height: 260px;
  margin: 20px 0;
  border-radius: 20px;
  padding: 20px;

  select {
    margin-left: 6px;
    background-color: transparent;
    border: 1px solid #efefef;
  }
`;

export const Form = styled.form`
    position: fixed;
    bottom: -100%;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    z-index:8;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    border:1px solid #efefef;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all .3s ease-in;

    &.active {
        bottom: 20%;
    }

    table {
        width: 100%;
        margin: 20px 0;
        
        thead {

            tr {
                background-color: #222;
                color: #fff;
                th {
                    padding: 6px;
                    font-size: 12px;
                }
            }
        }

        tbody {
            tr {

                &:nth-child(even) {
                    background-color: #efefef;
                }
                td {
                    font-size: 12px;
                    position: relative;
                    height: 32px;
                    select {
                        background-color: transparent;
                        border: none;
                        width: 100%;
                    }

                    input {
                        background-color: transparent;
                        border: none;
                        width: 100%;
                    }

                    textarea {
                        height: 32px;
                        background-color: transparent;
                        width: 100%;
                        border: 1px solid #efefef;
                        padding: 6px;
                        transition: all .2s ease-in;
                        position: absolute;
                        right: 0;
                        top: 0;
                        overflow: hidden;
                        text-overflow: initial;
                        white-space: nowrap;
                        resize: none;
                        border-color: transparent;

                        &:focus {
                            top: 32px;
                            right: 0;
                            margin-left: -379px;
                            width: 758px;
                            z-index: 12;
                            background-color: #fff;
                            border: 2px solid #222;
                            min-height: 240px;
                            border-radius: 20px;
                            border-top-right-radius: 0;
                            padding: 20px;
                            color: #222;
                            overflow: auto;
                            white-space: break-spaces;
                        }
                    }
                }
            }
        }
    }
`;

export const Buttons = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    button {
        background-color: transparent;
        border:1px solid #222;
        color: #222;
        padding: 4px 12px;
        border-radius: 6px;

        &.cancel {
            background-color: #efefef;
            border-color: #ccc;
            color: #868686;
            margin-right: 12px;
            &:hover {
                background-color: rgba(245,245,245,1);
            }
        }

        &.send {
            background: rgba(80,80,200,1);
            border-color: rgba(70,70,200,1);
            color: #fff;
            &:hover {
            background: rgba(90,90,200,1);
            }
        }
    }
`;

export const NewOSButton = styled.div`
    width: 200px;
    height: 100%;
    border: 1px solid #efefef;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 20px;
    background: #FFF;

    button {
        background: rgba(80,80,200,1);
        border: 1px solid rgba(70,70,200,1);
        width: 64px;
        height: 64px;
        border-radius: 32px;
        color: #FFF;
        font-size: 32px;

        &:hover {
            background: rgba(90,90,200,1);
        }
    }
`;