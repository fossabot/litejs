# 全局函数

## $lite.typeof(value)
判断某个值是什么类型

### 参数

|参数|必需|类型|备注|
|:-|:-|:-|:-|
|value|是|any|传入任何类型的数据|

*注：any 代表任意类型。*

### 返回
string：返回类型的名字

| 类型 | 描述 |
| :- | :- |
| string | 字符串 |
| number | 数字 |
| array | 数组 |
| boolean | 布尔 |
| object | 对象 |
| date | 日期 |
| function | 方法 |


### 用法

```
let obj = [];
let type = $lite.typeof(obj);
```


## $.isArray(value)
判断某个值是否是数组类型

### 参数

| 参数 | 必需 | 类型 | 备注 |
| - | - | - | - |
| value | 是 | any | 传入任何类型的数据 |

### 返回
boolean：如果是 true 就是是数组

### 用法

```
let list = [];
let isArray = $.isArray(list);
```





    