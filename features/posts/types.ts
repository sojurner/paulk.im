export namespace ƒPosts {
  export class Utils {
    static mapPostsToDirectory = (posts: Models.Post[]) => {
      return posts.reduce((ACC, POST) => {
        const updateACC = { ...ACC };

        if (!updateACC[POST.category]) {
          updateACC[POST.category] = [POST];
        } else {
          updateACC[POST.category] = [...updateACC[POST.category], POST];
        }

        return updateACC;
      }, {} as Record<string, Models.Post[]>);
    };
  }
}
