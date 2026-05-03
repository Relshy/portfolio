const detailsButton = document.querySelector("[data-more-details]");
const contactNode = document.querySelector("[data-contact]");

if (detailsButton && contactNode) {
  detailsButton.addEventListener("click", () => {
    const expanded = contactNode.dataset.expanded === "true";
    contactNode.dataset.expanded = String(!expanded);
    detailsButton.setAttribute("aria-expanded", String(!expanded));
  });
}
