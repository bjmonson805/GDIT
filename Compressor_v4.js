(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.compressor_empty3 = function() {
	this.initialize(img.compressor_empty3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1028,740);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("FEATHER\nVALVE", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 162;
	this.text.alpha = 0.54117647;
	this.text.parent = this;
	this.text.setTransform(82.75,7.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).lineTo(-82.2,32.3).closePath();
	this.shape.setTransform(84.125,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.008)").beginStroke().moveTo(-82.2,32.3).lineTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).closePath();
	this.shape_1.setTransform(84.125,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_3, rect = new cjs.Rectangle(0,-2,168.4,68.6), [rect]);


(lib.text_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("VALVE\nGUARD", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 162;
	this.text.alpha = 0.54117647;
	this.text.parent = this;
	this.text.setTransform(82.75,7.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).lineTo(-82.2,32.3).closePath();
	this.shape.setTransform(84.125,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.008)").beginStroke().moveTo(-82.2,32.3).lineTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).closePath();
	this.shape_1.setTransform(84.125,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_2, rect = new cjs.Rectangle(0,-2,168.4,68.6), [rect]);


(lib.text_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("OIL\nRESERVOIR", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 162;
	this.text.alpha = 0.54509804;
	this.text.parent = this;
	this.text.setTransform(82.75,7.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).lineTo(-82.2,32.3).closePath();
	this.shape.setTransform(84.125,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.008)").beginStroke().moveTo(-82.2,32.3).lineTo(-82.2,-32.3).lineTo(82.2,-32.3).lineTo(82.2,32.3).closePath();
	this.shape_1.setTransform(84.125,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_1, rect = new cjs.Rectangle(0,-2,168.4,71.1), [rect]);


(lib.piston = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,0,1).moveTo(-29,-38.8).lineTo(42.1,25.6).moveTo(-37.3,-30.5).lineTo(33.3,33.8).moveTo(26.8,41.2).lineTo(-43.8,-24.5).moveTo(43.8,23.2).lineTo(-26.2,-41.2);
	this.shape.setTransform(105.524,44.674);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#6F6F6F","#FFFFFF","#999999","#000000","#000000","#000000","#000000","#000000","#000000"],[0,0.369,1,1,1,1,1,1,1],-35.5,-32.8,44.6,39.6).beginStroke().moveTo(-36.6,-31.8).lineTo(-34,-33.8).lineTo(36.6,30.4).lineTo(32.9,33.9).closePath();
	this.shape_1.setTransform(102.275,48.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#6F6F6F","#FFFFFF","#999999","#000000","#000000","#000000","#000000","#000000","#000000"],[0,0.369,1,1,1,1,1,1,1],-35.5,-32.7,44.6,39.7).beginStroke().moveTo(-36.6,-31.7).lineTo(-34.5,-34).lineTo(36.6,30.5).lineTo(32.9,33.9).closePath();
	this.shape_2.setTransform(111.075,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#6F6F6F","#FFFFFF","#000000"],[0,0.369,1],34.3,35.8,-37.6,-30.4).beginStroke().moveTo(-76,4.8).lineTo(6.8,-74.3).curveTo(45.1,-42,76,-7.3).lineTo(-6.4,74.3).curveTo(-47.9,40.5,-76,4.8).closePath();
	this.shape_3.setTransform(76.05,74.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.piston, rect = new cjs.Rectangle(0,0,152.1,148.7), [rect]);


(lib.counter_weight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(29.3,25).curveTo(21.8,27.9,14.2,27).curveTo(4,25.7,-9.7,15.4).curveTo(-23.5,4.9,-27.3,-5.6).curveTo(-31,-15.8,-28,-26.2).curveTo(-27.8,-26.7,-27.7,-27.2);
	this.shape.setTransform(58.8784,32.2616);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1,3,true).moveTo(-31.1,-23.6).curveTo(-30.4,-25.6,-29.6,-26.9).curveTo(-29,-27.8,-28.2,-28.6).curveTo(-26.3,-28.7,-22.1,-26.8).curveTo(-17.4,-24.7,-15.1,-21.6).curveTo(-15.1,-20.8,-15.8,-17.9).curveTo(-16.4,-15.6,-16.1,-15.3).curveTo(-11.3,-3.4,-3.4,3.9).curveTo(5.2,11.8,15.9,14.1).curveTo(17.9,15,19.6,14.1).lineTo(22.1,12.8).curveTo(29.1,16.2,31.1,26.1).curveTo(28.5,27.6,25.9,28.6);
	this.shape_1.setTransform(62.3125,28.6243);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-11.9,-11,20.8,23).beginStroke().moveTo(11.6,29.5).curveTo(1.4,28.3,-12.3,17.9).curveTo(-26.1,7.5,-29.9,-3).curveTo(-33.6,-13.3,-30.6,-23.7).lineTo(-30.3,-24.7).curveTo(-29.6,-26.7,-28.7,-28).curveTo(-28.2,-28.9,-27.4,-29.7).curveTo(-25.4,-29.8,-21.3,-27.9).curveTo(-16.5,-25.8,-14.3,-22.7).curveTo(-14.3,-21.9,-15,-19).curveTo(-15.5,-16.7,-15.3,-16.4).curveTo(-10.5,-4.5,-2.5,2.8).curveTo(6,10.7,16.8,13).curveTo(18.7,13.9,20.5,13).lineTo(23,11.7).curveTo(30,15.1,31.9,25).curveTo(29.3,26.5,26.7,27.5).curveTo(21,29.7,15.3,29.7).curveTo(13.5,29.7,11.6,29.5).closePath();
	this.shape_2.setTransform(61.4784,29.7359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-16.3,-35.7,25.1,24.3).beginStroke().moveTo(30.1,42.3).curveTo(25.1,42.2,21.2,41.8).curveTo(15.2,41.1,9,39.4).curveTo(1.6,37.4,-5.9,33.3).curveTo(-14.4,28.7,-21.7,22).curveTo(-29.1,15.3,-33.4,9).curveTo(-37.8,2.7,-41,-6.7).curveTo(-44.3,-16.2,-45,-23.3).curveTo(-45.7,-30.5,-44.2,-42.3).lineTo(-14,-40.8).lineTo(-14.3,-39.8).curveTo(-17.3,-29.4,-13.6,-19.2).curveTo(-9.8,-8.7,3.9,1.8).curveTo(17.6,12.1,27.9,13.4).curveTo(35.5,14.3,43,11.4).lineTo(43.4,11.3).lineTo(45.2,41.4).curveTo(38,42.3,31.5,42.3).lineTo(30.1,42.3).closePath();
	this.shape_3.setTransform(45.236,45.8548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(3.3,-39.3).curveTo(39.6,-40.5,39.5,-6.1).lineTo(-2,39.3).lineTo(-39.5,6.2).closePath();
	this.shape_4.setTransform(76.8003,12.8043);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-27.2,-14.5,12.1,26.5).beginStroke().moveTo(-39.5,6.2).lineTo(3.4,-39.3).curveTo(39.6,-40.5,39.5,-6.1).lineTo(-1.9,39.3).closePath();
	this.shape_5.setTransform(76.8003,12.8043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.counter_weight, rect = new cjs.Rectangle(0,-27.5,117.3,115.7), [rect]);


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(-81.7,-33.4).lineTo(81.7,-33.4).lineTo(81.7,33.4).lineTo(-81.7,33.4).closePath();
	this.shape.setTransform(81.65,33.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-81.7,33.4).lineTo(-81.7,-33.4).lineTo(81.6,-33.4).lineTo(81.6,33.4).closePath();
	this.shape_1.setTransform(81.65,33.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box, rect = new cjs.Rectangle(-2,-2,167.3,70.8), [rect]);


(lib.axis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(24,0).curveTo(24,10,17,17).curveTo(10,24,0.1,24).curveTo(-9.9,24,-16.9,17).curveTo(-23.9,10,-23.9,0).curveTo(-23.9,-9.9,-16.9,-17).curveTo(-9.9,-24,0.1,-24).curveTo(10,-24,17,-17).curveTo(24,-9.9,24,0).closePath().moveTo(26.8,0).curveTo(26.8,11.1,18.9,18.9).curveTo(11.1,26.8,0,26.8).curveTo(-11.1,26.8,-18.9,18.9).curveTo(-26.8,11.1,-26.8,0).curveTo(-26.8,-11.1,-18.9,-18.9).curveTo(-11.1,-26.8,0,-26.8).curveTo(11.1,-26.8,18.9,-18.9).curveTo(26.8,-11.1,26.8,0).closePath().moveTo(19.1,0).curveTo(19.1,7.9,13.5,13.5).curveTo(8,19.1,0,19.1).curveTo(-7.9,19.1,-13.6,13.5).curveTo(-19.1,7.9,-19.1,0).curveTo(-19.1,-7.9,-13.6,-13.6).curveTo(-7.9,-19.1,0,-19.1).curveTo(8,-19.1,13.5,-13.6).curveTo(19.1,-7.9,19.1,0).closePath();
	this.shape.setTransform(26.75,26.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#CCCCCC","#999999"],[0.008,0.984],0,0,0,0,0,19.3).beginStroke().moveTo(-13.6,13.5).curveTo(-19.1,7.9,-19.1,0).curveTo(-19.1,-7.9,-13.6,-13.5).curveTo(-7.9,-19.1,-0,-19.1).curveTo(7.9,-19.1,13.5,-13.5).curveTo(19.1,-7.9,19.1,0).curveTo(19.1,7.9,13.5,13.5).curveTo(7.9,19.1,-0,19.1).curveTo(-7.9,19.1,-13.6,13.5).closePath();
	this.shape_1.setTransform(26.775,26.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#666666"],[0,0.451,1],-15.7,18.1,15.6,-18.1).beginStroke().moveTo(-17,17).curveTo(-24,9.9,-24,-0).curveTo(-24,-9.9,-17,-17).curveTo(-10,-24,0,-24).curveTo(9.9,-24,16.9,-17).curveTo(24,-9.9,24,-0).curveTo(24,9.9,16.9,17).curveTo(9.9,24,0,24).curveTo(-10,24,-17,17).closePath().moveTo(-13.6,-13.5).curveTo(-19.1,-8,-19.1,-0).curveTo(-19.1,7.9,-13.6,13.5).curveTo(-8,19.1,-0.1,19.1).curveTo(7.9,19.1,13.4,13.5).curveTo(19.1,7.9,19.1,-0).curveTo(19.1,-8,13.4,-13.5).curveTo(7.9,-19.1,-0.1,-19.2).curveTo(-8,-19.1,-13.6,-13.5).closePath();
	this.shape_2.setTransform(26.8,26.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-26.7,0,26.8,0).beginStroke().moveTo(-18.9,18.9).curveTo(-26.8,11.1,-26.8,-0).curveTo(-26.8,-11.1,-18.9,-18.9).curveTo(-11.1,-26.8,-0,-26.8).curveTo(11.1,-26.8,18.9,-18.9).curveTo(26.7,-11.1,26.7,-0).curveTo(26.7,11.1,18.9,18.9).curveTo(11.1,26.7,-0,26.7).curveTo(-11.1,26.7,-18.9,18.9).closePath().moveTo(-16.9,-17).curveTo(-23.9,-9.9,-24,-0).curveTo(-23.9,9.9,-16.9,17).curveTo(-9.9,24,0.1,24).curveTo(10,24,17,17).curveTo(24,9.9,24,-0).curveTo(24,-9.9,17,-17).curveTo(10,-24,0.1,-24).curveTo(-9.9,-24,-16.9,-17).closePath();
	this.shape_3.setTransform(26.75,26.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.axis, rect = new cjs.Rectangle(-1,-1,55.5,55.5), [rect]);


(lib.arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(-36.2,43.2).curveTo(-31,46.1,-27.7,44.9).curveTo(-24.5,43.7,9.5,4.5).curveTo(26.4,-15.1,45.6,-32.6).curveTo(42.2,-35,40.8,-38.7).lineTo(-37.5,42.5).curveTo(-36.8,42.9,-36.2,43.2).closePath().moveTo(36.2,-45.2).lineTo(-38.9,18.1).lineTo(-42.2,21.9).curveTo(-45.5,26.1,-45.5,28.4).curveTo(-45.5,34.9,-43.8,37.6).lineTo(37.8,-40).curveTo(36.2,-42.7,36.2,-45.2).closePath();
	this.shape.setTransform(110.35,64.5278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#666666"],[0,0.451,1],-45.5,1.9,42.7,1.9).beginStroke().moveTo(-36.3,43.2).lineTo(-37.5,42.5).lineTo(40.8,-38.7).curveTo(42.2,-35,45.5,-32.6).curveTo(26.4,-15.1,9.4,4.5).curveTo(-24.5,43.7,-27.7,44.9).curveTo(-28.7,45.2,-29.8,45.2).curveTo(-32.6,45.2,-36.3,43.2).closePath().moveTo(-45.6,28.4).curveTo(-45.6,26.1,-42.2,21.9).lineTo(-39,18.1).lineTo(36.2,-45.2).curveTo(36.2,-42.7,37.8,-40).lineTo(-43.8,37.6).curveTo(-45.6,34.9,-45.6,28.4).closePath();
	this.shape_1.setTransform(110.35,64.5278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.axis();
	this.instance.setTransform(46.6,127.6,1,1,0,0,0,26.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(-0.9,-43.4).lineTo(-0.9,-43.2).lineTo(0,-41.4).lineTo(0.5,-40.4).lineTo(0.8,-40.3).lineTo(0.9,-40.2).lineTo(0.8,-40.2).lineTo(0.8,-40.3).lineTo(0.3,-41.1).lineTo(1.2,-40.1).lineTo(0.9,-40.2).moveTo(-1.5,-42.8).lineTo(-0.9,-43.4).moveTo(4.8,-36.4).lineTo(1.2,-32.8).lineTo(-7.9,-41.8).lineTo(-3.7,-46.1).lineTo(-1.6,-45.6).lineTo(-0.9,-43.4).moveTo(-3.8,-45.3).lineTo(-1.5,-42.8).lineTo(0,-41.4).lineTo(0.3,-41.1).lineTo(-0.9,-43.2).lineTo(2,-42.6).lineTo(3,-39.5).lineTo(1.4,-39.9).lineTo(3.3,-39.3).lineTo(2.6,-38.6).lineTo(4.8,-36.4).moveTo(1.3,-40.1).lineTo(1.2,-40.1).lineTo(1.2,-40.1).lineTo(1.3,-40.1).lineTo(1.4,-39.9).moveTo(1.3,-40.1).lineTo(2.6,-38.6).lineTo(-0.8,-35.1).lineTo(-5,-39.3).lineTo(-1.5,-42.8).moveTo(3.3,-39.3).lineTo(5.5,-39.3).lineTo(5.5,-37.1).lineTo(4.8,-36.4).lineTo(5.1,-36.1).moveTo(-25.1,-27.8).lineTo(28.6,23.7).lineTo(26.4,25.7).lineTo(-26.9,-25.7).closePath().moveTo(-44.1,-2.8).lineTo(-44.4,-2.8).lineTo(-44.5,-2.8).lineTo(-44.4,-2.8).lineTo(-44.1,-2.8).lineTo(-44,-2.8).lineTo(-44,-2.7).closePath().moveTo(-44.5,-2.8).lineTo(-44.7,-2.9).lineTo(-46.6,-3.7).lineTo(-49.1,-3.8).lineTo(-49.1,-6).lineTo(-48.3,-6.8).lineTo(-44.5,-10.7).lineTo(-34.8,-1).lineTo(-39.3,3.6).lineTo(-41.5,3.1).lineTo(-42.2,0.7).lineTo(-42.2,0.5).lineTo(-43.2,-1.5).lineTo(-43.5,-1.8).lineTo(-44.4,-2.8).lineTo(-44.4,-2.8).moveTo(-44,-2.7).lineTo(-43.5,-1.8).lineTo(-42.2,0.5).lineTo(-45.4,-0.2).lineTo(-46.4,-3.5).lineTo(-44.7,-2.9).moveTo(-43.2,-1.5).lineTo(-43.7,-2.5).lineTo(-44,-2.7).moveTo(-41.6,0.1).lineTo(-42.2,0.7).moveTo(-41.6,0.1).lineTo(-43.2,-1.5).moveTo(-39.1,2.7).lineTo(-41.6,0.1).moveTo(-45.9,-4.4).lineTo(-42.3,-8.1).lineTo(-37.8,-3.8).lineTo(-41.6,0.1).moveTo(-2.1,38.7).lineTo(-4.5,38.7).lineTo(-4.5,36.3).lineTo(-3.7,35.5).lineTo(-4,35.2).moveTo(-2.1,38.7).lineTo(-1.3,38).lineTo(-3.7,35.5).lineTo(0.2,31.6).lineTo(10.2,41.4).lineTo(5.6,46.2).lineTo(3.3,45.7).lineTo(2.5,43.2).lineTo(2.5,43).lineTo(-0.7,42.3).lineTo(-1.8,38.9).lineTo(0,39.5).lineTo(0.2,39.6).lineTo(0.2,39.6).lineTo(0.6,39.7).lineTo(0.3,39.6).lineTo(0.2,39.6).lineTo(-1.3,38).lineTo(2.5,34.2).lineTo(7,38.7).lineTo(3.2,42.6).lineTo(2.5,43.2).moveTo(0.8,39.8).lineTo(0.6,39.7).lineTo(0.8,39.6).lineTo(0.8,39.8).lineTo(1.3,40.6).lineTo(0.3,39.6).lineTo(0.2,39.6).moveTo(1.5,41).lineTo(1,39.8).lineTo(0.8,39.8).moveTo(1.5,41).lineTo(1.3,40.6).lineTo(2.3,42.5).closePath().moveTo(2.3,42.5).lineTo(2.5,43).moveTo(3.2,42.6).lineTo(1.5,41).moveTo(5.7,45.2).lineTo(3.2,42.6).moveTo(0,39.5).lineTo(-2.1,38.7).moveTo(48.4,4).lineTo(44.8,7.6).lineTo(35.6,-1.5).lineTo(39.9,-5.8).lineTo(42,-5.4).lineTo(42.6,-3.1).lineTo(42.6,-2.9).lineTo(43.6,-1.1).lineTo(44.1,-0.1).lineTo(44.3,0.1).lineTo(43.8,-0.8).lineTo(44.7,0.2).lineTo(44.8,0.2).lineTo(44.9,0.2).lineTo(44.7,0.2).lineTo(44.5,0.1).lineTo(44.3,0.2).lineTo(44.3,0.1).lineTo(44.5,0.1).moveTo(48.4,4).lineTo(48.6,4.2).moveTo(46.8,1).lineTo(49.1,1.1).lineTo(49.1,3.2).lineTo(48.4,4).moveTo(42.1,-2.6).lineTo(42.6,-3.1).moveTo(42.1,-2.6).lineTo(43.6,-1.1).lineTo(43.8,-0.8).lineTo(42.6,-2.9).lineTo(45.6,-2.3).lineTo(46.6,0.8).lineTo(45,0.3).lineTo(44.9,0.2).lineTo(46.1,1.7).lineTo(42.7,5.2).lineTo(38.5,1.1).closePath().moveTo(44.8,0.2).lineTo(45,0.3).lineTo(46.8,1).lineTo(46.1,1.7).lineTo(48.4,4).moveTo(39.6,-5).lineTo(42.1,-2.6).moveTo(-48.3,-6.8).lineTo(-48.5,-7.1).moveTo(-46.6,-3.7).lineTo(-45.9,-4.4).lineTo(-48.3,-6.8).moveTo(-44.5,-2.8).lineTo(-45.9,-4.4);
	this.shape_2.setTransform(44.7,127.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-26.8,-25.6,11.2,7.8).beginStroke().moveTo(-27.8,-24.6).lineTo(-25.9,-26.7).lineTo(27.8,24.7).lineTo(25.5,26.7).closePath();
	this.shape_3.setTransform(45.525,126.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],0.2,-1.6,2.3,0.4).beginStroke().moveTo(0.3,1.4).lineTo(0.2,1.3).lineTo(0.1,1.2).lineTo(0.1,1.2).lineTo(-0.8,0.3).lineTo(-1.9,-1.8).lineTo(1,-1.3).lineTo(2,1.8).closePath().moveTo(-0.1,1.1).lineTo(-0.3,1.1).lineTo(-0.1,1.1).lineTo(-0.3,1.2).lineTo(-0.3,1.1).lineTo(-0.8,0.3).lineTo(0.1,1.2).closePath().moveTo(-0.1,1.1).closePath();
	this.shape_4.setTransform(45.75,86.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-4.6,-4.5,4.6,4.5).beginStroke().moveTo(-6.7,-2.3).lineTo(-2.5,-6.7).lineTo(-0.4,-6.2).lineTo(0.3,-4).lineTo(-0.3,-3.4).lineTo(-2.6,-5.8).lineTo(-0.3,-3.4).lineTo(-3.8,0.2).lineTo(0.4,4.3).lineTo(3.8,0.8).lineTo(6,3.1).lineTo(3.8,0.8).lineTo(4.5,0.1).lineTo(6.7,0.2).lineTo(6.7,2.4).lineTo(6,3.1).lineTo(2.4,6.7).closePath();
	this.shape_5.setTransform(43.475,88.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-2.2,-2.1,1.9,2).beginStroke().moveTo(-4.1,0).lineTo(-0.6,-3.6).lineTo(0.9,-2.1).lineTo(1.3,-1.1).lineTo(1.6,-1).lineTo(1.6,-0.9).lineTo(1.8,-1).lineTo(2,-0.9).lineTo(2.1,-0.8).lineTo(2.3,-0.6).lineTo(4.1,-0.1).lineTo(3.5,0.6).lineTo(2.1,-0.8).lineTo(3.5,0.6).lineTo(0,4.1).closePath().moveTo(2.1,-0.8).closePath().moveTo(2,-0.9).lineTo(2.1,-0.9).lineTo(2.1,-0.8).closePath().moveTo(0.9,-2.1).closePath().moveTo(-0.6,-3.6).lineTo(-0,-4.1).lineTo(-0,-3.9).lineTo(0.9,-2.1).closePath();
	this.shape_6.setTransform(43.825,88.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],4.9,4.8,-4.9,-4.8).beginStroke().moveTo(0.4,6.7).lineTo(-0.3,4.3).lineTo(0.3,3.6).lineTo(2.8,6.2).lineTo(0.3,3.6).lineTo(4.1,-0.2).lineTo(-0.4,-4.6).lineTo(-4,-0.8).lineTo(-6.4,-3.3).lineTo(-2.6,-7.1).lineTo(7.2,2.5).lineTo(2.6,7.1).closePath().moveTo(-7.2,-0.2).lineTo(-7.2,-2.5).lineTo(-6.4,-3.3).lineTo(-4,-0.8).lineTo(-4.7,-0.1).closePath().moveTo(-6.4,-3.3).closePath();
	this.shape_7.setTransform(2.775,124.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-0.2,1.7,-2.4,-0.5).beginStroke().moveTo(-1.1,1.3).lineTo(-2.1,-2).lineTo(-0.4,-1.4).lineTo(-0.2,-1.3).lineTo(-0.1,-1.3).lineTo(0.8,-0.3).lineTo(2.1,2).closePath().moveTo(-0.1,-1.3).lineTo(0.2,-1.2).lineTo(0.4,-1.2).lineTo(0.2,-1.2).lineTo(0.4,-1.3).lineTo(0.4,-1.2).lineTo(0.8,-0.3).closePath().moveTo(-0.1,-1.3).lineTo(-0.1,-1.3).lineTo(0.2,-1.2).closePath().moveTo(-0.1,-1.3).closePath();
	this.shape_8.setTransform(0.35,126.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],2.2,2.2,-2.2,-2.1).beginStroke().moveTo(-0,4.2).lineTo(-0.9,2.2).lineTo(0.6,3.8).lineTo(-0,4.4).closePath().moveTo(-0.9,2.2).lineTo(-1.5,1.2).lineTo(-1.7,1).lineTo(-1.7,0.9).lineTo(-1.9,1).lineTo(-2.2,0.9).lineTo(-2.3,0.9).lineTo(-2.2,0.9).lineTo(-2.2,0.9).lineTo(-2.3,0.9).lineTo(-3.7,-0.7).lineTo(-0,-4.4).lineTo(4.4,-0.1).lineTo(0.6,3.8).closePath().moveTo(-2.4,0.8).lineTo(-4.4,0).lineTo(-3.7,-0.7).lineTo(-2.3,0.9).closePath();
	this.shape_9.setTransform(2.45,124.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-0.3,1.7,-2.6,-0.5).beginStroke().moveTo(-1,1.4).lineTo(-2.1,-2).lineTo(-0.3,-1.4).lineTo(-0.2,-1.4).lineTo(-0,-1.3).lineTo(0.9,-0.3).lineTo(-0,-1.3).lineTo(-0.1,-1.4).lineTo(0.2,-1.2).lineTo(-0,-1.3).lineTo(0.2,-1.2).lineTo(0.4,-1.3).lineTo(0.4,-1.2).lineTo(0.9,-0.3).lineTo(1.9,1.5).lineTo(2.1,2).closePath().moveTo(0.4,-1.2).lineTo(0.2,-1.2).closePath().moveTo(0.2,-1.2).closePath();
	this.shape_10.setTransform(45.05,168.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],2.3,2.2,-2.2,-2.2).beginStroke().moveTo(0,4.3).lineTo(-0.2,3.8).lineTo(-1,2.3).lineTo(-1.5,1.2).lineTo(-1.7,1.1).lineTo(-1.7,0.9).lineTo(-1.9,1).lineTo(-2.2,0.9).lineTo(-2.2,0.9).lineTo(-2.3,0.9).lineTo(-2.2,0.9).lineTo(-2.3,0.9).lineTo(-3.8,-0.7).lineTo(0,-4.5).lineTo(4.5,-0).lineTo(0.7,3.9).lineTo(-1,2.3).lineTo(0.7,3.9).lineTo(0,4.5).closePath().moveTo(-2.4,0.8).lineTo(-4.6,0).lineTo(-3.8,-0.7).lineTo(-2.3,0.9).closePath();
	this.shape_11.setTransform(47.15,166.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],5,4.9,-5,-4.9).beginStroke().moveTo(0.4,6.8).lineTo(-0.3,4.4).lineTo(0.3,3.7).lineTo(4.2,-0.2).lineTo(-0.4,-4.7).lineTo(-4.1,-0.9).lineTo(-6.5,-3.4).lineTo(-4.1,-0.9).lineTo(-4.9,-0.1).lineTo(-7.4,-0.2).lineTo(-7.4,-2.5).lineTo(-6.5,-3.4).lineTo(-2.7,-7.3).lineTo(7.4,2.6).lineTo(2.7,7.3).closePath().moveTo(2.9,6.4).lineTo(0.3,3.7).closePath();
	this.shape_12.setTransform(47.525,166.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],0.2,-1.7,2.3,0.4).beginStroke().moveTo(0.4,1.4).lineTo(0.2,1.3).lineTo(0.2,1.3).lineTo(0.1,1.3).lineTo(0.2,1.3).lineTo(0.1,1.3).lineTo(-0.8,0.3).lineTo(-2,-1.8).lineTo(1,-1.3).lineTo(2,1.8).closePath().moveTo(-0.1,1.2).lineTo(-0.4,1.1).lineTo(-0.1,1.2).lineTo(-0.4,1.2).lineTo(-0.4,1.1).lineTo(-0.8,0.3).lineTo(0.1,1.3).closePath();
	this.shape_13.setTransform(89.3,126.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-2.2,-2.1,2,2).beginStroke().moveTo(-4.2,0).lineTo(-0.6,-3.6).lineTo(0.9,-2.1).lineTo(1.4,-1.1).lineTo(1.6,-1).lineTo(1.6,-0.9).lineTo(1.8,-0.9).lineTo(2,-0.8).lineTo(2.2,-0.8).lineTo(2.1,-0.8).lineTo(2.4,-0.7).lineTo(2.2,-0.8).lineTo(2.4,-0.7).lineTo(4.2,-0).lineTo(3.5,0.7).lineTo(2.2,-0.8).lineTo(3.5,0.7).lineTo(0,4.2).closePath().moveTo(0.9,-2.1).closePath().moveTo(-0.6,-3.6).lineTo(-0.1,-4.2).lineTo(-0.1,-3.9).lineTo(0.9,-2.1).closePath();
	this.shape_14.setTransform(87.35,128.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-4.6,-4.6,4.6,4.5).beginStroke().moveTo(-6.8,-2.4).lineTo(-2.5,-6.7).lineTo(-0.4,-6.3).lineTo(0.3,-4).lineTo(-0.3,-3.5).lineTo(-2.7,-5.9).lineTo(-0.3,-3.5).lineTo(-3.8,0.2).lineTo(0.4,4.3).lineTo(3.8,0.8).lineTo(6,3.1).lineTo(2.5,6.7).closePath().moveTo(6,3.1).closePath().moveTo(3.8,0.8).lineTo(4.5,0.1).lineTo(6.8,0.2).lineTo(6.8,2.3).lineTo(6,3.1).closePath();
	this.shape_15.setTransform(87.025,128.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#666666").setStrokeStyle(1,1,1,3,true).moveTo(-40.8,9.5).curveTo(-35.7,10.8,-29.1,4.4).lineTo(76.8,-84.9).lineTo(88.2,-73.6).lineTo(-3.2,27.6).curveTo(-7.1,33.8,-6.4,41.5).moveTo(-40.8,9.5).lineTo(-35.9,13.2).curveTo(-16.2,16.7,-11.2,36.3).lineTo(-6.4,41.5).lineTo(1.1,51.5).lineTo(-32.8,84.9).lineTo(-45.1,74.3).curveTo(-70.1,66,-73.4,46.1).lineTo(-88.2,32.5).lineTo(-52.2,0.4).closePath();
	this.shape_16.setTransform(88.15,84.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-24.1,-27.4,40,40).beginStroke().moveTo(-1.5,31.7).curveTo(-26.6,23.4,-29.9,3.4).lineTo(-44.6,-10.1).lineTo(-8.7,-42.3).lineTo(2.8,-33.2).lineTo(7.6,-29.4).curveTo(27.3,-25.9,32.3,-6.3).lineTo(37.1,-1.1).lineTo(44.6,8.9).lineTo(10.7,42.2).closePath();
	this.shape_17.setTransform(44.65,127.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginLinearGradientFill(["#828282","#C9C9C9","#919191"],[0,0.451,1],-9.5,-9.1,20.1,22.1).beginStroke().moveTo(-34.9,58).curveTo(-39.9,38.4,-59.6,35).lineTo(-64.4,31.2).curveTo(-59.4,32.5,-52.8,26.1).lineTo(53.1,-63.2).lineTo(64.5,-51.9).lineTo(-27,49.3).curveTo(-30.8,55.5,-30.1,63.2).closePath();
	this.shape_18.setTransform(111.85,63.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, rect = new cjs.Rectangle(-5.4,-1,182.7,176), [rect]);


(lib.anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// piston
	this.instance = new lib.piston();
	this.instance.setTransform(222.7,-117.35,1,1,0,0,0,76,74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:189.35,y:-84},24).to({x:222.7,y:-117.35},25).wait(1));

	// arm
	this.instance_1 = new lib.arm();
	this.instance_1.setTransform(97.6,-9.5,1,1,7.7822,0,0,50.1,129.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9999,scaleY:0.9999,rotation:15.8163,guide:{path:[97.6,-9.5,90.4,-16.2,80.4,-16.2,73.5,-16.2,67.9,-12.9]}},10).to({regX:48,regY:128,scaleX:1,scaleY:1,rotation:2.4714,guide:{path:[67.8,-12.9,65,-11.3,62.5,-8.9,55.1,-1.4,55.2,8.9,55.1,19,61.9,26.2]}},14).to({regX:48.1,regY:127.9,rotation:-2.3061,guide:{path:[61.9,26.2,62.2,26.5,62.6,26.8,69.1,33.4,78.2,34.1]}},7).to({regX:48.6,regY:128.8,rotation:-6.1906,guide:{path:[78.1,34.2,79.2,34.3,80.4,34.3,90.3,34.3,97.5,27.6]}},8).to({regX:48,regY:127.9,rotation:2.9353,guide:{path:[97.5,27.6,97.9,27.2,98.3,26.8,105.7,19.5,105.7,9,105.7,-0.8,99.1,-7.9]}},10).wait(1));

	// counter
	this.instance_2 = new lib.counter_weight();
	this.instance_2.setTransform(74.4,17,1,1,0,0,0,81.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-111.2506,x:71.3,y:15.7},17).to({regY:8,rotation:-264.2762,x:81.8,y:19.85},16).to({regY:7.9,rotation:-360,x:74.4,y:17},16).wait(1));

	// piston
	this.instance_3 = new lib.piston();
	this.instance_3.setTransform(-47,-86.4,0.5844,0.5844,-90,0,0,76.3,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:76.5,regY:58.9,scaleX:0.6033,scaleY:0.6346,x:-90.2,y:-124.05},24).to({regX:76.3,regY:59,scaleX:0.5844,scaleY:0.5844,x:-47,y:-86.4},25).wait(1));

	// arm
	this.instance_4 = new lib.arm();
	this.instance_4.setTransform(98.6,27.45,1,1,-94.0461,0,0,50,129.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:50.1,regY:129.5,scaleX:0.9999,scaleY:0.9999,rotation:-102.3589,guide:{path:[98.6,27.4,104.6,19.6,103.6,9.8,102.9,2.8,98.9,-2.5]}},10).to({regX:49.9,regY:129.4,rotation:-102.0469,guide:{path:[98.9,-2.6,97,-5.1,94.4,-7.1,87.9,-12.5,79.9,-12.8]}},7).to({regX:50.1,regY:129.7,scaleX:1,scaleY:1,rotation:-94.3187,guide:{path:[79.9,-12.8,78,-12.9,76,-12.7,66.1,-11.8,59.6,-4.6]}},7).to({rotation:-87.0093,guide:{path:[59.6,-4.5,59.2,-4,58.9,-3.6,52.6,4.1,53.2,13.7]}},8).to({rotation:-83.3315,guide:{path:[53.2,13.8,53.2,14.3,53.3,14.9,54.1,23.4,59.8,29.4]}},7).to({regX:50,scaleX:0.9999,scaleY:0.9999,rotation:-85.8258,guide:{path:[59.8,29.4,61,30.7,62.5,31.9,69.6,37.8,78.6,37.7]}},5).to({regX:50.1,regY:129.6,scaleX:1,scaleY:1,rotation:-92.3227,guide:{path:[78.6,37.7,79.8,37.7,81,37.5,90.7,36.6,97,29.3]}},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-191.6,380.3,288.9);
p.frameBounds = [rect, new cjs.Rectangle(-83.4,-190.2,380.8,288.2), new cjs.Rectangle(-85.3,-188.8,381.4,287.4), new cjs.Rectangle(-87.3,-187.5,382,286.6), new cjs.Rectangle(-89.2,-186.1,382.5,285.6), new cjs.Rectangle(-91.1,-184.7,383,284.5), new cjs.Rectangle(-93,-183.3,383.5,283.3), new cjs.Rectangle(-94.9,-181.9,384,282.1), new cjs.Rectangle(-96.9,-180.5,384.6,281.2), new cjs.Rectangle(-98.8,-179.1,385.1,279.8), new cjs.Rectangle(-100.7,-177.7,385.7,278), new cjs.Rectangle(-102.7,-176.3,386.2,276), new cjs.Rectangle(-104.5,-174.9,386.7,274.2), new cjs.Rectangle(-106.4,-173.6,387.2,272.2), new cjs.Rectangle(-108.4,-172.2,387.8,269.6), new cjs.Rectangle(-110.3,-170.8,388.3,267.3), new cjs.Rectangle(-112.2,-169.4,388.8,264.5), new cjs.Rectangle(-114.1,-168,389.4,263), new cjs.Rectangle(-116.1,-166.6,389.9,254.4), new cjs.Rectangle(-118,-165.2,390.4,245.9), new cjs.Rectangle(-119.9,-163.8,390.9,235.7), new cjs.Rectangle(-121.8,-164.8,391.5,227.9), new cjs.Rectangle(-123.8,-166.4,392.1,232.6), new cjs.Rectangle(-125.7,-168.2,392.6,237.2), new cjs.Rectangle(-127.5,-169.6,393,243.9), new cjs.Rectangle(-125.6,-168.1,392.5,243.3), new cjs.Rectangle(-123.8,-166.6,392,243.4), new cjs.Rectangle(-122,-165,391.5,243.2), new cjs.Rectangle(-120.1,-163.6,391,243), new cjs.Rectangle(-118.3,-164.9,390.4,245.2), new cjs.Rectangle(-116.5,-166.3,390,247.1), new cjs.Rectangle(-114.6,-167.6,389.4,250), new cjs.Rectangle(-112.8,-168.9,388.9,250.3), new cjs.Rectangle(-110.9,-170.3,388.4,251.4), new cjs.Rectangle(-109.1,-171.6,388,252.3), new cjs.Rectangle(-107.2,-172.9,387.4,252.9), new cjs.Rectangle(-105.4,-174.3,386.9,253.2), new cjs.Rectangle(-103.6,-175.6,386.4,255.8), new cjs.Rectangle(-101.7,-177,385.9,259), new cjs.Rectangle(-99.8,-178.3,385.3,267), new cjs.Rectangle(-98,-179.6,384.9,266.5), new cjs.Rectangle(-96.2,-181,384.3,270.4), new cjs.Rectangle(-94.3,-182.3,383.8,273.5), new cjs.Rectangle(-92.5,-183.6,383.3,276), new cjs.Rectangle(-90.7,-185,382.8,280.2), new cjs.Rectangle(-88.8,-186.3,382.3,280), new cjs.Rectangle(-87,-187.6,381.8,283.3), new cjs.Rectangle(-85.1,-189,381.3,285.8), new cjs.Rectangle(-83.3,-190.3,380.8,287.3), new cjs.Rectangle(-81.5,-191.6,380.3,288.9)];


// stage content:
(lib.Compressor_v4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let offsetX, offsetY;
		let draggingObj = null;
		
		const answers = [this.answer_1, this.answer_2, this.answer_3];
		const boxes = [this.box_1, this.box_2, this.box_3];
		var anim = this.anim;
		this.anim.stop();
		
		// Save original positions
		answers.forEach(ans => {
		    ans.originalX = ans.x;
		    ans.originalY = ans.y;
		    ans.currentBoxIndex = null; // track snapped box index, null = none
		});
		
		answers.forEach(ans => {
		    ans.on("mousedown", function(evt) {
		        draggingObj = evt.currentTarget;
		        offsetX = evt.stageX - draggingObj.x;
		        offsetY = evt.stageY - draggingObj.y;
		        stage.setChildIndex(draggingObj, stage.numChildren - 1);
		    });
		
		    ans.on("pressmove", function(evt) {
		        if (draggingObj === evt.currentTarget) {
		            draggingObj.x = evt.stageX - offsetX;
		            draggingObj.y = evt.stageY - offsetY;
		            stage.update();
		        }
		    });
		});
		
		stage.on("stagemouseup", function(evt) {
		    if (draggingObj) {
		        const threshold = 50; // distance in pixels
		        let closestBoxIndex = null;
		        let minDist = Infinity;
		
		        // Find closest box within threshold
		        boxes.forEach((box, i) => {
		            const dist = getDistance(draggingObj, box);
		            if (dist < threshold && dist < minDist) {
		                minDist = dist;
		                closestBoxIndex = i;
		            }
		        });
		
		        if (closestBoxIndex !== null) {
		            // Snap answer to closest box
		            draggingObj.x = boxes[closestBoxIndex].x;
		            draggingObj.y = boxes[closestBoxIndex].y;
		            draggingObj.currentBoxIndex = closestBoxIndex;
		        } else {
		            // Return to original position
		            draggingObj.x = draggingObj.originalX;
		            draggingObj.y = draggingObj.originalY;
		            draggingObj.currentBoxIndex = null;
		        }
		
		        draggingObj = null;
		        stage.update();
		
		        checkAllCorrect();
		    }
		});
		
		function getDistance(mc1, mc2) {
		    //const pt1 = mc1.localToGlobal(mc1.getBounds().width / 2, mc1.getBounds().height / 2);
		    //const pt2 = mc2.localToGlobal(mc2.getBounds().width / 2, mc2.getBounds().height / 2);
		    const dx = mc2.x - mc1.x;
		    const dy = mc2.y - mc1.y;
		    return Math.sqrt(dx * dx + dy * dy);
		}
		
		// Check if all answers are correctly matched to their boxes
		function checkAllCorrect() {
		    let allCorrect = true;
		
		    answers.forEach((ans, i) => {
		        if (ans.currentBoxIndex !== i) {
		            allCorrect = false;
		        }
		    });
		
		    if (allCorrect) {
		        console.log("All answers placed correctly! 🎉");
		        // Add success logic here (e.g., play sound, show message)
				
				anim.gotoAndPlay(2);
		    } else {
		        console.log("Some answers are incorrect or not placed.");
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// labels
	this.answer_2 = new lib.text_2();
	this.answer_2.name = "answer_2";
	this.answer_2.setTransform(144.85,490.9,1,1,0,0,0,82.8,33.7);

	this.answer_3 = new lib.text_3();
	this.answer_3.name = "answer_3";
	this.answer_3.setTransform(144.85,570.35,1,1,0,0,0,82.8,33.7);

	this.answer_1 = new lib.text_1();
	this.answer_1.name = "answer_1";
	this.answer_1.setTransform(144.85,411.5,1,1,0,0,0,82.8,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_1},{t:this.answer_3},{t:this.answer_2}]}).wait(1));

	// boxes
	this.box_2 = new lib.box();
	this.box_2.name = "box_2";
	this.box_2.setTransform(932.15,143.3,1,1,0,0,0,81.7,33.4);

	this.box_3 = new lib.box();
	this.box_3.name = "box_3";
	this.box_3.setTransform(918.15,320.55,1,1,0,0,0,81.7,33.4);

	this.box_1 = new lib.box();
	this.box_1.name = "box_1";
	this.box_1.setTransform(842.15,565.85,1,1,0,0,0,81.7,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box_1},{t:this.box_3},{t:this.box_2}]}).wait(1));

	// piston_1
	this.anim = new lib.anim();
	this.anim.name = "anim";
	this.anim.setTransform(509.8,463.55,1,1,0,0,0,50.4,50.1);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#0033CC").setStrokeStyle(4,1,1).moveTo(60.5,-74.2).lineTo(113.5,-23.2).moveTo(38.1,-107.2).lineTo(136.5,-216.2).moveTo(-136.4,216.2).lineTo(30.4,216.2);
	this.shape.setTransform(726.55,349.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// empty
	this.instance = new lib.compressor_empty3();
	this.instance.setTransform(14,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#0033CC").setStrokeStyle(4,1,1).moveTo(-83.4,0).lineTo(83.4,0);
	this.shape_1.setTransform(849,243.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(526,397,1028,740);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '78B30F88F28EEA4EAF9566FD6B63C178',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/compressor_empty3.jpg?1749574073310", id:"compressor_empty3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['78B30F88F28EEA4EAF9566FD6B63C178'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;