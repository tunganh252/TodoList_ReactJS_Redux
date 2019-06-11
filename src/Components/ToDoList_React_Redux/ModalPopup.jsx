import React, { Component } from "react";
import styled from "styled-components";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import randomid from 'randomid'

const Bound = styled.div`
  .form-check {
    margin: 0 1.2rem 0 0;
    color: #008dc2;
    font-weight: 600;
    input {
      width: 20px;
      height: 20px;
    }
  }
  .modal-content {
  }
`;

export default class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      desc: "",
      priority: "",
      memberIDArr:[],
      labelArr:[],
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id:randomid(20)
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state)
  };

  memberChanged = (newUser) => {
    this.setState({
      memberIDArr: newUser
    });
  }
  labelChanged = (newLabel) => {
    this.setState({
      labelArr: newLabel
    });
  }

  render() {
    return (
      <Bound>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-success">Thêm Công Việc</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <form onSubmit={e => this.onSubmit(e)}>
                <div className="modal-body">
                  <h5 className="mt-2">Tên task:</h5>
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={e => this.onChange(e)}
                      type="text"
                      placeholder="Nhập tên công việc"
                      style={{
                        padding: "10px 15px",
                        width: "100%"
                      }}
                    />
                  </div>
                  <h5 className="mt-2">Mô tả:</h5>
                  <div className="form-group">
                    <textarea
                      placeholder="Mô tả chi tiết Công Việc:"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="desc"
                      onChange={e => this.onChange(e)}
                      rows="3"
                    />
                  </div>
                  <h5 className="mt-2">Độ ưu tiên:</h5>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="sel1"
                      name="priority"
                      defaultValue="Chọn độ ưu tiên"
                      onChange={e => this.onChange(e)}
                    >
                      <option disabled>Chọn độ ưu tiên</option>
                      <option value={3}>Thấp</option>
                      <option value={2}>Trung bình</option>
                      <option value={1}>Cao</option>
                    </select>
                  </div>

                  <h5 className="mt-2">Người thực hiện:</h5>
                  <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    name="memberIDArr"
                    value={this.state.memberIDArr}
                    onChange={this.memberChanged}
                  >
                    <label className='m-3'>
                      <Checkbox value="user_1" /> Nguyễn Tùng Anh
                    </label>
                    <label className='m-3'>
                      <Checkbox value="user_2" /> Iron Man
                    </label>
                    <label className='m-3'>
                      <Checkbox value="user_3" /> A Girl
                    </label>
                    <label className='m-3'>
                      <Checkbox value="user_4" /> Christ Evans
                    </label>
                    <label className='m-3'>
                      <Checkbox value="user_5" /> Thor
                    </label>
                  </CheckboxGroup>
<hr/>
                  <h5 className="mt-2">Nhãn:</h5>
                  <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    name="memberIDArr"
                    value={this.state.labelArr}
                    onChange={this.labelChanged}
                  >
                    <label className='m-3'>
                      <Checkbox value="FrontEnd" /> Front End
                    </label>
                    <label className='m-3'>
                      <Checkbox value="BackEnd" /> Back End
                    </label>
                    <label className='m-3'>
                      <Checkbox value="API" /> API
                    </label>
                    <label className='m-3'>
                      <Checkbox value="Issue" /> Issue
                    </label>
                  </CheckboxGroup>
                </div>

                <div className="modal-footer">
                  <button 
                  type="submit" className="btn btn-success"
                  >
                    Thêm Tasks
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}
