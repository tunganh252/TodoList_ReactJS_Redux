import React, {Component} from "react";
import thor from "../../../images/Thor.jpg";
import christ from "../../../images/Christ.jpg";
import iron from "../../../images/ironMan.jpg";
import avatar from "../../../images/avatar.png";
import girl from "../../../images/Girl.png";

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

    renderUser = () => {
        let newData = this
            .props
            .item
            .memberIDArr
            .filter(a => a !== '');
    return newData.map((item, index) => {
            switch (item) {
                case "user_1":
                    return (
                        <div key={index} className="col-4">
                            <img src={avatar} alt="sdfsdf"/>
                        </div>

                    );
                case "user_2":
                    return (
                        <div key={index} className="col-4">
                            <img src={iron} alt="sdfsdf"/>
                        </div>
                    );
                case "user_3":
                    return (
                        <div key={index} className="col-4">
                            <img src={girl} alt="sdfsdf"/>
                        </div>
                    );
                case "user_4":
                    return (
                        <div key={index} className="col-4">
                            <img src={christ} alt="sdfsdf"/>
                        </div>
                    );
                case "user_5":
                    return (
                        <div key={index} className="col-4">
                            <img src={thor} alt="sdfsdf"/>
                        </div>
                    );
                default:
                    break;
            }
        });
    };

    render() {
        let {item, index} = this.props;

        // map labelArr
        let elmLabel = item
            .labelArr
            .map((label, index) => {
                return (<span
                    key={index}
                    style={{
                    backgroundColor: this.getLabelColor(label)
                }}/>);
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
        // Status
        let classStatus;
        switch (parseInt(item.status, 10)) {
            case 1:
                classStatus = <i className="fas fa-spinner mr-3"/>;
                break;
            case 2:
                classStatus = <i className="fas fa-exclamation-triangle mr-3"/>;
                break;
            case 3:
                classStatus = <i className="fas fa-check-square mr-3"/>;
                break;
            case 4:
                classStatus = <i className="fas fa-trash-alt mr-3"></i>;
                break;
            default:
                break;
        }
        return (
            <tr>
                <td>{index + 1}</td>
                <td style={{
                    fontWeight: "700"
                }}>{item.name}</td>
                <td className="d-flex">
                    {/* Label Array */}
                    {elmLabel}
                </td>
                <td className="high">
                    <p className={classPriority}>{elmPriority}</p>
                </td>
                <td>
                    <div className="row">{this.renderUser()}</div>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-block mb-2">
                        Sửa
                    </button>
                    <div className="form-group">
                        <select
                            defaultValue="Settings"
                            className="form-control"
                            id="sel1"
                            style={{
                            color: "black",
                            fontWeight: "600"
                        }}>
                            <option disabled>Settings</option>
                            <option>Đang tiến hành</option>
                            <option>Chưa thực hiện</option>
                            <option>Hoàn thành</option>
                            <option>Hủy bỏ</option>
                        </select>
                    </div>
                </td>
                <td className="done">{classStatus}</td>
            </tr>
        );
    }
}
