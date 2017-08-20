# avl-sorted-list

Sorted List Implementation Using AVL Tree Data Structure

## Installation



## Usage

#### Initialization
    
    var avlSortedList = require('avl-sorted-list');
    var list = avlSortedList(function(a, b){
        return b - a;
    });

#### Insert Element

    list.insert(1);
    list.insert(5);
    list.insert(5);
    list.insert(9);
    
#### Convert to Array

    var arr = list.toArray();
    console.log(arr);
    //[1, 5, 5, 9]
    
#### Get List Size

    var size = list.size();
    console.log(size);
    //4
    
#### Get Minimum Element

    var min = list.min();
    console.log(min);
    //1
    
#### Get Maximum Element

    var max = list.max();
    console.log(max);
    //9

#### Get Element At Index

    var elem = list.at(1);
    console.log(elem);
    //5
    
#### Get Lower Bound Index Of Element

    var index = list.lowerBound(5);
    console.log(index);
    //1
    
#### Get Upper Bound Index Of Element

    index = list.upperBound(5);
    console.log(index);
    //3

#### Count Occurence Of Element

    var count = list.count(5);
    console.log(count);
    //2


#### Remove Element

    list.remove(5);
    
    size = list.size();
    console.log(size);
    //3
    
    count = list.count(5);
    console.log(count);
    //1
    
#### Remove Element At Index

    list.removeAt(1);
    
    size = list.size();
    console.log(size);
    //2
    
    count = list.count(5);
    console.log(count);
    //0

## Tests
    
    npm install ###to install devDependencies library mocha and chai
    npm test
