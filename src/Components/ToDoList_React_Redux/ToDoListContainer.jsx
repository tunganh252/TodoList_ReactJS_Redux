import React, { Component } from "react";
import styled from "styled-components";
import ModalPopup from "./ModalPopup";
import Controls from "./Controls";
import TaskItems from "./TaskItems";

import listOfTask from "../../Modal/GetData";

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

  constructor(props) {
    super(props);
    this.state={
      tasks:[]
    }
  }
  

  generateData = () => {
    localStorage.setItem('generateData', JSON.stringify(listOfTask.list));
    let data = JSON.parse(localStorage.getItem('generateData'));
    this.setState({
      tasks:data
    })
  }

  addNewTask = (data) => {
    console.log(data);
    let tasksJSON = JSON.parse(localStorage.getItem('generateData'));
    tasksJSON= [...tasksJSON,data];
    this.setState({
      tasks: tasksJSON
    })
    localStorage.setItem('generateData', JSON.stringify(tasksJSON));
    alert('Thêm thành công !')
  }

  render() {
    return (
      <Bound>
        <h1 className=" m-3">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row main">
            <div className="col-xl-3">
              <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Controls
              generateData={this.generateData}
              />

                </div>
              </nav>
            </div>
            <div className="col-xl-9">
              <TaskItems listOfTask={this.state.tasks} />
            </div>
          </div>
          <ModalPopup 
          addNewTask = {this.addNewTask}
          />
        </div>
      </Bound>
    );
  }
}
