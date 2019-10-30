function duplicate(v){
    let ht={};
    for(let i=0;i<v.length;i++){
        ht[v[i]]=0;
    }
    for(let i=0;i<v.length;i++){
        ht[v[i]]++;
    }
    let dup=[];
    let j=0;
    for(let i=0;i<v.length;i++){
        if(ht[v[i]]===1){
            continue;
        }
        else{
            dup[j]=v[i];
            j++;
        }
    }
    return dup;
}

console.log(duplicate([1,2,3,2,1,3,4,5,4]));
console.log(duplicate([1,2,3,2,1,3,4,5,4,5]));
console.log(duplicate([1,2,3,4,5,6,7,8]));
console.log(duplicate([1,2,3,4,5,6,7,8,99,99]));