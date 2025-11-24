document.addEventListener("DOMContentLoaded", () => {
	const searchInput = document.getElementById("search-input");
	const cards = document.querySelectorAll(".card");

	searchInput.addEventListener("input", () => {
		const searchTerm = searchInput.value.toLowerCase();
		cards.forEach((card) => {
			const title = card.querySelector(".card-title").textContent.toLowerCase();
			if (title.includes(searchTerm)) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});
	});
});