const categoryButtons = document.querySelectorAll("#category-nav button");

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        categoryButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".post").forEach((post) => {
            const shouldShow =
                selectedCategory === "All" ||
                post.dataset.category === selectedCategory;
            post.hidden = !shouldShow;
        });
    });
});
