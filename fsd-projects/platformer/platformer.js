$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 300, 100, 20, "green");
    createPlatform(15, 500, 150, 20, "red");
    createPlatform(600,700,25,20,"purple");
    createPlatform(250,550,50,20,"blue");
    createPlatform(400,375,50,20,"red");
    createPlatform(350,500,50,20,"yellow");
    createPlatform(750,650,50,20,"blue");
    createPlatform(1050,715,50,20,"green");
    createPlatform(700,175,50,20,"purple");
    createPlatform(950,450,50,20,"yellow");
    createPlatform(1250,600,50,20,"green");
    createPlatform(1350,475,50,20,"blue");
    createPlatform(350,675,100,20,"red"); //show when purple hit coin




    // TODO 3 - Create Collectables
    createCollectable("steve", 590, 650, 0.5, 0.7);
    createCollectable("steve", 1053, 675, 0.5, 0.7);
    createCollectable("steve", 703,130,0.5,0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 3500,50,1300);
    createCannon("left",570,1000);
    createCannon("right",350,2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
