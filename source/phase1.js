$(function(){
	hello()
		.then(startPhase1)
		.then(setTimeout('effect1()', 3300))
		.then(setTimeout('effect2()', 7300))
		.then(setTimeout('showRus()', 7400))
		.then(setTimeout('showRus2()', 7400))
		.then(setTimeout('showRus3()', 7800))
		.then(setTimeout('showRus4()', 7800))
		.then(setTimeout('showRus5()', 8100))
		.then(setTimeout('friend()', 11000));
});


const hello = ()=> {
	let d = new $.Deferred();
	$('#greet').animate({
		'top': '-=50px'
	}, 150, function(){
		d.resolve();
	}).animate({
		'top': '+=50px'
	}, 150, 'easeOutBack', function(){
		d.resolve();
	});

	return d.promise();
}

const startPhase1 = ()=>{
	let d = new $.Deferred();
	$('#greet').hide(3000);
	d.resolve();

	return d.promise();
}

const effect1 = ()=>{
	let d = new $.Deferred();
	for(let i=0; i<20; i++){
		$('.effect1').fadeIn(80).fadeOut(80);
	}
	d.resolve();

	return d.promise();
}

const effect2 = ()=>{
	let d = new $.Deferred();
	$('.effect2').show(10).hide(10);
	d.resolve();

	return d.promise();
}

const showRus = ()=>{
	let d = new $.Deferred();
	$('.effect3, #greet2').show();
	d.resolve();

	return d.promise();
}

const showRus2 = ()=>{
	let d = new $.Deferred();
	$('.effect3').animate({
		'left': '+=1400px'
	}, 400, function(){
		d.resolve();
	});

	return d.promise();
}

const showRus3 = ()=>{
	let d = new $.Deferred();
	$('.effect3').hide();
	d.resolve();

	return d.promise();
}

const showRus4 = ()=>{
	let d = $.Deferred();
	$('#showRus').show(3000);
	d.resolve();

	return d.promise();
}

const showRus5 = ()=>{
	let d = $.Deferred();
	for(let i=0; i<20; i++){
		$('#showRus').animate({
			'top': '-=20px'
		}, 800, function(){
			d.resolve();
		}).animate({
			'top': '+=20px'
		}, 800, function(){
			d.resolve();
		});
	}
	
	return d.promise();
}

const friend = ()=>{
	let d = $.Deferred();
	$('.friend').fadeIn();
	d.resolve();

	return d.promise();
}
