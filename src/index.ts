import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import productsData from "./db.js";

const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String!
    image: String!
    onStock: Boolean!
    price: Float!
    category: String!
    quantity: Int!
    description: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

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

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
