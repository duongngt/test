import React, { Component } from 'react';

class Add extends Component {
    handleClick(e) {
        console.log(e.target);
    }
    render() {
      return (
          <div className="container">
                <div className="book-list">
                <h2 className="title">Show List</h2>
                <ul>
                    <li>
                        <p className="list"></p>
                        <button className="delete">Delete</button>
                    </li>
                </ul>
                </div>
                <div className="add-list">
                    <input className="add" type="text" placeholder="add list"></input>
                    <button onClick={this.handleClick}>add</button>
                </div>
            </div>
      );
    }
  }
  
  export default Add;