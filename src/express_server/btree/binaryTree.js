/**
 * Created by anurag on 20/4/17.
 */
 let tree = [];
let commission = [];
let commIndex = 0;
let currentIndex =0;
let level =0;

 var isUndefined = function(passValue){
     const undefined=void(0);
     return passValue===undefined;
 }

 var insertIntoTree = function (elem){
    if(isUndefined(tree[currentIndex])){
        tree[currentIndex]=elem;
        currentIndex++;
    }
    if((currentIndex-1)%2==0){
        checkLevel(commIndex);
    }
    return {
        'tree': tree,
        'commission' : commission
    }

}
module.exports.insertIntoTree = insertIntoTree;
module.exports.tree = tree;


var checkLevel = function(idx){
    if(!isUndefined(tree[(2*idx)+1]) && !isUndefined(tree[(2*idx)+2])){
        commission[idx]=1500;
        idx++;
        commIndex=idx;

            updateCommission();
    }

}
var updateCommission = function(){
   if((tree.length+1) % 2==0){
       for(let i =1 ; i <=commission.length;i++){
           if(Math.pow(2,i)==tree.length+1){
               if(commission.length-i==0){
                   commission[0] += 1500;
                   level =1;
               }else{
                   //console.log(commission.length-i,'----update index',commission.length)
                   let ls = level;
                   for(let idx = 0 ; idx < 2*ls+1;idx++){
                      console.log(level,'----',idx)
                       commission[idx] += 1500;
                       if(idx==commission.length-i-level){
                           let s = commission.length-i-level
                           level += s;
                       }
                   }
               }

           }
       }

   }
}

var printTree = function () {
    console.log(tree, '---', commission)
}

 var getAmouunt = function (idx) {
    if(idx<=commission.length-1){
        console.log(commission[idx])
    }else{
        console.log('none')
    }

}
module.exports.getAmount = getAmouunt;

 var getSubtree = function (idx) {
   let tempArr = [];
   let retTree = [];
   tempArr.push(idx);
   if(tree[((2*idx)+1)]){
       tempArr.push(((2*idx)+1));
   }if(tree[((2*idx)+2)]){
        tempArr.push(((2*idx)+2));
    }if(tempArr.length!=0){
        let i = 1;
       while(tempArr[i]<=tree.length){
           if(tree[((2*tempArr[i])+1)]){
               tempArr.push(((2*tempArr[i])+1));
           }if(tree[((2*tempArr[i])+2)]) {
               tempArr.push(((2 * tempArr[i]) + 2));
           }
           i++;


       }
    }
    for(let i =0; i<tempArr.length;i++){
        retTree[i] = tree[tempArr[i]];
        console.log(tree[tempArr[i]])
    }
    return retTree;

}
module.exports.getSubTree = getSubtree;

/*
insertIntoTree(4);
insertIntoTree(5);
insertIntoTree(56);
insertIntoTree(4);
insertIntoTree(5);
insertIntoTree(56);
insertIntoTree(45);

/!*insertIntoTree(41);
insertIntoTree(55);
insertIntoTree(56);
insertIntoTree(48);
insertIntoTree(525);
insertIntoTree(567);
insertIntoTree(454);
insertIntoTree(785)

insertIntoTree(4);
insertIntoTree(5);
insertIntoTree(56);
insertIntoTree(4);
insertIntoTree(5);
insertIntoTree(56);
insertIntoTree(45);

insertIntoTree(41);
insertIntoTree(55);
insertIntoTree(56);
insertIntoTree(48);
insertIntoTree(525);
insertIntoTree(567);
insertIntoTree(454);
insertIntoTree(785)
insertIntoTree(45)*!/
getAmouunt(2)
getSubtree(1)
printTree();
*/
