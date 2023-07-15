import { Component, OnInit } from "@angular/core";
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

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.findAll();    
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      response.forEach(todo => {
        if(todo.finished){
          this.listFinished.push(todo);
        }else{
          this.list.push(todo);
        }
      })
        this.closed = this.listFinished.length
    })
  }

  delete(id: any):void{
    this.service.delete(id).subscribe((response) => {      
      if(response === null){
        this.service.message('Sucess task deleted !');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }
}
