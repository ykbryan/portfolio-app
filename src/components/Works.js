import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/worksStyle.css'
import { API, graphqlOperation } from 'aws-amplify';

const readNote = `query listNotes{
  listNotes{
    items{
      __typename
      id
      note
    }
  }
}`;

class Works extends Component {
  async componentDidMount() {
    const notes = await API.graphql(graphqlOperation(readNote));
    console.log(notes);
  }
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div>
          <Button color="danger">Works</Button>
        </div>
      </CSSTransitionGroup>
    );
  }
}
export default Works;