const faqs = document.querySelectorAll(".collapsible-head");

faqs.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", () => {
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 20 + "px";
        }
        else {
            accordionBody.style.maxHeight = 0;
        }

    })

})

