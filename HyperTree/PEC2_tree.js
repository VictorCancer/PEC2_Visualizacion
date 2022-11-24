var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
	"id": "190_0",
	"name": "The Beatles",
	"children": [
		{
			"id": "306208_1",
			"name": "George Harrison",
			"data": {
				"band": "The Beatles",
				"relation": "collaboration"
			},
			"children": [
				{
					"id": "84_2",
					"name": "Wonderwall Music",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_5",
					"name": "All Things Must Pass",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_6",
					"name": "Living in the Material World",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_8",
					"name": "Dark Horse",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_0",
					"name": "Somewhere in England",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_9",
					"name": "Cloud Nine",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "94_4",
					"name": "Extra Texture (Read All About It)",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "98_4",
					"name": "The Concert for Bangladesh",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "14581_7",
					"name": "Imagine",
					"data": {
						"band": "John Lennon",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "50188_8",
					"name": "Some Time in New York City",
					"data": {
						"band": "John Lennon",
						"relation": "collaboration"
					},
					"children": []
				}
			]
		},
		{
			"id": "107877_3",
			"name": "Ringo Starr",
			"data": {
				"band": "The Beatles",
				"relation": "collaboration"
			},
			"children": [
				{
					"id": "84_2",
					"name": "Wonderwall Music",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_5",
					"name": "All Things Must Pass",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_6",
					"name": "Living in the Material World",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_8",
					"name": "Dark Horse",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_0",
					"name": "Somewhere in England",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_9",
					"name": "Cloud Nine",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "94_4",
					"name": "Extra Texture (Read All About It)",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "98_4",
					"name": "The Concert for Bangladesh",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_4",
					"name": "Sentimental Journey",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_5",
					"name": "Ringo",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_6",
					"name": "Goodnight Vienna",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_7",
					"name": "Ringo's Rotogravure",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_8",
					"name": "Stop and Smell the Roses",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_9",
					"name": "Vertical Man",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_11",
					"name": "Y Not",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_12",
					"name": "Give More Love",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_14",
					"name": "What's My Name",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "1756_6",
					"name": "John Lennon/Plastic Ono Band",
					"data": {
						"band": "John Lennon",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "236585_30",
					"name": "Tug of War",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "14581_14",
					"name": "Pipes of Peace",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "24119_15",
					"name": "Give My Regards to Broad Street",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "50188_16",
					"name": "Flaming Pie",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				}
			]
		},
		{
			"id": "236797_5",
			"name": "John Lennon",
			"data": {
				"band": "The Beatles",
				"relation": "member of band"
			},
			"children": [
				{
					"id": "1756_6",
					"name": "John Lennon/Plastic Ono Band",
					"data": {
						"band": "John Lennon",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "14581_7",
					"name": "Imagine",
					"data": {
						"band": "John Lennon",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "50188_8",
					"name": "Some Time in New York City",
					"data": {
						"band": "John Lennon",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_5",
					"name": "Ringo",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_6",
					"name": "Goodnight Vienna",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_7",
					"name": "Ringo's Rotogravure",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "84_5",
					"name": "All Things Must Pass",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				}
			]
		},
		{
			"id": "41529_12",
			"name": "Paul McCartney",
			"data": {
				"band": "The Beatles",
				"relation": "member of band"
			},
			"children": [
				{
					"id": "236585_30",
					"name": "Tug of War",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "14581_14",
					"name": "Pipes of Peace",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "24119_15",
					"name": "Give My Regards to Broad Street",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "50188_16",
					"name": "Flaming Pie",
					"data": {
						"band": "Paul McCartney",
						"relation": "member of band"
					},
					"children": []
				},
				{
					"id": "84_0",
					"name": "Somewhere in England",
					"data": {
						"band": "George Harrison",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_4",
					"name": "Sentimental Journey",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_5",
					"name": "Ringo",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_7",
					"name": "Ringo's Rotogravure",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_8",
					"name": "Stop and Smell the Roses",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_9",
					"name": "Vertical Man",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_11",
					"name": "Y Not",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_12",
					"name": "Give More Love",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				},
				{
					"id": "598_14",
					"name": "What's My Name",
					"data": {
						"band": "Ringo Starr",
						"relation": "collaboration"
					},
					"children": []
				}
			]
		}
	],
	"data": []
};
    
    var graph = '[{id:"190_0", adjacencies:["node0"]}, {id:"node0", name:"node0 name", data:{$dim:8.660354683365695, "some other key":"some other value"}, adjacencies:["node1", "node2", "node3", "node4", "node5"]}, {id:"node1", name:"node1 name", data:{$dim:21.118129724156983, "some other key":"some other value"}, adjacencies:["node0", "node2", "node3", "node4", "node5"]}, {id:"node2", name:"node2 name", data:{$dim:6.688951018413683, "some other key":"some other value"}, adjacencies:["node0", "node1", "node3", "node4", "node5"]}, {id:"node3", name:"node3 name", data:{$dim:19.78771599710248, "some other key":"some other value"}, adjacencies:["node0", "node1", "node2", "node4", "node5"]}, {id:"node4", name:"node4 name", data:{$dim:3.025781742947326, "some other key":"some other value"}, adjacencies:["node0", "node1", "node2", "node3", "node5"]}, {id:"node5", name:"node5 name", data:{$dim:9.654383829711456, "some other key":"some other value"}, adjacencies:["node0", "node1", "node2", "node3", "node4"]}, {id:"4619_46", adjacencies:["190_0"]}, {id:"236585_30", adjacencies:["190_0"]}, {id:"131161_18", adjacencies:["190_0"]}, {id:"41529_12", adjacencies:["190_0"]}]';
    

	
	
	//end
    
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //canvas width and height
        width: w,
        height: h,
        //Change Node and Edge styles and colors.
        Node: {
            dim: 9,
            color: "#f00",
            overridable: true
        },
        
        Edge: {
            lineWidth: 2,
            color: "#088",
            overridable: true
        },
    
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Add the node's name to its corresponding label.
        //This method is only called on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
        },

        //Ths method is called when moving/placing a label.
        //Add label styles based on their position.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            if (node._depth <= 1) {
                style.fontSize = "0.8em";
                style.color = "#ddd";

            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                style.color = "#555";

            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        },
        
        onAfterCompute: function(){
            Log.write("done");
        }
    });

    //load JSON data.
    ht.loadJSON(json);
    
    //Add some edges to transform the
    //tree into a graph (just for fun).
    //ht.graph.addAdjacence({
    //    'id': '236585_30'
    //}, {
    //    'id': '236583_23'
    //}, null);
    //ht.graph.addAdjacence({
    //    'id': '236585_30'
    //}, {
    //    'id': '4619_46'
    //}, null);
    
    //Compute positions and plot.
    ht.refresh();
    //end
    
    //Global Options
    //Define a function that returns the selected duration
    function getDuration() {
        var sduration = document.getElementById('select-duration');
        var sdindex = sduration.selectedIndex;
        return parseInt(sduration.options[sdindex].text);
    };
    //Define a function that returns the selected fps
    function getFPS() {
        var fpstype = document.getElementById('select-fps');
        var fpsindex = fpstype.selectedIndex;
        return parseInt(fpstype.options[fpsindex].text);
    };
    //Define a function that returns whether you have to
    //hide labels during the animation or not.
    function hideLabels() {
        return document.getElementById('hide-labels').checked;
    };

    //init handlers
    //Add event handlers to the right column controls.
    
    //Remove Nodes
    var button = $jit.id('remove-nodes');
    button.onclick = function() {
        //get animation type.
        var stype = $jit.id('select-type-remove-nodes');
        var sindex = stype.selectedIndex;
        var type = stype.options[sindex].text;
        //get node ids to be removed.
        var n = ht.graph.getNode('306208_1');
        if(!n) return;
        var subnodes = n.getSubnodes(0);
        var map = [];
        for (var i = 0; i < subnodes.length; i++) {
            map.push(subnodes[i].id);
        }
        //perform node-removing animation.
        ht.op.removeNode(map.reverse(), {
            type: type,
            duration: getDuration(),
            fps: getFPS(),
            hideLabels:hideLabels()
        });
    };

    //Remove edges
    button = $jit.id('remove-edges');
    button.onclick = function() {
        //get animation type.
        var stype = $jit.id('select-type-remove-edges');
        var sindex = stype.selectedIndex;
        var type = stype.options[sindex].text;
        //perform edge removing animation.
        ht.op.removeEdge([['236585_30', "190_0"], ['236585_30', '4619_46']], {
            type: type,
            duration: getDuration(),
            fps: getFPS(),
            hideLabels: hideLabels()
        });
    };

    //Add a Graph (Sum)
    button = $jit.id('sum');
    button.onclick = function(){
        //create json graph to add.
        var trueGraph = eval('(' + graph + ')');        
        //get animation type.
        var stype = $jit.id('select-type-sum');
        var sindex = stype.selectedIndex;
        var type = stype.options[sindex].text;
        //perform sum animation.
        ht.op.sum(trueGraph, {
            type: type,
            fps: getFPS(),
            duration: getDuration(),
            hideLabels: hideLabels(),
            onComplete: function(){
                Log.write("sum complete!");
            }
        });
    };

    //Morph
    button = $jit.id('morph');
    button.onclick = function(){
        //create json graph to morph to.
        var trueGraph = eval('(' + graph + ')');        
        //get animation type.
        var stype = $jit.id('select-type-morph');
        var sindex = stype.selectedIndex;
        var type = stype.options[sindex].text;
        //perform morphing animation.
        ht.op.morph(trueGraph, {
            type: type,
            fps: getFPS(),
            duration: getDuration(),
            hideLabels: hideLabels(),
            onComplete: function(){
                Log.write("morph complete!");
            }
        });
    };
    //end
}

