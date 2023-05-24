var i = 1;
while (i <= 10) {
 console.log(i);
 i++;
}


var i = 10;
while (i >= 1) {
 console.log(i);
 i--;
}

var arr=[10,20,30,40,50,60];
arr[0]=8;
var x=arr[0];
console.log(x);
for(var i=0;i<=arr.length;i++)
console.log(i);

var ann=[2,5,6,7,8,9,0,3];
ann[6]=50;
var y=ann[6];
console.log(y);
for(var i=0;i<=ann.length;i++)
console.log(i);

var array=[11,22,33,44,55,66];
array[3]=25;
var y=array[3];
console.log(y);
for(var i=array.length-1;i>=0;i--)
console.log(i);


var array=[21,36,45,67,27,,48,33,89];
array[4]=100;
var y=array[4];
console.log(y);
for(var i=array.length-1;i>=0;i--)
console.log(i);

var aar=[1,2,3,4,5,6,7,8,9,10];
for(var index=aar.length-1;index>=0;index--){
    if(aar[index]%2==0){
        console.log(aar[index]);
    }
}

var aar=[1,2,3,4,5,6,7,8,9,10];
for(var index=aar.length-1;index>=0;index--){
    if(aar[index]%2==1){
        console.log(aar[index]);
    }
}

var ary=[1,2,3,4,5,6,7,8,9,10];
for(var index=0;index<=ary.length-1;index++){
    if(ary[index]%2==0){
        console.log(ary[index]);
    }
}

var ary=[1,2,3,4,5,6,7,8,9,10];
for(var index=0;index<=ary.length-1;index++){
    if(ary[index]%2==1){
        console.log(ary[index]);
    }
}