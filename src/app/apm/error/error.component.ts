import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errors = [
    {
      "_id": "59b60467b071180fb66c6272",
      "releaseStage": "production",
      "firstSeen": "2017-09-11T03:35:03.155Z",
      "status": "open",
      "name": null,
      "type": "resourceError",
      "src": "https://stbui.com/img/wechat.JPG",
      "statusCode": 0,
      "statusText": null,
      "httpMethod": null,
      "httpUrl": null,
      "message": null,
      "url": "https://stbui.com/2016/07/10/mesos-marathon-platform/",
      "severity": null,
      "lastSeen": "2017-09-29T07:29:37.206Z",
      "numberOfOccurence": 3,
      "releaseStages": [
        "production"
      ],
      "numberOfUser": 3,
      "elapsedTime": "77391.385"
    },
    {
      "_id": "59b60467b071180fb66c6272",
      "releaseStage": "production",
      "firstSeen": "2017-09-11T03:35:03.155Z",
      "status": "open",
      "name": null,
      "type": "resourceError",
      "src": "https://stbui.com/img/wechat.JPG",
      "statusCode": 0,
      "statusText": null,
      "httpMethod": null,
      "httpUrl": null,
      "message": null,
      "url": "https://stbui.com/2016/07/10/mesos-marathon-platform/",
      "severity": null,
      "lastSeen": "2017-09-29T07:29:37.206Z",
      "numberOfOccurence": 3,
      "releaseStages": [
        "production"
      ],
      "numberOfUser": 3,
      "elapsedTime": "77391.385"
    }
  ];

  checkboxSelection = [];
  checked: boolean = false;
  openDetial: boolean = false;
  // Exception

  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.openDetial === true) {
      this.openDetial = false;
    }
  }

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  onCheckBoxAllTrigger($event) {
    if ($event.checked) {
      this.checkboxSelection = this.errors;
    } else {
      this.checkboxSelection = [];
    }

    // console.log(this.checkboxSelection);
  }

  onDetailTriggered(item) {
    this.openDetial = true;
    // console.log(item)
  }

  onOpenedTriggered(opened) {
    console.log(opened);
    this.openDetial = opened;
  }

}
