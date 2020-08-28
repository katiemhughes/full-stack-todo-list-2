import React, { Component } from "react";
import axios from "axios";

class ToDoList extends Component {
  state = {
    inputText: "",
  };
  //I don't need to define items in the state here because we don't use it in this component.

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/todolistfullstack/v1/todos",
      data: {
        taskName: this.state.inputText,
      }
    });
    this.props.addItem(this.state.inputText);
    this.setState({inputText: ""})
    //here we are defining (with this.props.) and calling the addItem function which I created in the App.js parent component.
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios.get("http://localhost:5000/todolistfullstack/v1/todos/{id}").then((response) => {
      console.log(response.data.data)
      let data = [];
      console.log(response.data.data.length)
      for (let i = 0; i < response.data.data.length; i++){
        data.push(response.data.data[i].todo)
      }
      this.setState({todos: data})
    });
  }

  componentDidUpdate() {
    axios.get("http://localhost:5000/todolistfullstack/v1/todos/").then((response) => {
      console.log(response.data.data)
      let data = [];
      console.log(response.data.data.length)
      for (let i = 0; i < response.data.data.length; i++) {
        data.push(response.data.data[i].todo)
      }
      this.setState({todos: data})
    });
  }

  render() {
    const { inputText } = this.state;

    return (
      <div className="formWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              name="inputText"
              value={inputText}
              placeholder="Next task"
              onChange={this.handleChange}
              autocomplete="off"
            />
            <button className="addButton" type="submit"> Add </button>
          </form>
      </div>
    );
  }
}

export default ToDoList;