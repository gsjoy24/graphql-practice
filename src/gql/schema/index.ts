const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String!
    image: String!
    onStock: Boolean!
    price: Float!
    categoryId: String!
    category: Category!
    quantity: Int!
    description: String
  }

  type Category {
    id: ID!
    name: String!
    description: String
    products: [Product]
    totalProducts: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
  }
`;

export default typeDefs;
