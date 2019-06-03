import React, { Component } from 'react'

export default class GetTaskLocalStorage extends Component {
    render() {
        return (
            <button
            onClick={()=>this.props.generateData()}
            className="btn btn-danger mt-3">
            <i className="far fa-edit mr-2" />
            Get data mẫu
          </button>
        )
    }
}
