const typeDefs = `#graphql

  type Category {
    id: ID!
    name: String!
    description: String
    products: [Product]
    totalProducts: Int
  }

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
    reviews: [Review]
  }

  type Review {
    id: ID!
    productId: ID!
    rating: Int!
    comment: String
    date: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
  }
`;

export default typeDefs;
