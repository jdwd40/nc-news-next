import {
  Center,
  Text,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Link,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { postCommentByArticleId } from '../utils/api';
import { useRouter } from 'next/router';
import Router from 'next/router';
import ArticleCard from '../components/ArticleCard';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const router = useRouter();
  const query = router.query;
  const article_id = query.article_id;

  const handleChange = (e) => {
    setComment((currComment) => {
     // @ts-ignore
      let newComment = { ...currComment };
      newComment = e.target.value;
      return newComment;
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    postCommentByArticleId(article_id, comment).then(() => {
      setComment('');
      Router.push(`/DisplayArticle?article_id=${article_id}`);
      //  return <Link href={`/articles/${article_id}`} />;
    });
  };

  const isError = comment === '';

  return (
    <>
      <NavBar />
      <ArticleCard article_id={article_id} />
      <Center>
        <FormControl isInvalid={isError}>
          <FormLabel>Post a Comment</FormLabel>
          <Textarea height="300" value={comment} onChange={handleChange} />
          {!isError ? (
            <FormHelperText>Hit Submit Enter your comment</FormHelperText>
          ) : (
            <FormErrorMessage>Cant send blank comment</FormErrorMessage>
          )}
        </FormControl>
      </Center>
      <Link href={`/DisplayArticle?article_id=${article_id}`}>
        <Button type="submit" onClick={handleSubmitClick}>
          Submit
        </Button>
        <Button>Cancel/Back</Button>
      </Link>
    </>
  );
};

export default CommentForm;
