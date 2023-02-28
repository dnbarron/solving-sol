    /**
      A short example to use p5.scribble to draw a bar graph.

      We have an array filled with 12 values between -100 and 100.
      Now every value is visualized as a filled rect while the height
      is the value as a percent value multiplied by the half display height,
      to show negative and positive values as well.

      We use scribbleLine, scribbleRect and scribbleFilling and some parameters
      of the scribble class to define bowing and roughness.

      Play around with the bowing, the roughness, the strokeWeights and
      the angle and gap of the fillig to see how these prameters change the output.
    */

      function setup() {
        var canvas = createCanvas( windowWidth*0.98, windowHeight*0.97 );
        background( 255 );
        stroke( 100 );
        strokeWeight( 2 );
        
        var numLines = random(5, 30);

        var scribble       = new Scribble();
        scribble.bowing    = 0.0;
        scribble.roughness = 10;

        for (var i = 0; i < numLines; i++){
          var x = random(10, width-10);
          scribble.scribbleLine( x, 0, x, height );
        }
      }

      function draw() {}
  
