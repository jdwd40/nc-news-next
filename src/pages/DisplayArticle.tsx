import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Container,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import CommentList from '../components/CommentList';
import PostComment from '../components/PostComment';
import ArticleCard from '../components/ArticleCard';

export default function DisplayArticle() {
  const router = useRouter();
  const query = router.query;
  const article_id = query.article_id;
  const votes = query.votes;

  return (
    <>
      <NavBar />
      <ArticleCard article_id={article_id} />
      <PostComment article_id={article_id} votes={votes} />
      <CommentList article_id={article_id} />
    </>
  );
}
