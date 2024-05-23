import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  dateToday = moment().format('ddd MMM DD, YYYY');

  search = 'Search';
  createLabel = 'Create';
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      console.log('pram', param)
      switch (param['language']) {
        case 'english':
          this.search = 'Search';
          this.createLabel ='Create';
          break;
        case 'filipino':
          this.search = 'Hanapin';
          this.createLabel = 'Gawin';
          break;
        case 'kinaray-a':
          this.search = 'Sagapun';
          this.createLabel = 'Himu-a';
          break;
      }
    });
  }

  create() {
    this.router.navigate(['/auth/success']);
  }
}
