# 0.5.0 (2017.09.15)

### 更新

* **框架：** 升级到`angular 5`


# 0.4.6 (2017.08.18)

### 问题修改

* angular2-perfect-scrollbar 更换为 ngx-perfect-scrollbar


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
