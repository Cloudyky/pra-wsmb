var brandlist = new Array("Porsche","Volkswagen","Audi","BMW");

function newClient() {
	var preference = Math.floor((Math.random() * 4));
	var time = Math.floor((Math.random() * 10000) + 1);
	var client = Math.floor((Math.random() * 10) + 1);

	// limit kan client max 10 je 
	if ($(".client-queue-list .client").length < 10) {
		$(".client-queue-list").append(
			`
				<div class="client client-${client}" id="client-${client}">
					<div class="client-name">Customer for ${brandlist[preference]}</div>
					<div class="client-img">
						<img src="images/client_${client}.jpg" alt="client-${client}" srcset="">
					</div>
				</div>
			`
		);

		$("#client-queue-totals").text($(".client-queue-list .client").length);
	}

	setTimeout(function () { newClient(); }, time);
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


$("document").ready(function(e) {
	// alert("Welcome to the car dealer!");
	newClient();
	car();
});
