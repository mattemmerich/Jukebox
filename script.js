$(document).ready(function(){

	// this.skip =function(){
	// 	document.getElementById('source').();
	// }
	// this.back =function(){
	// 	document.getElementById('source').();
	// }
	// this.pause = function(){
	// 	document.getElementById('pause').();

	// }
		var sk = document.getElementById("#skip")
		var b = document.getElementById("#back")
		var time = document.getElementById("showDuration")
		var display = document.getElementById("display")
		var s = document.getElementById("song")
		var a = document.getElementById("artist")
		var d = document.getElementById("date")
		var idnum = 0



	//Hide Pause Button
	$('#pause').hide();
	// //Pause Button
	$('#pause').click(function(){
		console.log('pause button clicked')
		// myRadio = new Radio();
		myRadio.pause();
		$('#pause').hide();
		$('#play').show();

	});

	//Play Button
	$('#play').click(function(){
		console.log('play button clicked')
		// myRadio = new Radio();
		myRadio.play();
		$('#play').hide();
		$('#pause').show();
		$('#duration').fadeIn(1000);
	
	});

	$('#submit').click(function(){
		console.log('track submitted')
		myRadio.addTrack();
		
	});


	var Radio = function(){
		var i = 0;
		this.archive = [];
		// this.currentSong ='mp3/Atticus_Finch.mp3';
		var player = document.getElementById("music");

		this.play = function(){
			console.log('the track is playing');
			player.play();
			$('#song').text(this.archive[i].song
			$('#artist').text(this.archive[i].artist)
			$('#date').text(this.archive[i].date)
			// str.match(/(mp3\/)(\w+)(\.mp3)/)[2]

			// document.getElementById("#song").innerHTML this.archive[i].song
			// document.getElementById("#artist").innerHTML this.archive[i].artist
			// document.getElementById("#date").innerHTML this.archive[i].date
		};

		this.pause = function(){
			console.log('paused');
			player.pause();
		}
		
		this.back = function(){
			console.log('back');
			if(i == 0){
			 i = this.archive.length - 1;
			} else {
				i--;
			}
			 player.setAttribute("src", this.archive[i].song);
			 this.play();
		}

		this.skip =function(){
			console.log('skiped');

			if(i == this.archive.length-1){
			 i = 0
			} else {
				i++;
			}
			 player.setAttribute("src", this.archive[i].song);
			 this.play();


	
		}

		this.load=function(i){
			this.archive.push(i);
		}

		this.addTrack=function(i){
			Submit.apply(this, arguments)
			i = new Submit()
			this.archive.push(i)
			//thanks Andy!!!
	
	}

		

		

	};


	function Track(song, artist, date){
		this.song = song; 
		this.artist = artist;
		this.date = date;
	}


	function Submit(song, artist, date){
		this.song=document.getElementById("sub_url").value;
		this.artist = document.getElementById("sub_artist").value;
		this.date = document.getElementById("sub_song").value;
	}

	//Skip Button
	$('#skip').click(function(sk){
		myRadio.skip();
	});


	//Back Button
	$('#back').click(function(b){
		myRadio.back();
	});


// Time Duration
// 	function showDuration(){
// 		$(radio).bind('timeupdate',function(){
// 			//Get Hours & Minutes
// 			var s = parseInt(radio.currentTime % 60);
// 			var m = parseInt(radio.currentTime/ 60) % 60;
// 			//Add 0 id less than 10
// 			if(a<10) {
// 				s = '0' + s;
// 			}('duration').html(m +'.'+ s);
// 			var value = 0;
// 			if(radio.currentTime >0) {
// 					value = Math.floor((100/radio.duration))	}
			
// 	});





//Back Button
	// $('#back').click(function(b){
	// 	myRadio.back();
	// });

	zero = new Track("mp3/Wound.mp3", "Heavy Negatives", "09/??/2015")
	one = new Track("mp3/Manthem.mp3", "Bouncing Souls", "09/14/2010")
	two = new Track("mp3/Selfish_Schism.mp3", "Mankind?", "10/??/1991")
	three = new Track("mp3/Ugly_Bastards.mp3", "The Casulaties", "??/??/1991")
	four = new Track("mp3/Unknown_Title.mp3", "Death Mold", "11/06/2006")
	five = new Track("mp3/Shoot_People_Not_Dope.mp3", "Toxic Narcotic", "??/??/2004")




	

//loops structres...
//push...
//if/else control flow logic
//

	myRadio = new Radio();

	myRadio.load(zero);
	myRadio.load(one);
	myRadio.load(two);
	myRadio.load(three);
	myRadio.load(four);
	myRadio.load(five);


// $('#song').text(this.archive[i].song.match(/(mp3\/)(\w+)(\.mp3)/)[2])/////////LINE 63//////////////
});
