var grid = d3.select("div").append("svg").attr("width",2000).attr("height",1000);

//grid.append("rect").attr("x",10).attr("y",10).attr("width",50).attr("height", 50).attr("fill","red");
    

document.getElementById("container").addEventListener("mouseover", function(e){
    //grid.append("rect").attr("width",50).attr("height", 50).attr("fill","black");
    grid.append("circle")
   .attr("cx", e.clientX)
   .attr("cy", e.clientY)
   .attr("r", 40)
   .attr("fill", "rgb("+Math.floor(Math.random() * (10))+","+e.clientY+","+(e.clientX*(2))+")")
    console.log(e.clientX+" and "+e.clientY);
    
})
