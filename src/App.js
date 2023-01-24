import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users').then((resp) => {
      resp.json().then((result) => {
        // console.warn(result.data)
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Call API</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div>
                <p>
                  {i}
                  --
                  {item.first_name}
                  {item.last_name}
                  --
                  {item.email}
                  --
                  {item.avatar}
                </p>
              </div>
            ))
          : null}
      </div>
    );
  }
}
export default App;
