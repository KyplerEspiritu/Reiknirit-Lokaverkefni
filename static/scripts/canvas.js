var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

class Vigur { 
  constructor(x, y){
  	this.head = 0;
    this.x = x;
    this.y = y;
  }

  getX(){
  	return this.x;
  }

  getY(){
  	return this.y;
  }

  prenta(){
    var stringPoints;
    if(this.head == 0){
      stringPoints = "[" + this.x + " " + this.y + "]";
      return stringPoints;
    }else if(this.head == 1){
      if(this.y < 0){ 
        stringPoints = "[" + Math.abs(this.y) + " " + this.x + "]";
        return stringPoints;
      } else { 
        stringPoints = "[-" + this.y + " " + this.x + "]";
        return stringPoints;
      }
    }
  }
  
  lengd(){
    var lengd_c_veldi = Math.pow(this.x, 2) + Math.pow(this.y, 2);
    var lengd_c = Math.sqrt(lengd_c_veldi);
    return lengd_c.toFixed(2); 
  }
  
  halli(){
    if (this.x != 0) { return (this.y/this.x).toFixed(2); }
    else { return "Enginn"; }
  }

  thvervigur(){
    this.head = 1;
    return this;
  }
  
  stefnuhorn(){
  	if(this.x == 0) { 
  		var stefnuhorn = Math.atan(this.y/0.001) * 180/Math.PI;
  	} else {
  		var stefnuhorn = Math.atan(this.y/this.x) * 180/Math.PI;
  	}
    var stefnuhorn_rounded = Math.round(stefnuhorn * 10) / 10;
    if (this.y < 0 && this.x < 0){ return -Math.abs(360-(180+stefnuhorn_rounded)); } // (-,-)
    else if (this.y >= 0 && this.x < 0) { return 180-Math.abs(stefnuhorn_rounded); } // (-,+)
    else if (this.y > 0 && this.x >= 0) { return stefnuhorn_rounded; } // (+,+)
    else if (this.y < 0 && this.x >= 0){ return stefnuhorn_rounded; } // (+,-)
    else if (this.y == 0) { return 0; }

  }

  stefnuhornCanvas(){
    var stefnuhorn = Math.atan(this.y/this.x) * 180/Math.PI;
    var stefnuhorn_rounded = Math.round(stefnuhorn * 10) / 10;
    return stefnuhorn_rounded;
  }
  
  horn(v){
    var teljari = (this.x * v.x) + (this.y * v.y);
    var nefnari = this.lengd() * v.lengd();
    var horn_milli_vigra = Math.acos(teljari/nefnari) * 180/Math.PI;
    return horn_milli_vigra.toFixed(1);
  }

