while (true) {
    let enemy1 = prompt("enemy1: ");
    let dist1 = parseInt(prompt("dist1: "));
    let priority1 = parseInt(prompt("priority1: "));
    let speed1 = parseInt(prompt("speed1: "));
    let enemy2 = prompt("enemy2: ");
    let dist2 = parseInt(prompt("dist2: "));
    let priority2 = parseInt(prompt("priority2: "));
    let speed2 = parseInt(prompt("speed2: "));
    
    if (priority1 > priority2) {
        console.log(enemy1);
    } else if (priority2 > priority1) {
        console.log(enemy2);
    } else {
        if (dist1 < dist2) {
            console.log(enemy1);
        } else if (dist2 < dist1) {
            console.log(enemy2);
        } else {
            if (speed1 > speed2) {
                console.log(enemy1);
            } else {
                console.log(enemy2);
            }
        }
    }
}