import React, { Component } from "react";
import styled from "styled-components";
import ModalPopup from "./ModalPopup";
import Controls from "./Controls";
import TaskItems from "./TaskItems";

import listOfTask from '../../Modal/GetData';

const Bound = styled.div`
  h1 {
    text-align: center;
    color: #1289a7;
  }
  .main {
    width: 100%;
    height: 80vh;
  }
`;

export default class ToDoListContainer extends Component {
  render() {
    
    return (
      <Bound>
        <h1 className=" m-3">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row main">
            <div className="col-md-2">
              <Controls />
            </div>
            <div className="col-md-10">
              <TaskItems
              listOfTask={listOfTask.list}
               />
            </div>
          </div>
        <ModalPopup/>
        </div>
      </Bound>
    );
  }
}