  summa(v){
    var summaX = parseInt(this.x) + parseInt(v.x);
    var summaY = parseInt(this.y) + parseInt(v.y);
    return "[" + summaX + " " + summaY + "]";
  }
}
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
function drawCoordinatesSystem(){
	ctx.fillStyle = "#bababa";
	ctx.strokeStyle = "#bababa";
	ctx.beginPath();
	ctx.moveTo(width/2, 10);
	ctx.lineTo(width/2, height-10);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(10, height/2);
	ctx.lineTo(width-10, height/2);
	ctx.stroke();


	for (var i = 10; i <= 690; i += 68){
		ctx.beginPath();
		ctx.moveTo(i, 335);
		ctx.lineTo(i, 365);
		ctx.stroke();
	}
	for (var i = 10; i <= 690; i += 68){
		ctx.beginPath();
		ctx.moveTo(335, i);
		ctx.lineTo(365, i);
		ctx.stroke();
	}

	ctx.strokeStyle = "rgb(186, 186, 186, 0.075)";
	for (var i = 10; i <= 690; i += 68){
		ctx.beginPath();
		ctx.moveTo(10, i);
		ctx.lineTo(width-10, i);
		ctx.stroke();
	}
	for (var i = 10; i <= 690; i += 68){
		ctx.beginPath();
		ctx.moveTo(i, 10);
		ctx.lineTo(i, height-10);
		ctx.stroke();
	}

	ctx.font = "10px Arial";
	ctx.fillText(1, 415, 377.5);
	ctx.fillText(2, 483, 377.5);
	ctx.fillText(3, 551, 377.5);
	ctx.fillText(4, 619, 377.5);
	ctx.fillText(5, 687, 377.5);

	ctx.fillText(1, 279, 322.5);
	ctx.fillText(2, 211, 322.5);
	ctx.fillText(3, 143, 322.5);
	ctx.fillText(4, 75, 322.5);
	ctx.fillText(5, 7, 322.5);

	ctx.fillText(1, 322.5, 421);
	ctx.fillText(2, 322.5, 489);
	ctx.fillText(3, 322.5, 557);
	ctx.fillText(4, 322.5, 625);
	ctx.fillText(5, 322.5, 693);

	ctx.fillText(1, 377.5, 285);
	ctx.fillText(2, 377.5, 217);
	ctx.fillText(3, 377.5, 149);
	ctx.fillText(4, 377.5, 84);
	ctx.fillText(5, 377.5, 16);
	
}
function resetCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.setLineDash([]);
	drawCoordinatesSystem();
}
function drawVigurs(){
	resetCanvas();

	var endPointVigur;
	var startPointHorn;

	var firstVigurX = document.getElementById('firstVigurX').value;
	var firstVigurY = document.getElementById('firstVigurY').value;
	var secondVigurX = document.getElementById('secondVigurX').value;
	var secondVigurY = document.getElementById('secondVigurY').value;

	var v1 = new Vigur(firstVigurX, firstVigurY);
	var vthvervigur = v1.thvervigur();

	document.getElementById("firstCoordinates").innerHTML = "[" + v1.getX() +  " " + v1.getY() + "]";
	document.getElementById("firstLengd").innerHTML = v1.lengd();
	document.getElementById("firstHalli").innerHTML = v1.halli();
	document.getElementById("firstThvervigur").innerHTML = vthvervigur.prenta();
	document.getElementById("firstStefnuhorn").innerHTML = v1.stefnuhorn();

	var stefnuhornFirstVigur = v1.stefnuhornCanvas();

	var firstNumberX = v1.getX()*68;
	var firstNumberY = v1.getY()*68; 

	ctx.strokeStyle = "rgb(84, 255, 0)";
	ctx.beginPath();
	ctx.moveTo(350, 350);
	ctx.lineTo(350+firstNumberX, 350-firstNumberY);
	ctx.stroke();

	ctx.beginPath();
	if (v1.getX() >= 0 && v1.getY() > 0){ // (+,+)
		ctx.arc(350, 350, 50, -(stefnuhornFirstVigur/180 * Math.PI), 0); 
		endPointVigur = getPoint(350, 350, 50, -(stefnuhornFirstVigur/180 * Math.PI)); 
		startPointHorn = getPoint(350, 350, 40, -(stefnuhornFirstVigur/180 * Math.PI)); 
	} 
	else if (v1.getX() < 0 && v1.getY() >= 0){ // (-,+)
		ctx.arc(350, 350, 50, ((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI), 0); 
		endPointVigur = getPoint(350, 350, 50, ((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI)); 
		startPointHorn = getPoint(350, 350, 40, ((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI)); 
	} 
	else if (v1.getX() < 0 && v1.getY() < 0){ // (-,-)
		ctx.arc(350, 350, 50, 0, -((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI)); 
		endPointVigur = getPoint(350, 350, 50, -((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI)); 
		startPointHorn = getPoint(350, 350, 40, -((Math.abs(stefnuhornFirstVigur)+180)/180 * Math.PI)); 
	} 
	else if (v1.getX() >= 0 && v1.getY() < 0) {	// (+,-)
		ctx.arc(350, 350, 50, 0, (Math.abs(stefnuhornFirstVigur)/180 * Math.PI));
		endPointVigur = getPoint(350, 350, 50, (Math.abs(stefnuhornFirstVigur)/180 * Math.PI));
		startPointHorn = getPoint(350, 350, 40, (Math.abs(stefnuhornFirstVigur)/180 * Math.PI));
	}
	ctx.fillStyle = "rgb(255, 0, 0, 0.8)";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(350, 350);
	ctx.lineTo(400+.5, 350);
	ctx.lineTo(endPointVigur[0]+.5, endPointVigur[1]);
	ctx.fill();
	


	var endPointHorn;
	var v2 = new Vigur(secondVigurX, secondVigurY);
	document.getElementById("secondCoordiantes").innerHTML = "[" + v2.getX() +  " " + v2.getY() + "]";
	document.getElementById("hornMilliVigra").innerHTML = v2.horn(v1);
	document.getElementById("summaMilliVigra").innerHTML = v1.summa(v2);

	var stefnuhornSecondVigur = v2.stefnuhornCanvas();

	var secondNumberX = v2.getX()*68;
	var secondNumberY = v2.getY()*68;

	ctx.strokeStyle = "rgb(255, 0, 225)";
	ctx.beginPath();
	ctx.moveTo(350, 350);
	ctx.lineTo(350+secondNumberX, 350-secondNumberY);
	ctx.stroke();

	ctx.strokeStyle = "rgb(255, 0, 225, 0.25)";
	ctx.beginPath();
	ctx.moveTo(350+firstNumberX, 350-firstNumberY);
	ctx.lineTo((350+firstNumberX)+secondNumberX, (350-firstNumberY)-secondNumberY);
	ctx.stroke();

	if (secondVigurX >= 0 && secondVigurY >= 0){ // (+,+)
		endPointHorn = getPoint(350, 350, 40, -(stefnuhornSecondVigur/180 * Math.PI)); 
	} 
	else if (secondVigurX < 0 && secondVigurY >= 0){ // (-,+)
		endPointHorn = getPoint(350, 350, 40, ((Math.abs(stefnuhornSecondVigur)+180)/180 * Math.PI)); 
	} 
	else if (secondVigurX < 0 && secondVigurY < 0){ // (-,-)
		endPointHorn = getPoint(350, 350, 40, -((Math.abs(stefnuhornSecondVigur)+180)/180 * Math.PI)); 
	} 
	else if (secondVigurX >= 0 && secondVigurY < 0) {	// (+,-)
		endPointHorn = getPoint(350, 350, 40, (Math.abs(stefnuhornSecondVigur)/180 * Math.PI));
	}

	ctx.beginPath();
	ctx.moveTo(350, 350);
	ctx.lineTo(startPointHorn[0], startPointHorn[1]);
	ctx.lineTo(endPointHorn[0], endPointHorn[1]);
	ctx.fillStyle = "rgb(0, 195, 255, 0.8)";
	ctx.fill();

	ctx.beginPath();
	ctx.setLineDash([15, 5]);
	ctx.strokeStyle = "#fffa00";
	ctx.moveTo(350, 350);
	ctx.lineTo((350+firstNumberX)+secondNumberX, (350-firstNumberY)-secondNumberY);
	ctx.stroke();
	
}


drawCoordinatesSystem();