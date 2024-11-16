import db from "../../db.js";

const resolvers = {
	Query: {
		products: () => db.products,
		product: (parent, { id }, context) => {
			const product = db.products.find((product) => product.id === id);
			if (!product) {
				throw new Error("Product not found");
			}
			return product;
		},
		categories: () => db.categories,
		category: (parent, { id }, context) => {
			const category = db.categories.find((category) => category.id === id);
			if (!category) {
				throw new Error("Category not found");
			}
			return category;
		}
	}
};

export default resolvers;
