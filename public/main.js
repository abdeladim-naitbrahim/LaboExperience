let video;
let editore=false;
function doLoad() {
video=document.getElementById('video');
window.requestAnimationFrame(animvid);
video.play();
/*video.addEventListener
('timeupdate', (event) =>{
	console.log(video.currentTime);
	if(video.currentTime>=timearray[curentindex])
	{video.pause();
video.currentTime==timearray[curentindex]+0.0001;
curentindex++;
if(curentindex>=maxindex)
	win()
}});
else {
      window.requestAnimationFrame(onTimeUpdate);*/
  };
let maxindex=6;
 let curentindex=0;
 let timearray=[ 0.705074, 3.513439, 5.529555, 9.834, 15.246 ];
 let shaparayaray=[
[
  {
    "x": 0.14158636026686433,
    "y": 0.8522167487684729
  },
  {
    "x": 0.10896960711638251,
    "y": 0.7274220032840722
  },
  {
    "x": 0.10896960711638251,
    "y": 0.7274220032840722
  },
  {
    "x": 0.10748702742772424,
    "y": 0.5730706075533661
  },
  {
    "x": 0.13862120088954782,
    "y": 0.5566502463054187
  },
  {
    "x": 0.1994069681245367,
    "y": 0.5451559934318555
  },
  {
    "x": 0.2765011119347665,
    "y": 0.5566502463054187
  },
  {
    "x": 0.2676056338028169,
    "y": 0.6157635467980296
  },
  {
    "x": 0.26612305411415865,
    "y": 0.8407224958949097
  },
  {
    "x": 0.18606375092661231,
    "y": 0.8669950738916257
  },
  {
    "x": 0.18606375092661231,
    "y": 0.8669950738916257
  },
  {
    "x": 0.5685693106004448,
    "y": 0.8752052545155994
  },
  {
    "x": 0.5700518902891031,
    "y": 0.7684729064039408
  },
  {
    "x": 0.5937731653076352,
    "y": 0.7569786535303776
  },
  {
    "x": 0.6026686434395849,
    "y": 0.7536945812807881
  },
  {
    "x": 0.6026686434395849,
    "y": 0.7536945812807881
  },
  {
    "x": 0.625648628613788,
    "y": 0.7733990147783252
  },
  {
    "x": 0.6234247590808006,
    "y": 0.8784893267651889
  },
  {
    "x": 0.5789473684210527,
    "y": 0.8801313628899836
  },
  {
    "x": 0.5789473684210527,
    "y": 0.8801313628899836
  }
]
,
[
  {
    "x": 0.5707931801334322,
    "y": 0.8735632183908046
  },
  {
    "x": 0.5707931801334322,
    "y": 0.7684729064039408
  },
  {
    "x": 0.5967383246849518,
    "y": 0.7323481116584565
  },
  {
    "x": 0.5967383246849518,
    "y": 0.7323481116584565
  },
  {
    "x": 0.6048925129725723,
    "y": 0.7586206896551724
  },
  {
    "x": 0.6263899184581171,
    "y": 0.7717569786535303
  },
  {
    "x": 0.6249073387694588,
    "y": 0.8768472906403941
  },
  {
    "x": 0.5982209043736101,
    "y": 0.8899835796387521
  },
  {
    "x": 0.5767234988880652,
    "y": 0.8801313628899836
  }
],
[
  {
    "x": 0.7279466271312083,
    "y": 0.9737274220032841
  },
  {
    "x": 0.5581912527798369,
    "y": 0.9458128078817734
  },
  {
    "x": 0.5581912527798369,
    "y": 0.9458128078817734
  },
  {
    "x": 0.5626389918458117,
    "y": 0.9310344827586207
  },
  {
    "x": 0.5767234988880652,
    "y": 0.9376026272577996
  },
  {
    "x": 0.7294292068198666,
    "y": 0.9622331691297209
  }
],
[
  {
    "x": 0.653817642698295,
    "y": 0.7783251231527094
  },
  {
    "x": 0.6553002223869533,
    "y": 0.5336617405582923
  },
  {
    "x": 0.7323943661971831,
    "y": 0.5188834154351396
  },
  {
    "x": 0.7323943661971831,
    "y": 0.5188834154351396
  },
  {
    "x": 0.7842846553002224,
    "y": 0.5385878489326765
  },
  {
    "x": 0.7842846553002224,
    "y": 0.5944170771756979
  },
  {
    "x": 0.7242401779095626,
    "y": 0.6338259441707718
  },
  {
    "x": 0.737583395107487,
    "y": 0.6633825944170771
  },
  {
    "x": 0.737583395107487,
    "y": 0.6633825944170771
  },
  {
    "x": 0.7664936990363233,
    "y": 0.8013136288998358
  },
  {
    "x": 0.7220163083765753,
    "y": 0.812807881773399
  }
]
];
 let shaprarray=[
  {
    "x": 0.2635697224281361,
    "y": 0.9751953788651035
  },
  {
    "x": 0.2635697224281361,
    "y": 0.91063540604825
  },
  {
    "x": 0.2545095132196689,
    "y": 0.91063540604825
  },
  {
    "x": 0.2545095132196689,
    "y": 0.8120965001698947
  },
  {
    "x": 0.2652170331933119,
    "y": 0.7985049269452938
  },
  {
    "x": 0.28169014084507044,
    "y": 0.7917091403329936
  },
  {
    "x": 0.2989869038794169,
    "y": 0.7985049269452938
  },
  {
    "x": 0.2965159377316531,
    "y": 0.8154943934760448
  },
  {
    "x": 0.2956922823490652,
    "y": 0.965001698946653
  }
];
    jQuery(function($) {
	 // console.log("yes");
    $("#video").click(function(event) {
		if(!editore && curentindex<=4)
		{let X,Y;
			var offset = $(this).offset();
        X = (event.pageX- offset.left)/$(this).width();
        Y = (event.pageY- offset.top)/$(this).height();
		//console.log({x:X,y:Y});
		if(ContainsPoint (shaparayaray[curentindex-1], {x:X,y:Y}))
		{
			window.requestAnimationFrame(animvid);
			console.log("play");
			document.getElementById('video').play(); //
			
		}
		}
    });
});
  function win()
  {
	  video.play();
	  showlement(menu);
	 console.log("Win"); 
  }
   function ContainsPoint (polyPoints, p)  { 
   //console.log(polyPoints);
   var j = polyPoints.length-1; 
   //console.log("j: ",j);
   var inside = false; 
   for (i = 0; i < polyPoints.length; j = i++) { 
      if ( ((polyPoints[i].y <= p.y && p.y < polyPoints[j].y) || (polyPoints[j].y <= p.y && p.y < polyPoints[i].y)) && 
         (p.x < (polyPoints[j].x - polyPoints[i].x) * (p.y - polyPoints[i].y) / (polyPoints[j].y - polyPoints[i].y) + polyPoints[i].x)) 
         inside = !inside; 
   } 
   return inside; 
}
  function animvid()
  {
	  if(video.currentTime>=timearray[curentindex])
	{video.pause();
video.currentTime==timearray[curentindex]+0.0001;
curentindex++;
if(curentindex>=5)
	win();}
else {
      window.requestAnimationFrame(animvid);
  };}
  
  
