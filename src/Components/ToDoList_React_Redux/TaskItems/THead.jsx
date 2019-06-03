import React, { Component } from "react";

export default class THead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Công Việc</th>
          <th scope="col">Nhãn</th>
          <th scope="col">Độ ưu tiên</th>
          <th scope="col">Người thực hiện</th>
          <th scope="col">Xử lý tác vụ</th>
          <th scope="col">Tình trạng</th>
        </tr>
      </thead>
    );
  }
}
