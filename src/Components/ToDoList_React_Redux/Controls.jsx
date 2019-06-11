import React, { Component } from "react";
import styled from "styled-components";
import AddNewTask from "./Controls/AddNewTask";
// import GetTaskLocalStorage from "./Controls/GetTaskLocalStorage";
import FilterProgress from "./Controls/FilterProgress";
import FilterLable from "./Controls/FilterLable";
import FilterPriority from "./Controls/FilterPriority";
import Sort from "./Controls/Sort";

const Bound = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: #001f3f; */
  background: #273c75;
  color: #fff;
  padding: 0 0 5rem 0;
  button {
    width: 100%;
    &:focus,
    &:active {
      box-shadow: none;
    }
  }
  .done,
  .cancel,
  .frontend,
  .backend,
  .api,
  .issue {
    cursor: pointer;
    align-items: center;
    p {
      margin: 0;
    }
    span {
      width: 20px;
      height: 20px;
      margin: 0 1rem 0 0;
      border-radius: 50%;
    }
  }
`;

export default class Controls extends Component {
  render() {
    return (
      <Bound>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Thêm công việc mới */}
              <AddNewTask />
              {/* Lấy task từ LocalStorage */}
              {/* <GetTaskLocalStorage
              generateData={this.props.generateData}
              /> */}
              {/* ///////////////  FILTER AND SORT ///////////////// */}
              {/* Filter Progress */}
              <FilterProgress />
              {/* Filter Lable */}
              <FilterLable />
              {/* Filter theo mức độ */}
              <FilterPriority />
              {/* Sort */}
              <Sort />
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}
