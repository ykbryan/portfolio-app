import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Content from './components/Content'
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }
  async componentDidMount() {
    // const notes = await API.graphql(graphqlOperation(readNote));
    // console.log(notes);
    // this.setState({
    //   notes: notes.data.listNotes.items
    // })
  }
  // async notes() {
  //   const notes = await API.graphql(graphqlOperation(readNote));
  //   console.log(notes);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">bryanchua.com</h1>
          <Menu />
        </header>
        <Content />
        <p className="App-intro">
          Hello World. Under Construction.
        </p>
      </div>
    );
  }
}

// export default App;
export default withAuthenticator(App, { includeGreetings: true });

