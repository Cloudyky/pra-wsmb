var brandlist = ["Porsche", "Volkswagen", "Audi", "BMW"];
var totalSales = 0;
var clientServed = 0;

function newClient() {
	var preference = Math.floor(Math.random() * 4);
	var time = Math.floor(Math.random() * 10000) + 1;
	var client = Math.floor(Math.random() * 10) + 1;

	if ($(".client-queue-list .client").length < 10) {
		$(".client-queue-list").append(`
			<div class="client" id="client-${client}">
				<div class="client-name">Customer for ${brandlist[preference]}</div>
				<img src="images/client_${client}.jpg" alt="client-img">
			</div>
		`);

		$("#client-queue-totals").text($(".client-queue-list .client").length);
	}

	setTimeout(() => newClient(), time);
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
		Porsche: { count: 4, price: 65000000 },
		Volkswagen: { count: 6, price: 18000000 },
		Audi: { count: 5, price: 30000000 },
		BMW: { count: 3, price: 25000000 }
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
						<span class="car-price">RM ${brands[brand].price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
					</div>
				</div>
			`);
		}
	}
}

$(document).ready(function () {
	newClient();
	car();
	generateCars();

	// Make customers draggable
	$(document).on("mouseenter", ".client", function () {
		$(this).draggable({
			revert: "invalid",
			helper: "clone",
			start: function () {
				$(this).css("opacity", 0.5);
			},
			stop: function () {
				$(this).css("opacity", 1);
			}
		});
	});

	// Make client-place droppable
	$(document).on("mouseenter", ".client-place", function () {
		$(this).droppable({
			accept: ".client",
			drop: function (event, ui) {
				let client = ui.draggable;
				let priceText = $(this).siblings(".car-price").text();
				let price = parseFloat(priceText.replace("RM", "").replace(/,/g, "").trim());

				$(this).html(client.clone().removeClass("client").css({
					width: "100%",
					height: "100%"
				}));

				client.remove();

				clientServed++;
				totalSales += price;

				$("#served-client-count").text(clientServed);
				$("#sales-total").text(totalSales.toLocaleString(undefined, { minimumFractionDigits: 2 }));
				$("#client-queue-totals").text($(".client-queue-list .client").length);
			}
		});
	});
});
