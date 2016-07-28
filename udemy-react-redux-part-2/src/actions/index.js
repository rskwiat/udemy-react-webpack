export function selectBook(book){
  //selectbook is an ActionCreator needs to return an action...
  //type & payload...
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
