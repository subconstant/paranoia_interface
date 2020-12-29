function delay_link (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}

function typer(){
	let i = 0;
	let speed = 20;
	let txt = `Aici va intra descrierea hihi`;

	function write() {
		console.log('running write');
		if (i < txt.length) {
			document.getElementById("desc").innerHTML += txt.charAt(i);
			i++;
			setTimeout(write, speed);
		}

	}

	write();
}

//PG 1
function unartepano(){
	pannellum.viewer('vrview', {
		"type": "equirectangular",
		"panorama": "../../assetz/pano.jpg",
		"autoLoad": true,
		"autoRotate":"-1",
		"showControls":false,
		"showZoomCtrl":false,
		"compass":true,
		"hfov":"150",
		"yaw":"160"
	});
};

//PG 2
function ytmix(){
	console.log('loading yt embeds...');

	//items[items.length * Math.random() | 0]

	var timeArray = Array(2000,4000,6000,8000,10000,12000,14000,16000,18000);

	var playlist = Array (
		'RI0saKrfQAo', // crazy loop
		'lQJFP1INGxs', // m manson chaos
		'-6G6AW7oApA', // molchat doma volny
		'Xs6m9HeWXck', // swans oxygen (live la p4k)
		'Coz0TmK2ZIg', // blu jay way
		'1U541ZhYX50', // you and whose army tiananmen edit
		'pGzrL8J0t-c', // merz minus zero
		'U0rOKskwrzI', // shame music
		'uiYmb1xkND4', // zvezdy,
		'zcSlcNfThUA', // ttim tulips
		'Rr8ljRgcJNM', // rammst amerika
		'VJe6LLoGgR8', // rusty cage family-friendly noose song
		'cl3B_FTDKD0', // t.heads and she was
		'G-7U-FDql1A', // gorillaz pacman
		'3KbtS-3wA5g', // black sab solitude
		'AZKcl4-tcuo', // life on mars
		'zuuObGsB0No', // love will tear us
		'cUPJD7sZ274', // white stripes apple blossom
		'QzcvRDWgRIE', // butterfly
		'BD0zBJ8pi-0', // baietii
		'p3G5IXn0K7A', // hampster dance
		'Jm-upHSP9KU', // oingo boingo weird science
		'qLrnkK2YEcE', // avalanch frontier psych
		'OYhQVrXBgxU', // kraftwerk tele call
		'uLP8rFrL1W0', // kg crumbling castle
		'Z0oyGH7P3Uo', // deja vu amv
		'-CwD6iPwQeA' //lrd but i was different
	);

	for (i = 0; i < 6; i++) {
		let time = timeArray[timeArray.length * Math.random() | 0];
		let embed = Math.floor((Math.random() * 9) + 1);

		let video = playlist[playlist.length * Math.random() | 0];
		playlist = playlist.filter(item => item !== video)

  		setTimeout(function() { loadEmbed( embed , video ); } , time);
	}

	function loadEmbed(n, videoId){
		let player;
		player = new YT.Player('player-' + n, {
			width: '250',
			height: '150',
		  	videoId: videoId,
		  	events: {
		    	'onReady': onPlayerReady
		  	}
		});
	};

	function onPlayerReady(event) {
		event.target.setVolume(30);
		event.target.playVideo();
	}

}

// PG 3
var run = true;
var MEME = document.getElementById('meme');
var nrm = 0;
var all = 50;
var loop;

function epilepsy() {
	nrm++;
	
	if ( run ) { MEME.src = "../../assetz/meme/" + nrm +".jpg"; }

	if ( nrm == all ){ nrm = 0; }
	loop = setTimeout(epilepsy, 100);
}

function m_play() { console.log('play'); run = true 	}
function m_stop() { console.log('stop'); run = false }





