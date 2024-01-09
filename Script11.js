//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *


// for(let i = 0; i<5; i++){
//     let str = "";

//     for(let j = 1; j<=4-i; j++){
//         str = str + " ";
//     }

//     for(let k=0; k<=i;  k++){
//         str = str + " *";
//     }
//     console.log(str);

// }
// for(let i = 1; i<5; i++){
//     str = "";
//     for(let j = 1; j<=i; j++){
//         str = str + " ";
//     }

//     for(let k=1; k<=5-i;  k++){
//         str = str + " *";
//     }
//     console.log(str);
// }



//      0
//     101
//    21012
//   3210123
//  432101234


for(let i = 0; i<5; i++){
    let str = "";

    for(let j = 1; j<=4-i; j++){
        str = str + " ";
    }

    for(let k=i; k>=0;  k--){
        str = str + k;
    }

    for(let k=1; k<=i;  k++){
        str = str + k;
    }
    console.log(str);
}