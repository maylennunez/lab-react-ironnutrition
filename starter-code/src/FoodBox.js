import React, { Component } from 'react';

export default class FoodBox extends Component {





  state = {
    quantity: 0
  }

  handleQuantityChange = (event) => {
    // check out what the event is giving us
    // console.log(typeof event.target)
    // console.log(event.target)
    // console.log(event.target.name)
    // console.log(event.target.value)
    // console.log(typeof event.target.value)
    let quantityFromInput = event.target.value


    this.setState({
      quantity: quantityFromInput
    });
  }













  render() {
    // console.log(this.props)
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  // value="1"
                  onChange={this.handleQuantityChange}
                />
              </div>
              <div className="control">
                {/* <button className="button is-info"> */}
                <button className="button is-info" onClick={() => this.props.addFoodToTodaysList(this.props.name, this.props.calories, this.state.quantity)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}