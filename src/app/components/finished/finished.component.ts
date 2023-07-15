import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-finished",
  templateUrl: "./finished.component.html",
  styleUrls: ["./finished.component.css"],
})
export class FinishedComponent implements OnInit {
  listFinished: Todo[] = [];

  constructor(private service: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      response.forEach((todo) => {
        if (todo.finished) {
          this.listFinished.push(todo);
        }
      });
    });
  }

  toBack(): void {
    this.router.navigate([''])
  }
}
