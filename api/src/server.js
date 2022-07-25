const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, db } = require("./db");

const user = models.User.findOne();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({ models, db, user }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
