/*
  FRIEDAYS TALAVERA BRANCH WEBSITE

  Before publishing:
  1. Check the menu prices with the branch.
  2. Replace facebookPageUrl if the branch has a different official page.
  3. Confirm the branch address before publishing.
*/

const CONFIG = {
  facebookPageUrl: "https://www.facebook.com/share/1CFQBqySuD/",
  branchName: "Friedays - Talavera Branch"
};

/*
  MENU

  All menu prices below use the latest menu details provided.
  Half/whole options are separate choices in the cart.
*/

const MENU = [
  {
    id: "wings",
    name: "Chicken Wings",
    category: "Chicken",
    price: 59,
    emoji: "🍗",
    description: "Choose Buffalo, Honey Butter, Cheesy, or Creamy.",
    flavors: ["Buffalo", "Honey Butter", "Cheesy", "Creamy"]
  },
  {
    id: "boneless",
    name: "Boneless Chicken",
    category: "Chicken",
    price: 75,
    emoji: "🍗",
    description: "Choose Buffalo, Honey Butter, Cheesy, or Creamy.",
    flavors: ["Buffalo", "Honey Butter", "Cheesy", "Creamy"]
  },
  {
    id: "nuggets-gravy",
    name: "8pcs Nuggets with Gravy",
    category: "Snacks",
    price: 60,
    emoji: "🍗",
    description: "Eight pieces of nuggets served with gravy."
  },
  {
    id: "nuggets-fries",
    name: "8pcs Nuggets with Fries",
    category: "Snacks",
    price: 98,
    emoji: "🍟",
    description: "Eight pieces of nuggets served with fries."
  },
  {
    id: "cheesey-fries",
    name: "Cheesey Fries",
    category: "Snacks",
    price: 49,
    emoji: "🍟",
    description: "Crispy fries with cheesy goodness."
  },
  {
    id: "chick-n-fries",
    name: "Chick N' Fries",
    category: "Meals",
    price: 139,
    emoji: "🍗",
    description: "A satisfying chicken and fries favorite."
  },
  {
    id: "red-iced-tea",
    name: "Red Iced Tea",
    category: "Drinks",
    price: 25,
    emoji: "🥤",
    description: "A refreshing drink to pair with your meal."
  },
  {
    id: "coke",
    name: "Coke",
    category: "Drinks",
    price: 18,
    emoji: "🥤",
    description: "₱18 per serving."
  },
  {
    id: "royal",
    name: "Royal",
    category: "Drinks",
    price: 18,
    emoji: "🥤",
    description: "₱18 per serving."
  },
  {
    id: "sprite",
    name: "Sprite",
    category: "Drinks",
    price: 18,
    emoji: "🥤",
    description: "₱18 per serving."
  },
  {
    id: "water",
    name: "Water",
    category: "Drinks",
    price: 15,
    emoji: "💧",
    description: "₱15 per serving."
  },
  {
    id: "poppers",
    name: "Chicken Poppers",
    category: "Chicken",
    price: 69,
    emoji: "🍗",
    description: "Choose Cheesy, Creamy, or Gravy.",
    flavors: ["Cheesy", "Creamy", "Gravy"]
  },
  {
    id: "boneless-rice",
    name: "2 pcs Boneless Chicken with Rice",
    category: "Meals",
    price: 79,
    emoji: "🍱",
    description: "Two pieces of boneless chicken with rice."
  },
  {
    id: "boneless-rice-fries",
    name: "2 pcs Boneless Chicken with Rice and Fries",
    category: "Meals",
    price: 119,
    emoji: "🍱",
    description: "Two pieces of boneless chicken with rice and fries."
  },
  {
    id: "siomai",
    name: "3pcs Siomai",
    category: "Street Food",
    price: 35,
    emoji: "🥟",
    description: "Three pieces of siomai."
  },
  {
    id: "nuggets-3",
    name: "3pcs Nuggets",
    category: "Snacks",
    price: 35,
    emoji: "🍗",
    description: "Three pieces of nuggets."
  },

  /* STREET FOOD — HALF AND WHOLE OPTIONS */

  {
    id: "chicken-skin-half",
    name: "Chicken Skin - Half",
    category: "Street Food",
    price: 79,
    emoji: "🍢",
    description: "Half order of chicken skin."
  },
  {
    id: "chicken-skin-whole",
    name: "Chicken Skin - Whole",
    category: "Street Food",
    price: 155,
    emoji: "🍢",
    description: "Whole order of chicken skin."
  },
  {
    id: "chicken-isaw-half",
    name: "Chicken Isaw - Half",
    category: "Street Food",
    price: 79,
    emoji: "🍢",
    description: "Half order of chicken isaw."
  },
  {
    id: "chicken-isaw-whole",
    name: "Chicken Isaw - Whole",
    category: "Street Food",
    price: 155,
    emoji: "🍢",
    description: "Whole order of chicken isaw."
  },
  {
    id: "chicken-neck-half",
    name: "Chicken Neck - Half",
    category: "Street Food",
    price: 79,
    emoji: "🍢",
    description: "Half order of chicken neck."
  },
  {
    id: "chicken-neck-whole",
    name: "Chicken Neck - Whole",
    category: "Street Food",
    price: 155,
    emoji: "🍢",
    description: "Whole order of chicken neck."
  },
  {
    id: "fun-shots-half",
    name: "Fun Shots - Half",
    category: "Street Food",
    price: 99,
    emoji: "🍢",
    description: "Half order of fun shots."
  },
  {
    id: "fun-shots-whole",
    name: "Fun Shots - Whole",
    category: "Street Food",
    price: 188,
    emoji: "🍢",
    description: "Whole order of fun shots."
  },
  {
    id: "proven-half",
    name: "Proven - Half",
    category: "Street Food",
    price: 89,
    emoji: "🍢",
    description: "Half order of proven."
  },
  {
    id: "proven-whole",
    name: "Proven - Whole",
    category: "Street Food",
    price: 175,
    emoji: "🍢",
    description: "Whole order of proven."
  },
  {
    id: "calamares-half",
    name: "Calamares - Half",
    category: "Street Food",
    price: 89,
    emoji: "🦑",
    description: "Half order of calamares."
  },
  {
    id: "calamares-whole",
    name: "Calamares - Whole",
    category: "Street Food",
    price: 175,
    emoji: "🦑",
    description: "Whole order of calamares."
  },

  /* ADDITIONAL CHICKEN OPTIONS */

  {
    id: "boneless-half",
    name: "Boneless Chicken - Half",
    category: "Chicken",
    price: 189,
    emoji: "🍗",
    description: "Half order of boneless chicken."
  },
  {
    id: "boneless-whole",
    name: "Boneless Chicken - Whole",
    category: "Chicken",
    price: 365,
    emoji: "🍗",
    description: "Whole order of boneless chicken."
  },
  {
    id: "tenders-half",
    name: "Chicken Tenders (Breast) - Half",
    category: "Chicken",
    price: 95,
    emoji: "🍗",
    description: "Half order of chicken breast tenders."
  },
  {
    id: "tenders-whole",
    name: "Chicken Tenders (Breast) - Whole",
    category: "Chicken",
    price: 190,
    emoji: "🍗",
    description: "Whole order of chicken breast tenders."
  }
];

