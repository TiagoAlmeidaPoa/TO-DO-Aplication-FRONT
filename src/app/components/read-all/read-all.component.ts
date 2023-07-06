import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = [
    {
      title: "Test",
      endDate: new Date(),
      description: "Testando card 1",
      finished: false
    },
    {
      title: "Test 2",
      endDate: new Date(),
      description: "Testando card 2",
      finished: false
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
