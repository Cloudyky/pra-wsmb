var brandlist = new Array("Porsche","Volkswagen","Audi","BMW");

function newClient() {
	var preference = Math.floor((Math.random() * 4));
	var time = Math.floor((Math.random() * 10000) + 1);
	var client = Math.floor((Math.random() * 10) + 1);

	// limit kan client max 10 je 
	if ($(".client-queue-list .client").length < 10) {
		$(".client-queue-list").append(
			`
				<div class="client client-${client}">
					<div class="client-name">Customer for ${brandlist[preference]}</div>
					<div class="client-img">
						<img src="images/client_${client}.jpg" alt="client-img" srcset="">
					</div>
				</div>
			`
		);

		$("#client-queue-totals").text($(".client-queue-list .client").length);
	}

	setTimeout(function() { 
		newClient(); 
	}, time);
}

function car() {
	var carAvailable = {
		Porsche: 4,
		Volkswagen: 6,
		Audi: 5,
		BMW: 3
	};

	$(".available-porche").text(carAvailable["Porsche"]);
	$(".available-volkswagen").text(carAvailable["Volkswagen"]);
	$(".available-audi").text(carAvailable["Audi"]);
	$(".available-bmw").text(carAvailable["BMW"]);
}

function generateCars() {
	const brands = {
		Porsche: {
			count: 4,
			price: 65000000
		},
		Volkswagen: {
			count: 6,
			price: 18000000
		},
		Audi: {
			count: 5,
			price: 30000000
		},
		BMW: {
			count: 3,
			price: 25000000
		}
	};

	for (let brand in brands) {
		let brandLower = brand.toLowerCase();
		let container = $(`.${brandLower} .brand-section`);

		for (let i = 1; i <= brands[brand].count; i++) {
			container.append(`
				<div class="car">
					<img src="images/${brand}_${i}.jpg" alt="" class="car-img">
					<div class="info">
						<div class="client-place">Put customer here</div>
						<span class="car-price">RM ${brands[brand].price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
					</div>
				</div>
			`);
		}
	}

	$(".available-porche").text(carAvailable["Porsche"]);
	$(".available-volkswagen").text(carAvailable["Volkswagen"]);
	$(".available-audi").text(carAvailable["Audi"]);
	$(".available-bmw").text(carAvailable["BMW"]);
}



$("document").ready(function(e) {
	// alert("Welcome to the car dealer!");
	newClient();
	car();
	generateCars();
});
