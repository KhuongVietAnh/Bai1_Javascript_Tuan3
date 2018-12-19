$(document).ready(function () {
    canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var heightRows;
    var heightCol = 70;
    drawTitle();
    drawLevel();
    drawRow();
    drawColName();
    function drawLevel() {
        var heightCV = height;
        for (var i = 0; i < level.length; i++) {
            ctx.beginPath();
            ctx.font = fontOther;
            ctx.fillText(level[i], widthLevel, heightCV + 5);
            heightCV = heightCV - heightCol;
        }
        ctx.restore();
    }
    ;
    var heightLeft;
    function drawRow() {
        heightRows = height;
        for (var i = 0; i < level.length; i++) {
            ctx.beginPath();
            if (i === 0)
            {
                ctx.strokeStyle = 'black';
            } else {
                ctx.strokeStyle = 'gray';
            }
            ctx.moveTo(widthRow, heightRows);
            ctx.lineTo(widthRow + 600, heightRows);
            ctx.stroke();
            heightRows = heightRows - heightCol;
        }
        heightLeft = heightRows;
        ctx.restore();
    }
    ;
    function drawTitle() {
        ctx.beginPath();
        ctx.font = fontTitle;
        ctx.fillStyle = 'black';
        ctx.fillText(title, widthTitle, heightTitle);
        ctx.save();
        ctx.restore();
        ctx.beginPath();
        ctx.font = fontOther;
        ctx.fillStyle = 'gray';
        ctx.fillText(name, 400, height + 100);
        ctx.restore();
    }
    drawCol();
    function drawCol() {
        var width = widthRow;
        ctx.fillStyle = 'blue';
        ctx.save();
        for (var i = 0; i < col.length; i++)
        {
            if (i === 0) {
                ctx.fillRect(width, height - (heightCol * 2), widthCol, heightCol * 2);
            } else if (i === 1) {
                ctx.fillRect(width, height - 5, widthCol, 5);
            } else if (i === 2) {
                ctx.fillRect(width, height - (heightCol * 3), widthCol, heightCol * 3);
            } else if (i === 3) {
                ctx.fillRect(width, height - (heightCol * 4), widthCol, heightCol * 4);
            } else if (i === 4) {
                ctx.fillRect(width, height - (heightCol * 4), widthCol, heightCol * 4);
            }
            width = width + 120;
        }
        ctx.restore();
    }
    function drawColName() {
        var width = widthRow;
        for (var i = 0; i < col.length; i++)
        {
            ctx.beginPath();
            ctx.font = fontOther;
            ctx.fillText(col[i], width + 25, height + 40);
            width = width + 120;
        }
        ctx.restore();
    }
    ;
    drawLeftRight();
    function drawLeftRight() {
        ctx.fillRect(790, heightLeft + heightCol, widthCol, 30);
        //alert(heightLeft + heightCol);
        ctx.font = fontOther;
        ctx.fillStyle = 'black';
        ctx.fillText("LEVEL", 790, 290);
        ctx.fillText("OF", 790, 335);
        ctx.fillText("POSITION", 790, 375);
        ctx.beginPath();
        ctx.translate(0, 520);
        ctx.font = fontOther;
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = 'gray';
        ctx.fillText(tileOther, 10, 30);
        ctx.restore();
    }
});
