import React from 'react';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends React.Component {
  constructor(props){
    super(props);
    debugger;
  }
  render() {

    return(
      <div className="groceries">
        <table>
          props.list.map(function(i){
     
            <GroceryItem id={i.id} description={i.description} quantity={i.quantity} />
          })
        </table>
      </div>
    );
  }
}

export default GroceryList;