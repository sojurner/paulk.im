import { State } from './types';

export const mapPostsToCategoryRecord = (
  posts: Models.Post[],
  currentActive: string
) => {
  return posts.reduce((ACC, POST) => {
    const updateACC = { ...ACC };

    if (!updateACC[POST.category]) {
      updateACC[POST.category] = { files: [POST] };
    } else {
      updateACC[POST.category] = {
        files: [...updateACC[POST.category].files, POST],
      };
    }

    if (POST.slug === currentActive && !updateACC[POST.category]?.expanded) {
      updateACC[POST.category].expanded = true;
    }

    return updateACC;
  }, {} as State['directoryPosts']);
};
