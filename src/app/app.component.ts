import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
	username = "Guest";
	toDoList = [{task:"Meet Gunapathi", completed: false}];
  newTask = "";

  addTask = function () {
  	if (this.newTask != "") { 
  		this.toDoList.push({task:this.newTask, completed:false});
  		this.newTask = "";
  	}
  }

  removeTask = function (index) {
  	this.toDoList.splice(index,1);
  }

  completeTask = function (index) {
  	this.toDoList[index].completed = !this.toDoList[index].completed;
  }

  completeAllTask = function () {
  	for(let item of this.toDoList) {
		  item.completed = true;
		}
  }

  removeAllTask = function () {
  	this.toDoList = []
  }
}
