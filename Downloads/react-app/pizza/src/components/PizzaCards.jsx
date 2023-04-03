import React, { Component } from 'react'

export default class PizzaCards extends Component {
  render() {
    return (
        <div className="col-md-3">
        <div className="thumbnail pizza-type">
              <img src="images/pizza-slice.jpg" alt="pizza slice" className="img-responsive"/>
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
        </div>
    </div>
    )
  }
}
