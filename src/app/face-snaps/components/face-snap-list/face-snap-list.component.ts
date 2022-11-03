import { Component, OnInit,OnDestroy } from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  // faceSnaps!: FaceSnap[];
  faceSnap$!: Observable<FaceSnap[]>
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    // this.faceSnaps =  this.faceSnapsService.getAllSnaps();
  this.faceSnap$ = this.faceSnapsService.getAllSnaps();
  }


}
