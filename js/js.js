if ( window.innerWidth < 1250 ) {
	alert("Paranoia Interface was built to be seen on large computer screens. Please visit the site on a larger display or use a bigger browser window. Thank you.")
}

function delay_title (URL) {
    setTimeout( function() { window.location = URL }, 40000 );
}

function delay_link (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}

function play(id){
	let elem = document.getElementById(id);
	elem.volume = 0.25;
	elem.load();
	elem.play();
}

function stop(id){
	let elem = document.getElementById(id);
	elem.pause();
}

function c_bg(id){
	document.getElementById(id).style.position = "fixed";
	document.getElementById(id).style.top = "0";
	document.getElementById(id).style.left = "0";
	document.getElementById(id).style.width = "100%";
	document.getElementById(id).style.height = "100%";
	document.body.style.cursor = 'none';
}




function move_label(id){
	var e = window.event;
	var x = e.clientX; 
    var y = e.clientY; 
    document.getElementById(id).style.left = x + "px";
    document.getElementById(id).style.top = y + "px";
}



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





function ytmix(){

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
		'QzSM3pRtgcM', // -iare friends electric
		'xKcbYUwmmlE', // slipknot vermilion
		'ktMMp08hW6w', // bojack
		'yxSixqGOUjQ', // bn2me
		'-CwD6iPwQeA' //lrd but i was different
	);

	for (i = 0; i < 6; i++) {
		let time = timeArray[timeArray.length * Math.random() | 0];
		let embed = Math.floor((Math.random() * 9) + 1);

		let video = playlist[playlist.length * Math.random() | 0];
		playlist = playlist.filter(item => item !== video);

  		setTimeout(function() { load_embed( embed , video ); } , time);
	}

	function load_embed(n, videoId){
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




var run = true;
var MEME = document.getElementById('meme');
var nrm = 0;
var all = 71;
var loop;

function epilepsy() {
	nrm++;
	
	if ( run ) { MEME.src = "../../assetz/meme/" + nrm +".jpg"; }

	if ( nrm == all ){ nrm = 0; }
	loop = setTimeout(epilepsy, 50);
}

function m_play() { console.log('play'); run = true 	}
function m_stop() { console.log('stop'); run = false }




function bacovia( ){
	document.getElementById("poezie").innerHTML = "";
	var words = bacovia_text.split("\n");
	var poezie = "";

	function vers(){
		let line = '';
		for ( i = 0; i < 5; i++ ) {
			line += words[words.length * Math.random() | 0] + " ";
		};
		return line;
	}

	function strofa(){
		let versuri = (Math.random() * 6) + 3;
		for ( x = 0; x < versuri; x++ ) {
			let line = vers();
			poezie += line + '<br>';
		}

	}

	function gen_poem(){
		//let strofe = (Math.random() * 3) + 1;
		let strofe = 50;
		for ( z = 0; z < strofe; z++ ) {
			strofa();
			poezie += '<br><br>';
		};
		document.getElementById("poezie").innerHTML += poezie;
	}

	gen_poem();
}




function insomnia(){	
}





function tarot(){
	var order, picks;

	clear();
	predict();

	function predict(){
		order = shuffle([1,2,3,4,5]);
		picks = shuffle([...Array(22).keys()].splice(1));
		setTimeout(shift_predict, 1000);
	}

	function clear(){
		for ( i = 1; i < 6; i++ ) {
			let id = "t" + i;
			document.getElementById(id).innerHTML = "";
		}
	}

	function shift_predict(){
		if ( order.length == 0 ) {
			//setTimeout(clear, 3000);
			//setTimeout(predict,3000);
			//doNothing(lol)
		} else {
			let card = "t" + order[0];

			let elem = "<img id='t-img' src='../../assetz/tarot/" + picks[0] + ".png' />";
			
			document.getElementById(card).innerHTML = elem;
			play('flip');

			order.shift();
			picks.shift();

			setTimeout(shift_predict, 1000);
		};
	}
}

//Fisher-Yates shuffle thx to stack overflow
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}


function goho_m(){
	window.location = "../../home.html";
}

function displace(){
	let wrap = document.getElementById('fuego-wrapper');
	let svg = document.getElementById('fuego-svg');
	let img = document.getElementById('fuego-img');
	let d_map = document.getElementById('displacement-map');

	d_map.scale.baseVal += 0.2;
	svg.width.baseVal.value += 1.1;
	svg.height.baseVal.value += 1.1;
	img.width.baseVal.value += 1;
	img.height.baseVal.value += 1;

	if ( svg.width.baseVal.value > window.innerWidth ){
	//wrap.style.top = (parseFloat(wrap.style.top) - 0.04 ) + 'vh'; 
	//wrap.style.left = (parseFloat(wrap.style.left) - 0.032 ) + 'vw'; 
		 svg.style.marginLeft = ( parseFloat ( svg.style.marginLeft ) - 0.5 ) + 'px';
		 svg.style.marginTop = ( parseFloat ( svg.style.marginTop ) + 0.5 ) + 'px';
	}

	//console.log(svg.width.baseVal);
	//console.log(wrap.width);
	//console.log(svg.style.marginTop);
	//console.log(getComputedStyle(svg).getPropertyValue("margin-left"));
	setTimeout(displace, 150);	
}