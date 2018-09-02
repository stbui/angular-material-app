export type Issues = {
  issues?: { edges?: any };
};

export type Query = {
  repository: Issues;
};

export type Mutation = {
  upvotePost: Issues;
};
