let arr1 =[[0,1],3,6,8,4,3];
let arr2 = arr1.concat();
console.log(arr1 === arr2);
arr1[0][0] = 2;
console.log(arr1);
console.log(arr2);

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