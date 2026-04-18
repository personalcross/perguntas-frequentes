const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");

        const icon = item.querySelector(".faq-icon");
        icon.textContent = item.classList.contains("active") ? ">" : "<";
    });
});