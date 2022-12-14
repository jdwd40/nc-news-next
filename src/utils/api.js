import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-ex1.herokuapp.com/api/',
    // baseURL: 'http://localhost:9090/api',
    });

export const getArticles = async (topic) => {
    const { data } = await newsApi.get(`/articles/?topic=${topic}`);
    const { articles } = data;
    console.log(' from getArticle >>>> ', articles);
    return articles;
  };

  export const getArticleById = async (article_id) => {
    const { data } = await newsApi.get(`/articles/${article_id}`);
      let { article } = data;
      return article;
  };

  export const getCommentsById = async (article_id) => {
    const { data } = await newsApi.get(`/articles/${article_id}/comments`);
      const { comments } = data;
      return comments;
  };
  
  export const postCommentByArticleId = async (article_id, comment) => {
    const postComment = {};
    postComment.body = comment;
    postComment.username = 'grumpy19';
    const { data } = await newsApi
      .post(`/articles/${article_id}/comments`, postComment);
    return data;
  };

  export const changeVotes = async (article_id, incVotes) => {
    const res = await newsApi.patch(`/articles/${article_id}`, {inc_votes: incVotes});
    return res.data.article.votes;
}