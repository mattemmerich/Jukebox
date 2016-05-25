 
var audio;

//Hide Pause Button
$('#Pause').hide();

//Initialize Audio
initAudio($('#playlist li:first-child'));

//Initializer Function
function Jukebox(){
		var song = element.attr('#song');
		var title = element.text();
		var artist = element.attr('#artist');

		//Audio Object
		audio = new Audio('mp3/'+song\+'.mp3');

		if(!audio.currentTime){
		$('#duration').html('0.00');
		}

		$('#audio-player.title').text(title);
		$('#audio-player.artist').text(artist);

	}

	//Ply Button
	$('#ply').click(function(){
		audio.play();
		$('#ply').hide();
		$('#pause').show();
		$('#duration.').fadeIn(1000);
		showDuration();

	});

	//Pause Button
	$('#pause').click(function(){
		audio.pause();
		$('#pause').hide();
		$('#ply').show();

	});


	//Stp Button
	$('#stp').click(function(){
		audio.pause();
		audio.currentTime = 0;
		$('#pause').hide();
		$('#ply').show();
		$(duration).fadeOut(1000);

	});


	//Time Duration
	function showDuration(){
		$(audio).bind('timeupdate',function(){
			//Get Hours & Minutes
			var s = parseInt(audio.currentTime % 60);
			var m = parseInt(audio.currentTime/ 60) % 60;
			//Add 0 id less than 10
			if(a<10) {
				s = '0' + s;
			}('#duration').html(m +'.'+ s);
			var value = 0;
			if(audio.currentTime >0) {
					value = Math.floor((100/audio.duration))	}
			
	});


};

});
			