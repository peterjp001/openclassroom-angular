import { Component, OnInit } from '@angular/core';
import {filter, interval, Observable, of} from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
message$!: Observable<string>;

  ngOnInit() {

  }

}
