document.addEventListener("DOMContentLoaded", function () {
    const funFacts = {
        "Salt": "Fun Fact! Salt was once used as currency!",
        "Pepper": "Fun Fact! Black pepper was so valuable in ancient times that it was called 'black gold.'",
        "Garlic": "Fun Fact! Garlic belongs to the onion family and has been used for over 5,000 years!",
        "Olive Oil": "Fun Fact! Ancient Greeks used olive oil as sunscreen!",
        "Lemon": "Fun Fact! A lemon tree can produce fruit all year round.",
        "Thyme": "Fun Fact! Thyme was used by ancient Egyptians for embalming.",
        "Basil": "Fun Fact! Basil is considered a symbol of love in Italy.",
        "Paprika": "Fun Fact! Paprika is made from ground bell peppers or chili peppers.",
        "Beef": "Fun Fact! Beef is the third most widely consumed meat in the world.",
        "Chicken": "Fun Fact! Chickens were domesticated over 8,000 years ago!",
        "Pork": "Fun Fact! Pigs are highly intelligent animals, similar to dogs.",
        "Buns": "Fun Fact! The hamburger bun was invented in 1916 by a fry cook named Walter Anderson.",
        "Barbecue Sauce": "Fun Fact! Barbecue sauce has been around since the 17th century!",
        "Taco Shells": "Fun Fact! The first tacos were invented by Mexican silver miners in the 18th century."
    };

    document.querySelectorAll(".ingredients li").forEach(li => {
        const ingredient = li.textContent.trim();
        if (funFacts[ingredient]) {
            // Create tooltip
            const tooltip = document.createElement("div");
            tooltip.className = "ingredient-tooltip";
            tooltip.textContent = funFacts[ingredient];
            document.body.appendChild(tooltip);

            // Show tooltip on hover
            li.addEventListener("mouseenter", function (event) {
                tooltip.style.display = "block";
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
            });

            // Move tooltip with cursor
            li.addEventListener("mousemove", function (event) {
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
            });

            // Hide tooltip when not hovering
            li.addEventListener("mouseleave", function () {
                tooltip.style.display = "none";
            });
        }
    });
});
