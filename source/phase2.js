$(function(){
	$('.button1').click(function(){
		$('.phase1').hide();
		$('.phase2').show();
		moveIta()
			.then(setTimeout('moveGer()', 3950))
			.then(setTimeout('moveJap()', 7900))
			.then(setTimeout('moveIg()', 11850))
			.then(setTimeout('moveFra()', 16800))
			.then(setTimeout('moveChu()', 20750))
			.then(setTimeout('moveMeri()', 24700))
			.then(setTimeout('endPhase2()', 27700))
			.then(setTimeout('startPhase3()', 27700))
			.then(setTimeout('kolRus()', 32700))
			.then(setTimeout('endPhase3()', 35700))
			.then(setTimeout('startPhase4()', 36300))
			.then(setTimeout('endPhase4()', 37800));
	});
	$('.button2').click(function(){
		$(this).hide();
		$('.question').css({
			'font-size': '80px', 
			'font-weight': '800'
		});
	});
});



let imgUrl = 'url("image/back1.jpg")';

const backImage = (imgUrl)=>{
	$('.backImage').css({
		'background-image': imgUrl
	});
}


const effect5_1 = ()=>{
	$('.effect5').animate({
		'left': '+=1400px'
	}, 4000);
}

const effect5_2 = ()=>{
	$('.effect5').animate({
		'left': '-=1400px'
	}, 4000);
}

const effect5_3 = ()=>{
	$('.effect5').animate({
		'top': '+=300px',
	}, 4000);
}

const effect5_4 = ()=>{
	$('.effect5').animate({
		'left': '+=2000px'
	}, 4000);
}

const effect5_5 = ()=>{
	$('.effect5').css({
		'top': '0',
		'left': '0'
	});
	$('.effect5').animate({
		'left': '-=350px'
	}, 2000).animate({
		'left': '+=350px'
	}, 2000);
}

const effect5_6 = ()=>{
	$('.effect5').animate({
		'top': '-=400px'
	}, 4000);
}

const effect5_7 = ()=>{
	$('.effect5').hide();
}



const moveIta = ()=>{
	let d = new $.Deferred();
	$('#ita').fadeIn(1000).animate({
		'left': '+=800px'		
	}, 2000).fadeOut(1000);
	effect5_1();
	d.resolve();

	return d.promise();
}

const moveGer = ()=>{
	let d = new $.Deferred();
	$('#ger').fadeIn(1000).animate({
		'top': '+=300px',
		'left': '-=350px'		
	}, 2000).hide('puff', '', 1000);
	backImage('url("image/back2.jpg")');
	effect5_2();
	d.resolve();

	return d.promise();
}

const moveJap = ()=>{
	let d = new $.Deferred();
	$('#jap').show(2000).fadeOut(2000);
	backImage('url("image/back3.jpg")');
	effect5_3();
	d.resolve();

	return d.promise();
}

const moveIg = ()=>{
	let d = new $.Deferred();
	$('#ig').fadeIn(3000).css({
		'transform': 'rotateY(0deg)'	
	}).fadeOut(2000);
	backImage('url("image/back4.jpg")');
	effect5_4();
	d.resolve();

	return d.promise();
}

const moveFra = ()=>{
	let d = new $.Deferred();
	$('#fra').show('pulsate', '', 1000).fadeOut(3000);
	backImage('url("image/back5.jpg")');
	effect5_5();
	d.resolve();

	return d.promise();
}

const moveChu = ()=>{
	let d = new $.Deferred();
	$('#chu').show('bounce', '', 2000).fadeOut(2000);
	backImage('url("image/back6.jpg")');
	effect5_6();
	d.resolve();

	return d.promise();
}

const moveMeri = ()=>{
	let d = new $.Deferred();
	$('#meri').fadeIn(2000).hide('explode', '', 1000);
	backImage('url("image/back7.jpg")');
	effect5_7();
	d.resolve();

	return d.promise();
}

const endPhase2 = ()=>{
	let d = new $.Deferred();
	$('.phase2').hide();
	d.resolve();

	return d.promise();
}

const startPhase3 = ()=>{
	let d = new $.Deferred();
	$('.phase3').slideDown(5000);
	d.resolve();

	return d.promise();
}

const kolRus = ()=>{
	let d = new $.Deferred();
	$('#kolkol').hide();
	$('.kol2').show().hide('pulsate', '', 2000);
	d.resolve();

	return d.promise();
}

const endPhase3 = ()=>{
	let d = new $.Deferred();
	$('.phase3').hide();
	d.resolve();

	return d.promise();
}

const startPhase4 = ()=>{
	let d = new $.Deferred();
	$('.phase4').show();
	d.resolve();

	return d.promise();	
}

const endPhase4  = ()=>{
	let d = new $.Deferred();
	$('#end1, #end2').show('bounce', '', 1000);
	d.resolve();

	return d.promise();
}