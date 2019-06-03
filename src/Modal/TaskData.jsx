let randomid = require("randomid");

/// membersID
/// Priority --> 1: Cao, 2: Trung bình, 3: Thấp

const TaskData = [
  {
    id: randomid(30),
    name: "Học ReactJS",
    labelArr: ["FrontEnd", "API", "Issue"],
    priority: 1,
    memberIDArr: ["user_2"],
    status: 2,
    desc: "Sử dụng thành thạo ReactJS kết hợp Redux"
  },
  {
    id: randomid(30),
    name: "Học AngularJS",
    labelArr: ["FrontEnd", "API"],
    priority: 3,
    memberIDArr: ["user_1", "user_4"],
    status: 1,
    desc: "Angular có rất nhiều kiến thức khó"
  },
  {
    id: randomid(30),
    name: "Học VueJS",
    labelArr: ['BackEnd',"Issue","FrontEnd"],
    priority: 2,
    memberIDArr: ["user_3", "user_2"],
    status: 2,
    desc: "VueJS khá dễ học và kế thừa nhiều điểm hay của ReactJS và AngularJS"
  },
  {
    id: randomid(30),
    name: "Học NodeJS - MongoDB",
    labelArr: [ "API", "BackEnd"],
    priority: 1,
    memberIDArr: ["user_4", "user_1", "user_3"],
    status: 1,
    desc: "Thực hiện được RestFul API, xây dựng Database..."
  }
];
export default TaskData;