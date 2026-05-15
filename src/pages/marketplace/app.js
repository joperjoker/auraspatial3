/**
 * JavaScript for the Aura Spatial Marketplace.
 * This script manages product data, filtering mechanisms, and procurement actions.
 */

/* Dataset representing curated furniture items for the Marketplace */
const products = [
    {
        identifier: 1,
        name: "Sloan Sectional Sofa",
        material: "Performance Linen Blend",
        price: "$2,499",
        category: "sofas",
        theme: "mid-century",
        imageAddress: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 2,
        name: "Hana Lounge Chair",
        material: "Solid Ash Wood and Bouclé",
        price: "$899",
        category: "chairs",
        theme: "japandi",
        imageAddress: "https://images.unsplash.com/photo-1592078615290-033ee584e277?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 3,
        name: "Malmo Dining Table",
        material: "Natural Oak Veneer",
        price: "$1,200",
        category: "tables",
        theme: "mid-century",
        imageAddress: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 4,
        name: "Heirloom Storage Cabinet",
        material: "Recycled Teak Wood",
        price: "$1,850",
        category: "storage",
        theme: "biophilic",
        imageAddress: "https://images.unsplash.com/photo-1595113314411-9a762244a156?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 5,
        name: "Kyoto Platform Bed",
        material: "Walnut and Woven Cane",
        price: "$1,600",
        category: "beds",
        theme: "biophilic",
        imageAddress: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 6,
        name: "Heritage Armchair",
        material: "Top Grain Leather",
        price: "$1,100",
        category: "chairs",
        theme: "industrial",
        imageAddress: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 7,
        name: "Nordic Sideboard",
        material: "White Oak and Metal",
        price: "$950",
        category: "storage",
        theme: "industrial",
        imageAddress: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 8,
        name: "Zenith Coffee Table",
        material: "Travertine Stone",
        price: "$750",
        category: "tables",
        theme: "japandi",
        imageAddress: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 9,
        name: "Elysian Oak Bed",
        material: "Solid White Oak",
        price: "$2,100",
        category: "beds",
        theme: "japandi",
        imageAddress: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
    },
    {
        identifier: 10,
        name: "Bastion Bookshelf",
        material: "Dark Walnut and Steel",
        price: "$1,450",
        category: "storage",
        theme: "mid-century",
        imageAddress: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
    }
];

/* State to track currently selected filters */
let activeCategory = "all";
let activeTheme = "industrial";

/**
 * Initialize the Marketplace experience.
 * Sets up event listeners and performs the initial product render.
 */
function initializeMarketplace() {
    const categoryButtons = document.querySelectorAll('#category-filters .filter-button');
    const themeButtons = document.querySelectorAll('#theme-filters .filter-button');

    /* Theme switching interaction */
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.getAttribute('data-theme');
            
            /* Apply theme to the entire document */
            document.documentElement.setAttribute('data-theme', selectedTheme);
            
            /* Update button User Interface active state */
            themeButtons.forEach(buttonElement => buttonElement.classList.remove('active'));
            button.classList.add('active');
            
            activeTheme = selectedTheme;
            updateDisplayGrid();
        });
    });

    /* Category filter interaction */
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(buttonElement => buttonElement.classList.remove('active'));
            button.classList.add('active');
            activeCategory = button.getAttribute('data-category');
            updateDisplayGrid();
        });
    });

    /* Initial render of all products */
    updateDisplayGrid();
}

/**
 * Updates the product grid based on the active category and theme filters.
 */
function updateDisplayGrid() {
    const gridContainer = document.getElementById('product-grid');
    gridContainer.innerHTML = '';

    /* Filter logic to determine which items to display */
    const filteredItems = products.filter(item => {
        const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
        const themeMatch = activeTheme === 'all' || item.theme === activeTheme;
        return categoryMatch && themeMatch;
    });

    /* Construct Hypertext Markup Language for each product card */
    filteredItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="image-container">
                <img 
                    src="${item.imageAddress}" 
                    alt="${item.name} in ${item.material}" 
                    class="product-image"
                    width="400"
                    height="500"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div class="image-placeholder" style="display: none;">
                    <span>${item.category}</span>
                </div>
            </div>
            <div class="product-details">
                <span class="product-material">${item.material}</span>
                <h2 class="product-name">${item.name}</h2>
                <div class="product-price">${item.price}</div>
                <button class="purchase-button" onclick="handleProcurement('${item.name}')">Purchase Item</button>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

/**
 * Handles the procurement action when a user clicks the purchase button.
 * Logs the action and provides a visual notification to the user.
 * @param {string} productName - The name of the selected furniture item.
 */
window.handleProcurement = function(productName) {
    /* Logging for order placement as requested */
    console.log(`Procurement Request Initiated: ${productName}`);
    
    /* Display a temporary notification indicating the purchase intent */
    const notification = document.getElementById('procurement-notification');
    notification.innerText = `${productName} added to procurement list.`;
    notification.classList.remove('hidden');

    /* Hide the notification after a brief period */
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
};

/* Start the application logic once the User Interface is fully loaded */
document.addEventListener('DOMContentLoaded', initializeMarketplace);


