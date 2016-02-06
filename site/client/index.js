if(Meteor.isClient) {
	Template.index.onRendered(function () {
		$("#leftarrow").click( function () {
			var rotation = $(".heart").get(0).getAttribute("rotation");
			rotation.y -= 30;
			$(".heart").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});

		$("#rightarrow").click( function () {
			var rotation = $(".heart").get(0).getAttribute("rotation");
			rotation.y += 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
		$("#leftarrow").click( function () {
			console.log("Action triggered");
			var rotation = $(".organ").get(0).getAttribute("rotation");
			rotation.y -= 30;
			$(".organ").get(0).setAttribute("rotation", String(rotation.x) + " " + String(rotation.y) +
				" " + String(rotation.z));
		});
	});
}
