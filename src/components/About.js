import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
class About extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="aboutTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="about">
          About
        </div>
      </CSSTransitionGroup>
    );
  }
}
export default About;