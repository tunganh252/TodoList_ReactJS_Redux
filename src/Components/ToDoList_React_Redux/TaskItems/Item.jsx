import React, { Component } from "react";
import thor from "../../../images/Thor.jpg";

export default class Item extends Component {
  getLabelColor = label => {
    let labelColor;
    switch (label) {
      case "FrontEnd":
        return (labelColor = "green");
      case "BackEnd":
        return (labelColor = "purple");
      case "API":
        return (labelColor = "#00a8ff");
      case "Issue":
        return (labelColor = "red");
      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };

  render() {
    let { item, index } = this.props;

    // map labelArr
    let elmLabel = item.labelArr.map((label, index) => {
      return (
        <span
          key={index}
          style={{
            backgroundColor: this.getLabelColor(label)
          }}
        />
      );
    });
    // Priority
    let elmPriority;
    let classPriority;
    switch (parseInt(item.priority, 10)) {
      case 1:
        elmPriority = "Cao";
        classPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Trung Bình";
        classPriority = "text-success";
        break;
      case 3:
        elmPriority = "Thấp";
        classPriority = "text-primary";
        break;

      default:
        break;
    }




    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="d-flex">
          {/* Label Array */}
          {elmLabel}
        </td>
        <td className="high">
          <p className={classPriority}>
            {elmPriority}
          </p>
        </td>
        <td>
          <img className="m-1" src={thor} alt="thor" />
          <img className="m-1" src={thor} alt="thor" />
        </td>
        <td>
          <button type="button" className="btn btn-outline-primary">
            Sửa
          </button>
          <button type="button" className="btn btn-outline-success ml-1">
            Xong
          </button>
          <button type="button" className="btn btn-outline-danger ml-1">
            Xóa
          </button>
        </td>
        <td className="done">
          <i className="far fa-check-square" />
        </td>
      </tr>
    );
  }
}
