import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryItem from './components/GroceryItem.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  modifyState(groceryItem) {
    var tempArr = this.state.list;
    tempArr.push(groceryItem);       
    this.setState(tempArr)
    console.log(tempArr)
  }

  render () {
    return (
      <div>
        <AddGrocery list={this.state.list} modifyState={this.modifyState.bind(this)}/>
        
        <GroceryList list={this.state.list}  />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
    //return a list
    //call this.setstate with new list
    //access list 
    //push groeryitem to list 
    //set state as new list 

  // nextIndex(){
  //   var count = this.state.list.length 
  //   console.log(count , 'is count')
  //   // let updateCount = count;
  //   console.log(this.state.counter, 'counter')
  //   this.setState({counter: count++});
  //   console.log(this.state.counter, 'counter')
  //   // console.log(this.state)
  //   return count; 
  //   // this.setState({ <GroceryItem list={this.state.list} />
  //   //   counter: this.state.counter + 1
  //   // })
  //   tho
    
    
  // }


  // {id: 5, quantity: 15, description: "juice"},
  //push grocery item onto list 