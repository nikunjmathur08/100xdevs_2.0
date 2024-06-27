let counter = 0;

function updateCounter(){
    counter++;
    setTimeout(updateCounter, 1000);
    console.log(counter);
}

updateCounter();