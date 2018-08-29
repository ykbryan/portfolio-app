import React from 'react'
import { Button } from 'reactstrap'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/worksStyle.css'

const Works = () => {
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
  )
}

export default Works
