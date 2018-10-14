var TetrisSettingManager = function () {

    var CLASS_SHAPE = 'shape'
        , WIDTH = 10
        , HEIGHT = 18
        , VELOCITY = 500
        , SHAPE = "00,01,02,03|00,10,20,30$01,10,11,12|00,10,11,20|00,01,02,11|01,10,11,21$00,01,10,11$00,01,11,12|01,10,11,20$01,02,10,11|00,10,11,21$00,01,02,12|01,11,20,21|00,10,11,12|00,01,10,20$00,01,02,10|00,01,11,21|02,10,11,12|00,10,20,21"
        , SHAPE_Y = "0,0,0,0|3$1,1,1|2,1|0,1,0|1,2$1,1$0,1,1|2,1$1,1,0|1,2$0,0,1|2,2|1,1,1|2,0$1,0,0|0,2|1,1,1|2,2"
        , SHAPE_SEPERATOR = '$'
        , ROTATION_SEPERATOR = '|';

    var score = 0
        , position = []
        , shapeType = 0
        , rotation = 0
        , xMax = 0
        , yMax = 0
        , timeOut
        , tetrisBoard = document.getElementById(ID_TABLE);

    var getNumberOfShapeType = function () {
        return SHAPE.split(SHAPE_SEPERATOR).length;
    }

    var getShapeClassNames = function () {
        return new Array(getNumberOfShapeType()).fill().map(function (_, index) { return CLASS_SHAPE + (index + 1); });
    }

    this.drawCell = function (tableElement) {
        var row = new Array(HEIGHT);
        var cell = new Array(HEIGHT);
        for (var i = 0; i < HEIGHT; i++)
            cell[i] = new Array(WIDTH);
        for (var i = 0; i < HEIGHT; i++) {
            row[i] = tableElement.insertRow(-1);
            for (var j = 0; j < WIDTH; j++) {
                cell[i][j] = row[i].insertCell(j);
                // 각 cell에 id 속성을 부여
                cell[i][j].setAttribute('id', 'td' + i + '_' + j);
            }
        }
    }

}

var tetrisSettingManager = new TetrisSettingManager();
var tetrisBoard = document.getElementById('tetris-board');
tetrisSettingManager.drawCell(tetrisBoard);
