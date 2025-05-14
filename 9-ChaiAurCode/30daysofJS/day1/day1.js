var a = 10;
console.log(typeof (a)+" var a is : "+a);

a=20;
console.log(typeof(a)+" var a after re declaration is : "+a);

let b="smit1"
console.log (typeof (b)+" let b initially is : "+b);

b="smit2";
console.log (typeof(b)+" let b after re-declaration is : "+b);


const c= true;
console.log(typeof(c)+"const c intitally is :" + c);
// c=false;
console.log (typeof(c)+"const c after re-declaration : "+c);  // TypeError: Assignment to constant variable.

var arr1=[1,2,3,4];
console.log(typeof(arr1)+" var arr1 is : "+arr1);

var ob1={'name':'smit',
    'age':21,
    'rolenum':'12102040501068'
}
console.log(typeof(ob1)+" var ob1 is : "+ob1);

