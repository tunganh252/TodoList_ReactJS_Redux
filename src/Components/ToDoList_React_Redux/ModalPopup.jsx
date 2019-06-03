import React, { Component } from "react";
import styled from "styled-components";

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
  render() {
    return (
      <Bound>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-success">Thêm Công Việc</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <h5 className="mt-2">Tên task:</h5>
                <div className="form-group">
                  <input
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
                    rows="3"
                  />
                </div>
                <h5 className="mt-2">Độ ưu tiên:</h5>
                <div className="form-group">
                  <select className="form-control" id="sel1">
                    <option>Thấp</option>
                    <option>Trung bình</option>
                    <option>Cao</option>
                  </select>
                </div>
                <h5 className="mt-2">Người thực hiện:</h5>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Tùng Anh</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Iron Man</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">The Girl</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Chris Evans</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Thor </label>
                  </div>
                </div>
                <h5 className="mt-2">Nhãn:</h5>
                <div className="form-group d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Front End</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Back End</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">API</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Issue</label>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}
