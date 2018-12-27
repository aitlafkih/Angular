import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "angular"},
    {"id": 2, "name": "devops"},
    {"id": 3, "name": "admin"},
    {"id": 4, "name": "l7alwa"}
  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id; 
    })
  }

  onSelectDetails(department){
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});

  }

  isSelectedId(department){
    return department.id === this.selectedId;
  }

}
