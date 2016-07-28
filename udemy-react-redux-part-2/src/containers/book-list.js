import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          onClick={()=>this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //Will show as props inside BookList
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props on booklist container...
function mapDispatchToProps(dispatch){
  //When selectbook is called, results should be passed to reducers...
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
