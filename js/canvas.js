function initiateCanvas() {
    var stage = new createjs.Stage("maincanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    
    stage.on("stagemousedown", function(evt) {
    circle.x = evt.stageX;
    circle.y = evt.stageY;
        console.log(evt.stageX);
    })
    stage.addChild(circle);
    stage.update();
}