const cart = new Map();
let activeCategory = "All";

const peso = amount =>
  "₱" + Number(amount).toFixed(2);

const byId = id =>
  document.getElementById(id);

function showToast(message) {
  const toast = byId("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

/* DISPLAY MENU */

function renderMenu() {
  const query = byId("menuSearch").value.trim().toLowerCase();

  const items = MENU.filter(item => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.flavors || []).join(" ").toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (!items.length) {
    byId("menuGrid").innerHTML =
      '<p>No items found. Try another search.</p>';
    return;
  }

  byId("menuGrid").innerHTML = items.map(item => `
    <article class="menu-card">
      <div class="menu-card-top">
        <div class="menu-emoji">${item.emoji}</div>
        <span class="menu-category">${item.category}</span>
      </div>

      <h3>${item.name}</h3>
      <p>${item.description}</p>

      <div class="menu-card-bottom">
        <div class="price">
          ${peso(item.price)}
          <small>per serving</small>
        </div>

        <button
          class="add-btn"
          data-add="${item.id}"
          aria-label="Add ${item.name} to cart"
          title="Add to cart"
        >+</button>
      </div>
    </article>
  `).join("");
}

/* ADD ITEMS TO CART */

function addItem(id) {
  const item = MENU.find(product => product.id === id);

  if (!item) return;

  let flavor = "";

  if (item.flavors && item.flavors.length) {
    flavor = prompt(
      "Choose a flavor:\n" + item.flavors.join("\n")
    );

    if (flavor === null) return;

    flavor = flavor.trim();

    const selectedFlavor = item.flavors.find(
      option => option.toLowerCase() === flavor.toLowerCase()
    );

    if (!selectedFlavor) {
      showToast("Please enter one of the listed flavors.");
      return;
    }

    flavor = selectedFlavor;
  }

  const cartKey = flavor ? `${id}__${flavor}` : id;

  const current = cart.get(cartKey);

  if (current) {
    current.quantity += 1;
  } else {
    cart.set(cartKey, {
      id,
      quantity: 1,
      flavor
    });
  }

  renderCart();
  showToast(item.name + " added to your cart!");
}

/* CHANGE ITEM QUANTITY */

function changeQty(key, amount) {
  const entry = cart.get(key);

  if (!entry) return;

  entry.quantity += amount;

  if (entry.quantity <= 0) {
    cart.delete(key);
  }

  renderCart();
}

/* DISPLAY CART */

function renderCart() {
  const entries = [...cart.entries()];

  const itemCount = entries.reduce(
    (total, [, entry]) => total + entry.quantity,
    0
  );

  byId("cartCount").textContent =
    `${itemCount} ITEM${itemCount === 1 ? "" : "S"}`;

  if (!entries.length) {
    byId("cartItems").innerHTML = `
      <div class="empty-cart">
        Your cart is waiting for something delicious. 🍟
      </div>
    `;
  } else {
    byId("cartItems").innerHTML = entries.map(([key, entry]) => {
      const item = MENU.find(product => product.id === entry.id);
      const displayName = entry.flavor
        ? `${item.name} (${entry.flavor})`
        : item.name;

      return `
        <div class="cart-row">
          <div>
            <strong>${displayName}</strong>
            <small>${peso(item.price)} each</small>
          </div>

          <div class="qty-controls">
            <button data-qty="${key}" data-delta="-1">−</button>
            <b>${entry.quantity}</b>
            <button data-qty="${key}" data-delta="1">+</button>
          </div>

          <div class="line-total">
            ${peso(item.price * entry.quantity)}
          </div>
        </div>
      `;
    }).join("");
  }

  const total = entries.reduce((sum, [, entry]) => {
    const item = MENU.find(product => product.id === entry.id);
    return sum + item.price * entry.quantity;
  }, 0);

  byId("cartTotal").textContent = peso(total);
}

/* BUILD ORDER MESSAGE */

function buildOrderMessage(data) {
  const lines = [
    `PRE-ORDER REQUEST - ${CONFIG.branchName}`,
    "",
    `Name: ${data.customerName}`,
    `Contact Number: ${data.phone}`,
    `Pickup Date: ${data.pickupDate}`,
    `Pickup Time: ${data.pickupTime}`,
    "",
    "ORDER DETAILS:"
  ];

  let total = 0;

  for (const [, entry] of cart) {
    const item = MENU.find(product => product.id === entry.id);
    const name = entry.flavor
      ? `${item.name} (${entry.flavor})`
      : item.name;

    const subtotal = item.price * entry.quantity;
    total += subtotal;

    lines.push(
      `${entry.quantity} x ${name} - ${peso(subtotal)}`
    );
  }

  lines.push(
    "",
    `Estimated Total: ${peso(total)}`,
    `Notes: ${data.notes || "None"}`,
    "",
    "Please confirm item availability, final total, and pickup schedule. Thank you!"
  );

  return lines.join("\n");
}

/* OPEN CHECKOUT */

function openCheckout() {
  if (!cart.size) {
    showToast("Please add something to your cart first!");
    return;
  }

  byId("checkout").hidden = false;

  byId("checkout").scrollIntoView({
    behavior: "smooth"
  });

  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().slice(0, 10);

  byId("pickupDate").min = localToday;
}

/* MENU BUTTON EVENTS */

byId("menuGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (button) {
    addItem(button.dataset.add);
  }
});

