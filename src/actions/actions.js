export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const EDIT_ARTICLE_LIST = 'EDIT_ARTICLE_LIST';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const saveArticle = (article) => {
  return {
    type: SAVE_ARTICLE,
    payload: article
  }
};

export const editArticle = (edit) => {
  return {
    type: EDIT_ARTICLE_LIST,
    payload: edit
  }
};

export const deleteArticle = (remove) => {
  return {
    type: DELETE_ARTICLE,
    payload: remove
  }
};