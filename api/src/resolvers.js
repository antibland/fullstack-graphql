/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pet(_, { input }, context) {
      return context.models.Pet.findOne(input);
    },
    pets(_, { input }, context) {
      return context.models.Pet.findMany(input);
    },
  },
  Mutation: {
    newPet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
  },
  Pet: {
    owner(pet, _, context) {
      return context.user;
    },
  },
  User: {
    pets(user, _, context) {
      return context.models.Pet.findMany({ owner: user.id });
    },
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === "DOG"
  //       ? "https://placedog.net/300/300"
  //       : "http://placekitten.com/300/300";
  //   },
  // },
  // User: {},
};
