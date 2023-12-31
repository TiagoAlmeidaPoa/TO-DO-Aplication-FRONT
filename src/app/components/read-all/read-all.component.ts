import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {
  closed = 0;

  list: Todo[] = [];
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
        } else {
          this.list.push(todo);
        }
      });
      this.closed = this.listFinished.length;
    });
  }

  finalize(item: Todo): void {
    item.finished = true;
    this.service.update(item).subscribe(() => {
        this.service.message("Sucess task finalized !");
        this.list = this.list.filter((todo) => todo.id !== item.id);
        this.closed++;
    });
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((response) => {
      if (response === null) {
        this.service.message("Sucess task deleted !");
        this.list = this.list.filter((todo) => todo.id !== id);
      }
    });
  }

  finished(): void {
    this.router.navigate(["finished"]);
  }

  create(): void {
    this.router.navigate(['create'])
  }
}
