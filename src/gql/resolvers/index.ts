import productsData from "../../db.js";

const resolvers = {
	Query: {
		products: () => productsData,
		product: (parent, { id }, context) => {
			const product = productsData.find((product) => product.id === parseInt(id));
			console.log(product);
			if (!product) {
				throw new Error("Product not found");
			}
			return product;
		}
	}
};

export default resolvers;
