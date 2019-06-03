import React, { Component } from 'react'


export default class AddNewTask extends Component {
    render() {
        return (
            <button className="btn btn-success mt-3" data-toggle="modal" data-target="#myModal">
            <i className="far fa-edit mr-2" />
            Create Task
          </button>
        )
    }
}
