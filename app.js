$(document).ready(function(){
	var unit="imperial";

	$.ajax({
		url:"https://api.openweathermap.org/data/2.5/weather?",
		type:"GET",
		dataType:"JSON",
		data:{
			q:"Brooklyn,US",
			units:"imperial",
			appid:"fe2c6efc3a65e12a9e394f5c70be2b59"
		},
		success:function(data){
			var theNumber=data.main.temp;
		// to make the initual value rounded 
			var integerd=theNumber.toFixed(0);
		// i did math i hope that's ok (couldn't figure out api unit toggle)
			var fahr=Math.round(data.main.temp);
	    	var cels=Math.round((fahr -32) * 5 / 9);

			$(".tempy").html(integerd);
			$(".weathy").html(data.weather[0].main);
			var weat = data.weather[0].main;
		// changes icon at top of screen to corresponding symbol
			if (weat=="Clear"){
				$("p").html("&#9728;");
			}
			else if (weat=="Clouds"){
				$("p").html("&#9729;");
			}
			else if (weat=="Rain"||weat=="Drizzle"){
				$("p").html("&#127783");
			}
			else if (weat=="Thunderstorm"){
				$("p").html("&#9928;");
			}
			else if (weat=="Snow"){
				$("p").html("&#127784");
			}
			else if(weat=="Atmosphere"){
				$("p").html("&#9926");
			}

			$("button").click(function(){
				if (unit=="imperial"){
					unit="metric";
					$(".unity").text("C");
					$(".tempy").text(cels);
				}
				else if(unit=="metric"){
					unit="imperial";
					$(".unity").text("F");
					$(".tempy").text(fahr);
				}
			});
		},

		error:function(data,textStatus,errorThrown){
			alert("error");
		},
	});
});