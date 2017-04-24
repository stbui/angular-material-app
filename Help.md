
```
npm i -g @angular/cli@latest
npm i -g typescript
npm install -g tslint
```


#### api
```
npm install -g json-server
json-server ./src/app/todo/todo.data.json
json-server ./src/assets/data/data.json
```

#### 安装过的模块
```
npm install --save ng2-bootstrap
npm install --save angular-in-memory-web-api
npm install --save bootstrap-sass
npm i -S angular2-datatable
npm install ngx-quill --save
npm install --save normalize.css

npm install ng2-charts --save
npm install chart.js --save

npm install --save echarts
npm install --save-dev @types/echarts

npm install --save-dev @types/echarts
npm install --save ng2-ckeditor
npm install ng2-ueditor --save
-- npm i -S ng2-echarts -- 
-- npm install --save angular2-highcharts --
npm install chart.js --save
```

####
```
npm install --save material-design-lite
npm install --save ng2-bootstrap bootstrap@next
npm install --save ng2-validation
```

http://lbs.amap.com/api/javascript-api/summary/


#### jquery 导入方法
```
npm install -D @types/jquery
```
```
import * as $ from 'jquery';
$('body').addClass('stbui');
```


##### 开源

- https://github.com/greengerong/rebirth


##### 组件

bootstrap
- [ng2-bootstrap](http://valor-software.com/ng2-bootstrap/#/) : http://valor-software.com/ng2-bootstrap/#/

一套优秀的企业级Angular组件库
- [PrimeNg](https://www.primefaces.org/primeng/): https://www.primefaces.org/primeng/

- [ng-lightning](http://ng-lightning.github.io/ng-lightning/#/): http://ng-lightning.github.io/ng-lightning/#/

#####

https://github.com/surmon-china/angular-admin

http://bootswatch.com

http://wrapbootstrap.com/preview/WB0F66100

https://wrapbootstrap.com/search?q=Material+

https://genesisui.com/demo/?theme=leaf&version=angular2

##### Rxjs

rxjs官方文档中文翻译

https://www.gitbook.com/book/buctwbzs/rxjs/details

https://github.com/benjycui/introrx-chinese-edition

https://github.com/kittencup/angular2-ama-cn/issues/40

https://yuyang041060120.github.io/2016/05/16/observable-vs-promise/

#### other

https://github.com/hstarorg/ngx-modular-platform

angular2 issues

https://github.com/kittencup/angular2-ama-cn/issues

Angular 2 中文资料汇总(文章，视频，教程)

https://github.com/kittencup/angular2-learning-cn

ng-book 2 总目录

https://github.com/kittencup/angular2-ama-cn/issues/43


angular2
https://teradata.github.io/covalent/#/

http://www.maxuexiang.me/angular2.html

https://dribbble.com/shots/3250690-Covalent-Material-Design-Sketch-Template-beta

https://github.com/wpcfan/awesome-tutorials/tree/master/angular2/ng2-tut

http://asdfblog.com/


http://themes.nyasha.me/#primer
https://fury.martinsuess.com/apps/chat
https://themeforest.net/item/fury-angular-2-material-design-admin-template/19325966
https://themeforest.net/search?utf8=%E2%9C%93&term=material+angular&referrer=search&view=list&sort=sales


http://stackoverflow.com/questions/34489916/load-external-js-script-dynamically-in-angular-2
interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js'},
    { name: 'rangeSlider', src: '../../../assets/js/ion.rangeSlider.min.js' }
];
import {Injectable} from "@angular/core";
import {ScriptStore} from "./script.store";

declare var document: any;

@Injectable()
export class Script {

private scripts: any = {};

constructor() {
    ScriptStore.forEach((script: any) => {
        this.scripts[script.name] = {
            loaded: false,
            src: script.src
        };
    });
}

load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
}

loadScript(name: string) {
    return new Promise((resolve, reject) => {
        //resolve if already loaded
        if (this.scripts[name].loaded) {
            resolve({script: name, loaded: true, status: 'Already Loaded'});
        }
        else {
            //load script
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            if (script.readyState) {  //IE
                script.onreadystatechange = () => {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {  //Others
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                };
            }
            script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
}

}

this.script.load('filepicker', 'rangeSlider').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
