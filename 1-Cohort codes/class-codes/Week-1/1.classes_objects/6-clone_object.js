const original={
    'name':'smit',
    'age':21,
    'address':{
        'city':'morbi',
        'zipcode':'363642',

    },
    'hobby':'guitar',
    'active':true,
};

const copy=deepclone(original);
console.log(copy);
console.log(original===copy);
console.log(original.address === copy.address); 
console.log(original.hobbies === copy.hobbies); 

let dup={};
function deepclone(ori){
    for(let x in obj){
        dup.keys=ori
        
    }
}