import React from "react";
import logo from "./logo.svg";
import "./App.css";
import getDatabase from "./firebase";
const db = getDatabase();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      mob: "",
      users: []
    };
  }
  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        let blankusers = [];
        querySnapshot.forEach(doc => {
          blankusers.push(doc.data());
        });
        this.setState({ users: blankusers });
      });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { name, age, mob } = this.state;
    console.log(this.state);
    console.log(db);
    db.collection("users")
      .add({ name, age, mob })
      .then(docRef => {
        const availableUsers = this.state.users;
        availableUsers.unshift({ name, age, mob });
        this.setState({ users: availableUsers });
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
            placeholder='name'
          />
          <input
            type='number'
            value={this.state.age}
            name='age'
            onChange={this.handleChange}
            placeholder='age'
          />
          <input
            type='text'
            value={this.state.mob}
            name='mob'
            onChange={this.handleChange}
            placeholder='mob'
          />
          <input type='submit' value={"submit"} name='mob' />
        </form>
        <hr />
        {this.state.users.map((user, i) => {
          return <div key={i}>{user.name}</div>;
        })}
      </React.Fragment>
    );
  }
}

export default App;
