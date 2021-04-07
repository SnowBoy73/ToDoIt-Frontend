import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { map, filter} from 'rxjs/operators';
// import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],

  /* templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
 /* template: `<H1>Passing Dynamic Data Demo</H1>

     {{ product | json }}`*/
})
export class AddEditComponent implements OnInit {
  editedTask: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    this.editedTask = history.state;
    if (history.state) {
      console.log('dd', this.editedTask.id);
      console.log('sss', this.editedTask.id);
    }
  }

  btnClickSubmitTask = (): any => {
    this.router.navigateByUrl('/home', {state: this.editedTask});
  }

  }
