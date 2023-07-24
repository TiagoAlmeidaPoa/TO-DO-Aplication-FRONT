import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo: Todo = {
    title: '',
    description: '',
    endDate: new Date(),
    finished: false
  }

  constructor(private router: Router, private service: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();    
  }

  findById(): void {
    this.service.findById(this.todo.id).subscribe((response) => {
      this.todo = response;
    })
  }

  update(): void {
    this.service.update(this.todo).subscribe((response)=>{
      this.service.message('Sucess TO-DO Update !!!');
      this.router.navigate(['']);  
      }, err => {
        this.service.message('Failure TO-DO update !!!');
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

