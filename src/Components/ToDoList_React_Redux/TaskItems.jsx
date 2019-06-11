import React, { Component } from "react";
import styled from "styled-components";
import THead from "./TaskItems/THead";
import avatar from "../../images/avatar.png";
import Item from "./TaskItems/Item";

const Bound = styled.section`
  width: 100%;
  height: 100%;
  span {
    width: 20px;
    height: 20px;
    margin: 0 0.2rem 0 0;
    border-radius: 50%;
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
  tbody {
    tr {
      transition: 0.2s all;
      &:hover {
        background-color: #2f3c6a;
        color: white;
        box-shadow: 5px 5px 10px gray;
      }
      td {
        cursor: pointer;
        border: none;
      }
      .done {
        display: flex;
        justify-content: center;
      }
    }
  }
  button {
    &:focus,
    &:active {
      box-shadow: none;
    }
  }
  .high {
    font-weight: 600;
    color: red;
  }
`;

const BoundHeader = styled.div`
  .row {
    width: 100%;
    height: 100px;
    /* background-color: #001f3f; */
    background: #43c6ac; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #191654,
      #43c6ac
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #191654,
      #43c6ac
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .User {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: auto;
        object-fit: contain;
        border-radius: 50%;
        margin: 0 1rem 0 0;
      }
      h4 {
        color: #fff;
      }
    }
    .Items_Search {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      -webkit-clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
      clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
      h3 {
        color: #fff;
        margin: 0 5rem 0 0;
        font-size: 24px;
      }
      input {
        padding: 5px 1rem;
        width: 20rem;
        height: 50px;
        outline: none;
        border: none;
        border-radius: 5px;
      }
    }
  }
`;

export default class TaskItems extends Component {


  renderItem = () => {
    return this.props.listOfTask.map((item,index) => {
      return(
        <Item
          key={index}
          item={item}
          index={index}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}
        />
      )
    })
  }


  render() {
    return (
      <Bound>
        <BoundHeader className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 User">
              <img src={avatar} alt="avatar" />
              <h4>Nguyễn Tùng Anh</h4>
            </div>
            <div className="col-12 col-md-8 Items_Search">
              <input type="text" placeholder="Tìm kiếm công việc" />
            </div>
          </div>
        </BoundHeader>
        <table className="table">
          <THead />
          <tbody>
            {/* Render Item */}
            {this.renderItem()}
          </tbody>
        </table>
      </Bound>
    );
  }
}
