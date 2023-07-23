import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent implements OnInit {

  todo: Todo = {
    title: '',
    description: '',
    endDate: new Date(),
    finished: false
  }

  constructor(private router: Router, private service: TodoService) {}

  ngOnInit(): void {}

  create(): void {
    this.formatDate();
    this.service.create(this.todo).subscribe((response) => {
    this.service.message('Sucess TO-DO crated !!!');
    this.router.navigate(['']);  
    }, err => {
      this.service.message('Failure TO-DO crated !!!');
      this.router.navigate(['']); 
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  formatDate(): void {
    let date = new Date(this.todo.endDate);
    this.todo.endDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}
