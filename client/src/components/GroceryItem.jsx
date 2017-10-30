import React from 'react';

const GroceryItem = (props) => (
  <div>
    <tr>
      <th>
        {this.props.id}
      </th>
      <th>
        {this.props.description}
      </th>  
      <th>
        {this.props.quantity}
      </th>
    </tr>
  </div>
  
)

export default GroceryItem;