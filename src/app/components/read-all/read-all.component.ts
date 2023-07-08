import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  findAll(): void {}
}
