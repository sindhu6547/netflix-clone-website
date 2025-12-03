  const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const btn = item.querySelector(".faq-question");

        btn.addEventListener("click", () => {
            item.classList.toggle("open");

            const answer = item.querySelector(".faq-answer");
            const icon = item.querySelector(".faq-icon");
            
            if (item.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "×";
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            }
        });
    });