import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "stbui-search, stb-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  inputValue;

  @Input() placeholder: string = "查找...";
  @Input() delay: number = 200;
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, "keyup")
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.onSearchChange.emit(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }
}
