export const postFilter = (posts, condition) => {
  switch (condition) {
    case "Recent":
      return posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "Popularity":
      return posts.sort(
        (a, b) =>
          b.postLikes.filter((like) => like.type === "LIKE").length -
          a.postLikes.filter((like) => like.type === "LIKE").length
      );
    case "Upvotes":
      return posts.sort((a, b) => {
        const likesA = a.postLikes.filter(
          (like) => like.type === "LIKE"
        ).length;
        const likesB = b.postLikes.filter(
          (like) => like.type === "LIKE"
        ).length;
        return likesB - likesA;
      });
    case "Domain":
      return posts.sort((a, b) => a.domain.localeCompare(b.domain));
    default:
      return posts;
  }
};

export const searchFilter = (posts, query) => {
  return posts.filter(
    (post) =>
      post.content.includes(query) ||
      post.user.name.includes(query) ||
      post.title.includes(query) ||
      post.domain.includes(query)
  );
};
