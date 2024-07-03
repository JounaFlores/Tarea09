while (true) {
    let enemy1 = prompt("enemy1: ");
    let dist1 = parseInt(prompt("dist1: "));
    let enemy2 = prompt("enemy2: ");
    let dist2 = parseInt(prompt("dist2: "));
    
    if (dist1 < dist2) {
        console.log(enemy1);
    } else {
        console.log(enemy2);
    }
}