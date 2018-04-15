db.json——静态数据文件
1.npm install -g json-server //全局安装json-server

2.根目录新建server文件夹，下面新建db.json文件

3.server文件夹：json-server db.json -w -p 3000命令

安装mock.js动态生成数据
1.根目录新建server文件夹，下面新建moke.js文件

2.server文件夹：npm install mockjs --save -dev命令

3.server文件夹：json-server mock.js -w -p 3000

//get请求
//获取id为1的用户信息
http://localhost:3000/users/1

//获取所有公司id为3的用户
http://localhost:3000/companies/3/users/

//根据公司名字获取信息
http://localhost:3000/companies/?name=Microsoft
http://localhost:3000/companies/?name=Microsoft&name=Apple

//获取一页中只有2条数据
http://localhost:3000/companies/?_page=1&_limit=2

//升序排序，降序排序
http://localhost:3000/companies/?_sort=name&_order=asc
http://localhost:3000/companies/?_sort=name&_order=desc

//获取用户年龄>=30的
http://localhost:3000/users/?age_gte=30

//获取用户年龄>=30并且<=32
http://localhost:3000/users/?age_gte=30&age_lte=32

//搜索用户信息
http://localhost:3000/users/?q=J

