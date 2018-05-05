# 0.6.0

### Update

* **angular:** 升级到`6.0.0`
* **material2:** 升级到`6.0.0`
* **rxjs:** 升级到`6.0.0`
* **flex-layout:** 升级到`6.0.0-beta.15`

### BREAKING CHANGES

* **RxJS**: - ChangeLog：https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md
    - BehaviorSubject 从rxjs导出
    - 升级至6.0.0，升级指南：https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
    - Angular升级至RxJS v6 ahpla的commit：https://github.com/angular/angular/commit/b43f8bc7d3d101af3fcf02180c54007bb1e8c4ca
    - Angular升级至RxJS v6 beta的commit： https://github.com/angular/angular/commit/3cc5c2e4d09b7ba0ff31a9f804a8ae654af6c796

* **Material2**: - ChangeLog: https://github.com/angular/material2/blob/master/CHANGELOG.md
    - mat-sidenav: aligin -> position
    - form-field: mat-input-container -> mat-form-field

* **FlexLayout:**: - ChangeLog: https://github.com/angular/flex-layout/blob/master/CHANGELOG.md
    - <div fxLayout="row" fxLayoutWrap="wrap"> ... </div> -> <div fxLayout="row wrap"> ... </div>


# 0.5.6 (2018.04.12)

### Code Refactoring
* **高得地图: ** 更新默认jssdk版本，允许传入配置参数等

# 0.5.5 (2018.04.05)

### Code Refactoring
* **notification: ** 改变代码实现方式

# 0.5.4 (2018.01.27)

### Upate
* **package:** upgrade dependencies

# 0.5.3 (2017.12.*)

### 更新
* **angular：** 升级到`5.1.2`
* **@angular/flex-layout: ** upgrade `2.0.0-beta.12`

### 功能
* 新增支持pwa

# 0.5.2 (2017.12.20)

### 更新
* 新增固定宽度布局，支持自定义选项
* 新增页脚，支持自定义选项
* 更新页头，支持自定义选项
* 侧边栏菜单，支持自定义选项
* 新增material color 配色
* 启用animation动画

### 重构
* 侧边栏菜单重写

# 0.5.1 (2017.12.14)

### 更新
* **angular：** 更新到`5.1.1`
移除karma、jasmine依赖包

### 功能&优化
移除assets目录下无用的文件
* **analysis：** 移除ng2-charts


# 0.5.0 (2017.*.*)

### 更新

* **angular：** 更新到`5.0.0`
* **material:** 更新到`5.0.0`
* **flex-layout：**  更新到`2.0.0-beta.10`
* **ng-quill：**  更新到`2.0.4`
* **@swimlane/ngx-datatable:** 更新到`11.1.5`
* **@swimlane/ngx-charts:** 更新到`7.0.1`
* **ngx-perfect-scrollbar:** 更新到`^5.0.5`
* 移除指定的三中主题色，改进主题切换方式，支持material内置颜色主题切换

### 问题修复
* 修复todo类型定义
* 修复customizer遗留无用代码

# 0.4.12

### 功能&优化
* 新增惰性模块加载前显示loading效果
* 优化analysis模块
* 重写todoModule模块

### 问题修复
* 修复升级material.12 没有导入 *matRipple*


# 0.4.11

### 更新
* **angular：** 更新到`4.2.4`

### 功能优化
* **navigation: ** 增加 skeleton screen 
* **scss：** 添加几种渐变效果


# 0.4.10 (2017.10.13)

### 更新

* **material：**  更新到`2.0.0-beta.12`
* **cdk：** 更新到`2.0.0-beta.12`
* **flex-layout：**  更新到`2.0.0-beta.9`

### 功能实现

* **cli：** 优化css打包
* **firebase：** 项目开始支持firebase
* **登录&注册：** 接入firebase 目前支持 github 和 google 账号登录
* **file upload：** 增加文件上传模块, 对接firebase存储
* **electron：** 新增分支feature/electron, 进行桌面应用开发
* **apm：**  新增前端监控模块
* **chats：**  接入firebase 可以实时聊天
* **moduel：**  更新crm profile user widget project


### 功能优化

* 优化material模块导入
* 优化侧边栏菜单
* 优化navitation模块css效果
* 优化comment/search组件
* 优化mail模块搜索
* 优化主题切换


# 0.4.9 (2017.09.8)

### 功能实现
* **通知：** 新增通知组件
* **持续集成：** 新增circle，新增docker-compose
* **analysis：** 添加数据分析模块
* **table：** 固定表头代码重些,优化部分代码


# 0.4.8 (2017.09.1)

### 问题修复

* 修复chart在页面不显示


# 0.4.7 (2017.08.25)

### 功能实现

* **持续化集成** 自动发布项目在github.io上


# 0.4.6 (2017.08.18)

### 问题修改

* angular2-perfect-scrollbar 更换为 ngx-perfect-scrollbar

### 功能实现

* 增加老持浏览器不支持提示语
* 增加api协议配置
* 增加文本生成器
* 允许导入json文件

### 功能优化

* **table：** 实现动态表格



# 0.4.5 (2017.08.11)


### 问题修改

* **路由：** 将各个模块中的路由改为子路由
* **navigation：** 在视图中setClassActive参数类型传入错误
* **构建：** 修复AOT编译不通过


### 功能实现

* **模块：** 将`CommonModule、FormsModule、MaterialModule、FlexLayoutModule` 提取到shared模块中
* **环境：** 添加github.io编译环境
* **包：** 新增`ng2-charts`；更新material、cli版本；移除echarts、angular-in-memory-web-api
* **样式：** 添加sidenav、pagination、date-picker、navigation 主题
* **构建：** 默认抽出css文件
* **index.html：** 添加关键字、添加百度统计

### 性能优化

* **懒加载：** navigation、chats、mail、todo、tables、forms、materials、pages、chart 实现懒加载
* **mock数据：** 提供navigation，todo，mail 模块mock数据，放在asset/data目录
* **样式：** style.scss 样式优化

### 更新

* **项目：** 更换分支名称、项目重命名、模块调整优化
* **删除** 测试脚本全部删除(*.spec.ts)
* **table：** 


# 0.4.0 (2017.06.22)


### 问题修改

* material2版本问题导致包更新不对


### 功能实现

* 实现全屏操作


### 性能优化

* **icon：** 删除项目中icon文件，改为依赖包方式添加


### 更新

* **框架：** 升级到`angular 4`
* **包：** 添加material-design-icons


# 0.3.0 (2017.06.09)


### 功能实现

* 添加： MarkDown
* 添加： echarts


# 0.2.0 (2017.05.26)


### 功能实现

* 添加： Dockerfile
* 添加： .travis.yml


### 更新

* 注册&登录组件调整
* pages目录下的组件调整


# 0.1.0 (2017.04.27)

* 项目发布
