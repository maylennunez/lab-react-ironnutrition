import React, { Component } from 'react'

 export default class search extends Component {
   state = {
     input: ""
   }

   handleSearch = event => {
     // const { value } = event.target;
     // console.log(event.target.value)
     let value = event.target.value;
     this.props.filterFoods(value);
     this.setState({
       input: value
     });
   };
   render() {
     return (
       <div>
         <input type="text" onChange={this.handleSearch} placeholder="Search ..." value={this.state.input}/>
       </div>
     )
   }
 }