/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todoList=[]; // intialize empty list
  }

  // adds todo to the list
  add(todo){
    this.todoList.push(todo);
  }

  // removes todo at specified index
  remove (indexOfTodo){
    if (indexOfTodo>=0 && indexOfTodo <=this.todoList.length()){
      this.todoList.splice(indexOfTodo,1);
    }
 
  }

  update (indexOfTodo,updatedTodo){

    if (indexOfTodo>=0 && indexOfTodo <=this.todoList.length())
    this.todoList[indexOfTodo]=updatedTodo;
  }

  getAll(){
    return this.todoList;

  }

  get (indexOfTodo){

    return this.todoList[indexOfTodo];
  }

  clear(){

    this.todoList=[]  ;

  }

}

module.exports = Todo;
