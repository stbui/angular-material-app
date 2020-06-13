import { Component, OnInit, OnDestroy, Input } from "@angular/core";

@Component({
  selector: "stbui-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() navigationModel: any[];

  ngOnInit() {}

  ngOnDestroy() {}

  updateExtendBadge() {}

  addSubitemToNavigation() {}
}
