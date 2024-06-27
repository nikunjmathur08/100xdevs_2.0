function maxAndMin(max, min){
    let ans = (Math.random() * (max - min) + min);
    console.log(ans);
    console.log(Math.round(ans));
}

maxAndMin(80, 68);