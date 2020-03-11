import React, { Component } from 'react'

 export default class FoodForm extends Component {
   state = {
     foodName: "",
     foodImg: "",
     foodCalories: 0
   };

   handleChange = event => {
     // check out what the event is giving us
     // console.log(typeof event.target)
     // console.log(event.target)
     // console.log(event.target.name)
     // console.log(event.target.value)

      let { name, value } = event.target; 
    //  let name = event.target.name
    //  let value = event.target.value

      this.setState({
       [name]: value
     });
   }

   handleSubmit = event => {
     event.preventDefault();
      let { newFoodName, newFoodImg, newFoodCalories } = this.state;  
    //  let newFoodName = this.state.foodName
    //  let newFoodImg = this.state.foodImg
    //  let newFoodCalories = this.state.foodCalories

     // I'm calling the function addNewFoodToArray from App.js
     this.props.addNewFoodToArray({
       name: newFoodName,
       image: newFoodImg,
       calories: newFoodCalories
     });

     this.setState({
       foodName: "",
       foodImg: "",
       foodCalories: 0
     });
   };

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <input
           className="input"
           onChange={this.handleChange}
           type="text"
           name="foodName"
           value={this.state.foodName}
           placeholder="Food "
         />
         <input
           className="input"
           onChange={this.handleChange}
           type="number"
           name="foodCalories"
           value={this.state.foodCalories}
           
         />
         <input
           className="input"
           onChange={this.handleChange}
           type="text"
           name="foodImg"
           value={this.state.foodImg}
           placeholder="https://someURL.jpg"
         />
         <button className="button" type="submit">
           Add
         </button>
       </form>
     )
   }
 }