/* CART BUTTON EVENTS */

byId("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");

  if (button) {
    changeQty(
      button.dataset.qty,
      Number(button.dataset.delta)
    );
  }
});

/* CATEGORY FILTERS */

byId("categoryTabs").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab === button);
  });

  renderMenu();
});

/* SEARCH */

byId("menuSearch").addEventListener("input", renderMenu);

/* CHECKOUT BUTTON */

byId("checkoutBtn").addEventListener("click", openCheckout);

/* CLOSE CHECKOUT */

byId("closeCheckout").addEventListener("click", () => {
  byId("checkout").hidden = true;
});

/* NAVIGATION ON MOBILE */

byId("menuToggle").addEventListener("click", () => {
  const nav = byId("mainNav");

  nav.classList.toggle("open");

  byId("menuToggle").setAttribute(
    "aria-expanded",
    nav.classList.contains("open")
  );
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    byId("mainNav").classList.remove("open");
  });
});

/* ORDER FORM */

byId("orderForm").addEventListener("submit", async event => {
  event.preventDefault();

  if (!cart.size) {
    showToast("Your cart is empty.");
    return;
  }

  const formData = Object.fromEntries(
    new FormData(event.currentTarget).entries()
  );

  if (!formData.customerName || !formData.phone ||
      !formData.pickupDate || !formData.pickupTime) {
    showToast("Please complete all required details.");
    return;
  }

  const pickup = new Date(
    `${formData.pickupDate}T${formData.pickupTime}`
  );

  if (Number.isNaN(pickup.getTime()) || pickup < new Date()) {
    showToast("Please choose a future pickup date and time.");
    return;
  }

  const message = buildOrderMessage(formData);
  const result = byId("orderResult");

  result.hidden = false;
  result.textContent =
    "Your order request is ready. Copy the order message and send it to Friedays through Messenger. Wait for staff confirmation before pickup.";

  let copied = false;

  try {
    await navigator.clipboard.writeText(message);
    copied = true;
  } catch (error) {
    copied = false;
  }

  if (copied) {
    showToast("Order message copied! Paste it into Messenger.");
  } else {
    window.prompt("Copy your order request:", message);
  }

  if (CONFIG.facebookPageUrl) {
    window.open(
      CONFIG.facebookPageUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }
});

/* CURRENT YEAR */

byId("year").textContent = new Date().getFullYear();

/* INITIAL DISPLAY */

renderMenu();
renderCart();
