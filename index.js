function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function randomFractalSlow(N) {   //afiseaza fiecare pas al executiei cu o pauza de 100ms
    let i = 0;

    const A = {
        x: windowWidth/2 - 250,
        y: windowHeight/2 + 200
    };
    
    const B = {
        x: windowWidth/2,
        y: windowHeight/2 - 200
    };
    
    const C = {
        x: windowWidth/2 + 200,
        y: windowHeight/2 + 200
    };
    
    const P0 = {
        x: windowWidth/2 + 150,
        y: windowHeight/2
    };
    
    const points = [A, B, C]; //punctele initale A, B, C
    const newPoints = [P0];  //vector ce stocheaza punctele noi create

    point(A.x, A.y);
    text("A", A.x-15, A.y);
    point(B.x, B.y);
    text("B", B.x, B.y-10);
    point(C.x, C.y);
    text("C", C.x+10, C.y+10);
    point(P0.x, P0.y);
    text("P0", P0.x+15, P0.y);
    text("N=" + N, windowWidth/2, 60);

    setInterval(function() {
        if (i < N) {
            const rndNb = Math.floor(Math.random() * 3);
            const rnd = points[rndNb];
            
            strokeWeight(1);
            line(rnd.x, rnd.y, newPoints[i].x, newPoints[i].y);
            
            const newPoint = {
                x: rnd.x - (rnd.x - newPoints[i].x)/3,
                y: rnd.y - (rnd.y - newPoints[i].y)/3
            };
        
            strokeWeight(5);
            point(newPoint.x, newPoint.y);
            newPoints.push(newPoint);
        }

        i++;
    }, 100);
}

function randomFractal(N) {
    const A = {
        x: windowWidth/2 - 250,
        y: windowHeight/2 + 200
    };
    
    const B = {
        x: windowWidth/2,
        y: windowHeight/2 - 200
    };
    
    const C = {
        x: windowWidth/2 + 200,
        y: windowHeight/2 + 200
    };
    
    const P0 = {
        x: windowWidth/2 + 150,
        y: windowHeight/2
    };
    
    const points = [A, B, C];
    const newPoints = [P0];

    point(A.x, A.y);
    text("A", A.x-15, A.y);
    point(B.x, B.y);
    text("B", B.x, B.y-10);
    point(C.x, C.y);
    text("C", C.x+10, C.y+10);
    point(P0.x, P0.y);
    text("P0", P0.x+15, P0.y);
    text("N=" + N, windowWidth/2, 60);

    for (let i = 0; i < N; i++) {
        const rndNb = Math.floor(Math.random() * 3);
        const rnd = points[rndNb];
        
        strokeWeight(1);
        line(rnd.x, rnd.y, newPoints[i].x, newPoints[i].y);
        
        const newPoint = {
            x: rnd.x - (rnd.x - newPoints[i].x)/3,
            y: rnd.y - (rnd.y - newPoints[i].y)/3
        };
    
        strokeWeight(5);
        point(newPoint.x, newPoint.y);
        newPoints.push(newPoint);
    }
}



function draw() {
    textSize(32);
    textAlign(CENTER);
    strokeWeight(10);
    text("Random Fractal", windowWidth/2, 32);
    
    textSize(15);
    strokeWeight(5);
    
    randomFractal(1000); //1000 de pasi
    //randomFractalSlow(1000); //1000 de pasi
}