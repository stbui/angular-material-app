import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'stbui-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {
  private _type;
  @Input()
  set type(value) {
    this._type = value.split('|');
  }
  get type() {
    if (!this._type) {
      this._type = 'link|watch|star|issue|fork|download';
      this._type = this._type.split('|');
    }
    return this._type;
  }

  @Input() user: string = 'stbui';
  @Input() repo: string = 'angular-material-app';

  readonly baseApi: string = 'https://api.github.com/repos';
  readonly baseUrl: string = 'https://github.com';
  repository: object = {
    subscribers_count: 0,
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = `${this.baseApi}/${this.user}/${this.repo}`;
    this.http.get(url).subscribe(res => {
      console.log(res);
      this.repository = res;
    });
  }

  getGithubUrl() {
    const url = `${this.baseUrl}/${this.user}/${this.repo}`;

    return {
      base: url,
      watch: `${url}/watchers`,
      star: `${url}/stargazers`,
      fork: `${url}/network`,
      issue: `${url}/issues`,
      download: `${url}/archive/master.zip`
    };
  }
}
