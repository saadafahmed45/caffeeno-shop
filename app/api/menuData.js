export const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    desc: "A timeless favorite — rich espresso balanced with steamed milk and a thick layer of velvety foam.",
    image: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg",
    price: "$54",
    category: "Hot Coffee",
    rating: 4.9,
    available: true,

    // New Added
    ingredients: ["Espresso", "Steamed Milk", "Foam"],
    calories: 120,
    prepTime: 4,
    isSpecial: true,
    tags: ["Best Seller", "Creamy"],
    stock: 25,
    sold: 140,
    discount: 0,
  },

  {
    id: 2,
    name: "Latte",
    desc: "A smooth blend of espresso and creamy steamed milk.",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    price: "$49",
    category: "Hot Coffee",
    rating: 4.8,
    available: true,

    // New Added
    ingredients: ["Espresso", "Milk", "Foam"],
    calories: 180,
    prepTime: 3,
    isSpecial: false,
    tags: ["Popular"],
    stock: 30,
    sold: 120,
    discount: 5,
  },

  {
    id: 3,
    name: "Americano",
    desc: "Bold espresso with hot water, preserving aroma and flavor.",
    image: "https://images.pexels.com/photos/34085/pexels-photo.jpg",
    price: "$39",
    category: "Hot Coffee",
    rating: 4.7,
    available: true,

    // New Added
    ingredients: ["Espresso", "Hot Water"],
    calories: 10,
    prepTime: 2,
    isSpecial: false,
    tags: ["Strong"],
    stock: 40,
    sold: 100,
    discount: 0,
  },

  {
    id: 4,
    name: "Mocha",
    desc: "Espresso, chocolate, and steamed milk topped with whipped cream.",
    image: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
    price: "$59",
    category: "Hot Coffee",
    rating: 5.0,
    available: true,

    // New Added
    ingredients: ["Espresso", "Chocolate", "Milk", "Whipped Cream"],
    calories: 320,
    prepTime: 5,
    isSpecial: true,
    tags: ["Chocolate", "Sweet", "Top Rated"],
    stock: 15,
    sold: 200,
    discount: 10,
  },

  {
    id: 6,
    name: "Caramel Frappé",
    desc: "Espresso, crushed ice, milk, caramel syrup topped with whipped cream.",
    image:
      "https://images.pexels.com/photos/22882240/pexels-photo-22882240.jpeg",
    price: "$65",
    category: "Cold Coffee",
    rating: 4.8,
    available: true,

    // New Added
    ingredients: ["Espresso", "Ice", "Milk", "Caramel Syrup"],
    calories: 350,
    prepTime: 6,
    isSpecial: false,
    tags: ["Cold", "Sweet"],
    stock: 20,
    sold: 180,
    discount: 5,
  },

  {
    id: 7,
    name: "Iced Latte",
    desc: "Espresso with chilled milk over ice.",
    image: "https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg",
    price: "$55",
    category: "Cold Coffee",
    rating: 4.7,
    available: true,

    // New Added
    ingredients: ["Espresso", "Cold Milk", "Ice"],
    calories: 120,
    prepTime: 3,
    isSpecial: false,
    tags: ["Refreshing"],
    stock: 35,
    sold: 160,
    discount: 0,
  },

  {
    id: 8,
    name: "Matcha Latte",
    desc: "Ceremonial matcha blended with steamed milk.",
    image: "https://images.pexels.com/photos/4725593/pexels-photo-4725593.jpeg",
    price: "$55",
    category: "Tea & Latte",
    rating: 4.9,
    available: true,

    // New Added
    ingredients: ["Matcha", "Milk", "Hot Water"],
    calories: 140,
    prepTime: 4,
    isSpecial: true,
    tags: ["Green Tea", "Healthy"],
    stock: 10,
    sold: 90,
    discount: 0,
  },

  {
    id: 9,
    name: "Chai Latte",
    desc: "Black tea with warm spices and steamed milk.",
    image: "https://images.pexels.com/photos/5946617/pexels-photo-5946617.jpeg",
    price: "$49",
    category: "Tea & Latte",
    rating: 4.8,
    available: true,

    // New Added
    ingredients: ["Black Tea", "Milk", "Cinnamon", "Cardamom"],
    calories: 160,
    prepTime: 4,
    isSpecial: false,
    tags: ["Spicy"],
    stock: 25,
    sold: 110,
    discount: 0,
  },

  {
    id: 10,
    name: "Croissant",
    desc: "Flaky, buttery, and golden.",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    price: "$30",
    category: "Pastry",
    rating: 4.9,
    available: true,

    // New Added
    ingredients: ["Butter", "Flour", "Sugar"],
    calories: 250,
    prepTime: 2,
    isSpecial: false,
    tags: ["Bakery", "Light"],
    stock: 20,
    sold: 130,
    discount: 0,
  },

  {
    id: 11,
    name: "Chocolate Muffin",
    desc: "Soft chocolate muffin with dark chocolate chunks.",
    image: "https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg",
    price: "$32",
    category: "Pastry",
    rating: 5.0,
    available: true,

    // New Added
    ingredients: ["Cocoa", "Flour", "Sugar", "Chocolate"],
    calories: 300,
    prepTime: 2,
    isSpecial: true,
    tags: ["Sweet", "Chocolate"],
    stock: 18,
    sold: 150,
    discount: 5,
  },

  {
    id: 12,
    name: "Brownie",
    desc: "Fudgy chocolate brownie with crispy top.",
    image:
      "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg",
    price: "$35",
    category: "Dessert",
    rating: 4.8,
    available: true,

    // New Added
    ingredients: ["Chocolate", "Butter", "Sugar", "Cocoa"],
    calories: 320,
    prepTime: 3,
    isSpecial: false,
    tags: ["Dessert", "Chocolate"],
    stock: 12,
    sold: 140,
    discount: 0,
  },
];
