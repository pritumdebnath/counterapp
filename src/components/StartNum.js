import React, { Component } from 'react';

class StartNum extends Component {
    state = {
        count: ''
    }

    handleChange = (e) => {
        this.setState({
            count: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.startNum(this.state.count)
        this.setState({
            count: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.count} />
                <button className="myButton">Input</button>
            </form>
        )
    }
}

export default StartNum