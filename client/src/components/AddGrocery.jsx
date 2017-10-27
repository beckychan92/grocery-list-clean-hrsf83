import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  handleClick() {
    console.log(this.state.list)
  };

  render () {
    return (
      <form>
        <label>
          Grocery Item
          <input type="text" name="groceryItem"/>
          <button type="button" onClick={this.handleClick(this.groceryItem)}>Add Item!</button>
          <br></br>
          Quantity
          <input type="text" name="numOfItem"/>
          <button type="button">Confirm Quantity!</button>
        </label>
      </form>

    )
  }
}

export default AddGrocery;