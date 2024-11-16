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
  }
`;

const resolvers = {
	Query: {
		products: () => productsData
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
