// https://www.youtube.com/watch?v=ALqNbTik44o
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

var recipes = [
    { id: 0, name: 'chili', url: 'url0'},
    { id: 1, name: 'pad thai', url: 'url1'},
    { id: 2, name: 'bread', url: 'url2'},
]

const RecipeType = new GraphQLObjectType({
    name:'Recipe',
    fields: () => ({
        id: { type:GraphQLInt },
        title: { type:GraphQLString },
        url: { type:GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        recipe: {
            type: RecipeType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args){
                // return _.find(recipes, { id: args.id });
                return recipes[0]
                
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});