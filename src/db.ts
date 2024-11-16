const productsData = [
	{
		id: "PROD001",
		name: "Wireless Bluetooth Headphones",
		image: "https://example.com/images/headphones.jpg",
		onStock: true,
		price: 59.99,
		categoryId: "ELEC001",
		quantity: 150,
		description: "High-quality wireless headphones with noise-cancellation and a long battery life."
	},
	{
		id: "PROD002",
		name: "Ergonomic Office Chair",
		image: "https://example.com/images/office-chair.jpg",
		onStock: true,
		price: 129.99,
		categoryId: "FURN002",
		quantity: 50,
		description: "Comfortable ergonomic office chair with lumbar support and adjustable height."
	},
	{
		id: "PROD003",
		name: "Electric Kettle",
		image: "https://example.com/images/kettle.jpg",
		onStock: true,
		price: 29.99,
		categoryId: "KITCH003",
		quantity: 200,
		description: "Fast-boiling electric kettle with a sleek design and automatic shut-off feature."
	},
	{
		id: "PROD004",
		name: "Gaming Keyboard",
		image: "https://example.com/images/keyboard.jpg",
		onStock: false,
		price: 49.99,
		categoryId: "ELEC004",
		quantity: 0,
		description: "RGB-backlit gaming keyboard with programmable keys and durable build quality."
	},
	{
		id: "PROD005",
		name: "Running Shoes",
		image: "https://example.com/images/running-shoes.jpg",
		onStock: true,
		price: 89.99,
		categoryId: "FTWR005",
		quantity: 75,
		description: "Lightweight and comfortable running shoes suitable for all terrains."
	},
	{
		id: "PROD006",
		name: "Smartphone Case",
		image: "https://example.com/images/phone-case.jpg",
		onStock: true,
		price: 12.99,
		categoryId: "ACCS006",
		quantity: 300,
		description: "Durable and stylish case compatible with multiple smartphone models."
	},
	{
		id: "PROD007",
		name: "Digital Watch",
		image: "https://example.com/images/digital-watch.jpg",
		onStock: true,
		price: 45.0,
		categoryId: "WATC007",
		quantity: 100,
		description: "Water-resistant digital watch with multiple features including stopwatch and alarm."
	},
	{
		id: "PROD008",
		name: "Portable Speaker",
		image: "https://example.com/images/speaker.jpg",
		onStock: true,
		price: 39.99,
		categoryId: "ELEC008",
		quantity: 85,
		description: "Compact and powerful portable speaker with Bluetooth connectivity."
	},
	{
		id: "PROD009",
		name: "Non-Stick Frying Pan",
		image: "https://example.com/images/frying-pan.jpg",
		onStock: true,
		price: 24.99,
		categoryId: "KITCH009",
		quantity: 120,
		description: "Durable non-stick frying pan for easy cooking and cleaning."
	},
	{
		id: "PROD010",
		name: "Yoga Mat",
		image: "https://example.com/images/yoga-mat.jpg",
		onStock: false,
		price: 19.99,
		categoryId: "FITN010",
		quantity: 0,
		description: "Eco-friendly yoga mat with excellent grip and cushioning."
	}
];

const categoriesData = [
	{
		id: "ELEC001",
		name: "Electronics",
		description: "Devices and gadgets that make life easier and more connected."
	},
	{
		id: "FURN002",
		name: "Furniture",
		description: "Comfortable and stylish furniture for your home or office."
	},
	{
		id: "KITCH003",
		name: "Kitchen Appliances",
		description: "Essential appliances to simplify your cooking and food preparation."
	},
	{
		id: "ELEC004",
		name: "Gaming Accessories",
		description: "High-performance accessories to enhance your gaming experience."
	},
	{
		id: "FTWR005",
		name: "Footwear",
		description: "Stylish and comfortable footwear for various activities."
	},
	{
		id: "ACCS006",
		name: "Accessories",
		description: "Protective and functional accessories for your devices and gadgets."
	},
	{
		id: "WATC007",
		name: "Watches",
		description: "Stylish and functional watches for every occasion."
	},
	{
		id: "ELEC008",
		name: "Audio Devices",
		description: "High-quality speakers and audio devices for immersive sound."
	},
	{
		id: "KITCH009",
		name: "Cookware",
		description: "Durable and practical cookware for all your culinary needs."
	},
	{
		id: "FITN010",
		name: "Fitness Gear",
		description: "Gear and equipment to support your fitness and wellness goals."
	}
];

const db = {
	products: productsData,
	categories: categoriesData
};

export default db;
