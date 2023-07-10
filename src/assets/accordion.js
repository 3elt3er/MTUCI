const faqs = document.querySelectorAll(".collapsible");

faqs.forEach(collapsible => {
    collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");
    })
})

