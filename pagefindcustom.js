document.addEventListener("DOMContentLoaded", function () {
    // Load Pagefind script dynamically
    const script = document.createElement("script");
    script.src = "/docs/pagefind/pagefind.js";
    script.defer = true;
    script.onload = () => {
        const searchButton = document.getElementById("pagefind-search-button");

        // Create search container if not present
        let searchContainer = document.getElementById("search");
        if (!searchContainer) {
            searchContainer = document.createElement("div");
            searchContainer.id = "search";
            searchContainer.className = "pagefind-ui";
            searchContainer.style.display = "none"; // Hide initially
            document.body.appendChild(searchContainer);
        }

        let pagefindInitialized = false;

        // Attach click event to search button
        if (searchButton) {
            searchButton.addEventListener("click", () => {
                searchContainer.style.display = "block";

                if (!pagefindInitialized) {
                    new PagefindUI({ element: "#search" });
                    pagefindInitialized = true;
                }
            });
        }
    };

    document.body.appendChild(script);
});
