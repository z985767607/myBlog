### javascript深浅拷贝

前言：之前学习js语言的时候，总是遇到js深浅拷贝的文章，但是一直没有很重视这个问题。自从毕业参加工作以来，在项目中多次遇到js深浅拷贝的问题，在网上各种百度解决方案的同时，总在想为什么会出现这种情况。

### 基本类型&引用类型
ECMAScript中有5种简单数据类型(也称为基本数据类型)：Undefined,Null,Boolean,Number和String。还有一种复杂数据类型--Object，Object本质上是由一组无序的名值对组成的。

# 不同类型的存储方式
> 基本数据类型：基本数据类型在内存中占据固定大小，保存在栈内存中
> 复杂数据类型：引用类型的值是对象，保存在堆内存中。而栈内存存储的是对象的变量标识符以及对象在推内存中的存储地址。

# 不同类型的复制方式：
> 基本类型：从一个变量向另外一个新变量复制基本类型的值，会创建这 个值的一个副本，并将该副本复制给新变量。
-- 修改其中一个的值，并不会影响另外一个值

> 复杂数据类型：复制的是指针，所以复制后会指向同一个变量。
-- 修改其中一个的值，会影响另外一个值

所以，深浅拷贝只存在复杂数据类型中

# 深拷贝 & 浅拷贝
--- 深拷贝：在堆中重新分配了内存地址，不同的地址，相同的值，相互之间不会影响。


--- 浅拷贝：复制的引用，相同的地址，指向相同值，之间会相互影响。

# 一些实现方法

1.slice()
exp:
let arr1 =[1,3,6,8,4,3];
let arr2 = arr1.slice();
console.log(arr2); // [1, 3, 6, 8, 4, 3]
arr1[0] = 2;
console.log(arr1);  // [2, 3, 6, 8, 4, 3]
console.log(arr2);  // [1, 3, 6, 8, 4, 3]
  --看着像是深拷贝，那接下来再加一层
exp:
let arr1 =[[0,1],3,6,8,4,3];
let arr2 = arr1.slice();
arr1[0][0] = 2;
console.log(arr1);  // [[2,1], 3, 6, 8, 4, 3]
console.log(arr2);  // [[2,1], 3, 6, 8, 4, 3]
--居然跟着变了。。。只所谓的深拷贝了一层。
so .. slice()不是深拷贝！！！

2.concat()
exp:
let arr1 =[1,3,6,8,4,3];
let arr2 = arr1.concat();
console.log(arr1 === arr2);  //false
arr1[0] = 2;
console.log(arr1); //[2, 3, 6, 8, 4, 3]
console.log(arr2);  //[1, 3, 6, 8, 4, 3]
--感觉的确是重新开了内存
exp:
let arr1 =[[0,1],3,6,8,4,3];
let arr2 = arr1.concat();
console.log(arr1 === arr2);  //false
arr1[0][0] = 2;
console.log(arr1);  // [[2,1], 3, 6, 8, 4, 3]
console.log(arr2);  // [[2,1], 3, 6, 8, 4, 3]
--和slice的表现相同，说明concat也是浅拷贝。

3.JSON.stringify()+JSON.parse()
JSON.stringify()是将一个js对象序列化为一个字符串，JSON.parse()将一个字符串序列化为一个js对象。   --trick
而且这种处理方法并不全面，对于数组和函数的处理会有问题。

so...还是写个深拷贝的函数吧。。。

4.deepClone  --判断类型，递归，这个应该是比较

function deepClone(obj){
    if(!obj && typeof obj !== 'object'){
        throw new Error('error arguments');
    }

    const obj1 = Array.isArray(obj) ? [] : {};
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] === 'object'){
                obj1[key] = deepClone(obj[key]);
            }else {
                obj1[key] = obj[key];
            }
        }
    }
    return obj1;
}










