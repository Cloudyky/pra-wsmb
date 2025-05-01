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

$("document").ready(function(e) {
	newClient();
});
