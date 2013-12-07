/**

Dynamic calculate the link distance in force layout based on number of children for each node
minimum distance is 120
*/

var force = d3.layout.force().linkDistance(
	
	function(link){
	var length=120;
	if(nodes[link.target.index].children==null||nodes[link.source.index].children==null){
	return length;
	}
	
	//length=nodes[link.target.index].children.length;
	
	length=(nodes[link.target.index].children.length+nodes[link.source.index].children.length)*5;
	
	if(length<120){
	length=120;
	}
	
	
	return length;
	});
