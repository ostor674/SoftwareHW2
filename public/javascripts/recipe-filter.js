document.addEventListener("DOMContentLoaded", function () {
    const ingredientFilter = document.getElementById("ingredient-filter");

    ingredientFilter.addEventListener("change", function () {
        const selectedIngredient = this.value.toLowerCase().trim();

        document.querySelectorAll(".recipe-box").forEach(recipe => {
            const ingredientItems = recipe.querySelectorAll(".ingredients ol li");

            // Extract ingredient list from recipe
            const ingredientsArray = Array.from(ingredientItems).map(li => li.textContent.toLowerCase().trim());

            // Show or hide based on ingredient selection
            if (!selectedIngredient || ingredientsArray.includes(selectedIngredient)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    });
});
