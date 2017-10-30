import React from 'react';


class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    // var id = this.props.list.length + 1;
    this.state = {
      id: this.props.list.length,
      quantity: '',
      description: '',
    }
  }


  addDescription(event){
    this.setState({
      description: event.target.value,
      
    })
  }
  addQuantity(event){
    this.setState({
      quantity: parseInt(event.target.value),
    })
  }


  handleClick() {
    this.setState({
      id: this.props.list.length + 1
    })
    this.props.modifyState(this.state);
    console.log(this.state)
  }

  render () {
    return (
      <form>
        <label>
          Grocery Item
          <input type="text" name="groceryItem" value={this.state.description} onChange={this.addDescription.bind(this)}/>
          <br></br>
          Quantity
          {<input type="text" name="numOfItem" value={this.state.quantity} onChange={this.addQuantity.bind(this)}/>}
          <br></br>
          <button type="button" onClick={this.handleClick.bind(this)}>Add Item!</button>
        </label>
      </form>
    )
  }
}

export default AddGrocery;



  // onChangeText(){
  //   console.log("change text")
  //   // console.log(this.state.text);
  //   // this.setState({value: event.target.value})
  // }

  // handleClick() {
  //   this.onChange()
  //   // console.log(event.target.name)
  //   //event.target.
        

  //   // console.log("hello", event)
  //   //from the event, name, quantity and description
  //   //take info and create obj 
  //   //call modify state fucntion (with new obj thats created)

  //   //data with mouse 
  //   //data associate with mouse
  // };


    // console.log(this.state.target)
    // console.log(this)
    // console.log(this.state.text);
    // this.setState({value: event.target.value})

        // var groceryItem = {
    //   id: 10,
    //   quantity: this.state.counter,
    //   description: this.state.grocery
    // };

        // setTimeout(() => {
    //   this.setState({
    //     description: this.target.name,
    //     quantity: this.target.value
    //   });
    // }, 1000)