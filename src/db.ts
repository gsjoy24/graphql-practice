const categories = [
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

const products = [
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

const reviews = [
	{
		id: "REV001",
		productId: "PROD001",
		rating: 4,
		comment:
			"Great sound quality and comfortable to wear. The noise cancellation works well, but the battery life could be a little longer.",
		date: "2024-11-16"
	},
	{
		id: "REV002",
		productId: "PROD001",
		rating: 5,
		comment:
			"I love these headphones! The sound is crystal clear and they are so comfortable for long hours. Highly recommend!",
		date: "2024-11-15"
	},
	{
		id: "REV003",
		productId: "PROD002",
		rating: 5,
		comment: "This chair is amazing! I sit for hours working, and the lumbar support is perfect. Super comfy!",
		date: "2024-11-14"
	},
	{
		id: "REV004",
		productId: "PROD002",
		rating: 3,
		comment: "It’s a good chair, but the armrests aren’t adjustable enough for my liking. Still, it’s a solid option.",
		date: "2024-11-13"
	},
	{
		id: "REV005",
		productId: "PROD003",
		rating: 4,
		comment: "Very efficient kettle, boils quickly. Only downside is that it’s a bit too loud when boiling.",
		date: "2024-11-12"
	},
	{
		id: "REV006",
		productId: "PROD003",
		rating: 5,
		comment: "Excellent kettle! It boils water in no time and looks sleek on my countertop.",
		date: "2024-11-11"
	},
	{
		id: "REV007",
		productId: "PROD004",
		rating: 3,
		comment:
			"The keyboard feels good, but the keys aren’t as responsive as I expected. I would have liked more key customization options.",
		date: "2024-11-10"
	},
	{
		id: "REV008",
		productId: "PROD004",
		rating: 2,
		comment: "The RGB lights are cool, but the keys feel cheap and not very durable. Wouldn’t recommend for heavy use.",
		date: "2024-11-09"
	},
	{
		id: "REV009",
		productId: "PROD005",
		rating: 5,
		comment: "These running shoes are fantastic! They are light and provide excellent support during my runs.",
		date: "2024-11-08"
	},
	{
		id: "REV010",
		productId: "PROD005",
		rating: 4,
		comment: "Very comfortable, but I feel the fit could be a bit tighter around the midfoot. Overall, a great buy.",
		date: "2024-11-07"
	},
	{
		id: "REV011",
		productId: "PROD006",
		rating: 4,
		comment: "Good quality case for my phone. It’s sturdy and looks great. Wish it had a bit more grip though.",
		date: "2024-11-06"
	},
	{
		id: "REV012",
		productId: "PROD006",
		rating: 5,
		comment: "Exactly what I needed! Fits my phone perfectly, and the material feels premium.",
		date: "2024-11-05"
	},
	{
		id: "REV013",
		productId: "PROD007",
		rating: 4,
		comment:
			"Nice watch with great features, but I wish the display was a little brighter. It’s hard to see in direct sunlight.",
		date: "2024-11-04"
	},
	{
		id: "REV014",
		productId: "PROD007",
		rating: 5,
		comment: "Perfect for daily use. The watch is stylish and the features are great for fitness tracking.",
		date: "2024-11-03"
	},
	{
		id: "REV015",
		productId: "PROD008",
		rating: 5,
		comment:
			"The sound quality is amazing for such a portable speaker. I use it daily and the battery life is excellent.",
		date: "2024-11-02"
	},
	{
		id: "REV016",
		productId: "PROD008",
		rating: 4,
		comment: "Very good sound, but the volume could be a bit louder. Great for casual listening and outdoor use.",
		date: "2024-11-01"
	},
	{
		id: "REV017",
		productId: "PROD009",
		rating: 4,
		comment:
			"Good frying pan. Cooks evenly, and the non-stick surface works well. The handle gets a bit hot after long cooking times.",
		date: "2024-10-31"
	},
	{
		id: "REV018",
		productId: "PROD009",
		rating: 5,
		comment: "Love this frying pan! It’s durable and easy to clean. Perfect for everyday use.",
		date: "2024-10-30"
	},
	{
		id: "REV019",
		productId: "PROD010",
		rating: 3,
		comment: "Good mat, but it's a bit slippery when wet. It's comfortable for yoga, but the grip could be better.",
		date: "2024-10-29"
	},
	{
		id: "REV020",
		productId: "PROD010",
		rating: 4,
		comment:
			"Great mat for yoga and light workouts. The thickness provides good cushioning, but it could have better traction.",
		date: "2024-10-28"
	}
];

const db = {
	products,
	categories,
	reviews
};

export default db;
