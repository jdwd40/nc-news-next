import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  UnorderedList,
  ListItem,
  Flex,
  Button
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useRouter } from 'next/router';
import {getFormattedDate } from '../utils/formatDate';
import Loading from '../components/Loading';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  const query = router.query;
  const topic = query.topic;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getArticles(topic).then((selectedArticlesFromApi) => {
      setArticles(selectedArticlesFromApi);
    setLoading(false);
    });
  }, [topic]);

  if (loading) return <Loading />
 
  return (
    <>
        <NavBar />
        <Heading as="h2" marginTop="5" ml={5} bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text">
          Latest Articles {topic}
        </Heading>
        <Divider marginTop="5" />
        <VStack paddingTop="40px" spacing="3" alignItems="flex-start">
          <UnorderedList styleType="none">
            {articles.map((article) => {
              return (
                <ListItem key={article.article_id}>
                    <Box
                      boxShadow={'2xl'}
                      rounded={'md'}
                      bg={useColorModeValue('white', 'gray.900')}
                    >
                    <Link
                      href={`/DisplayArticle?article_id=${article.article_id}&votes=${article.votes}`}
                    >
                      <Heading fontSize="2xl" p={3} color="green.500">
                        {article.title}
                      </Heading>
                      <Text paddingLeft={3} pb={2} mb={3} pr={2} noOfLines={4}>
                        {article.body}
                      </Text>
                    </Link>
                </Box>    
              <HStack mb={2} fontSize="sm">
                <Text m={3}>Likes {article.votes}</Text>
                <Text m={3}>Comments {article.comment_count}</Text>
                <Text m={3} ml={8}>Author: </Text>
                <Text color="green">{article.author}</Text>
                <Text size="xs" as="i" >Created on {getFormattedDate(article.created_at)}</Text>
              </HStack>
              <Divider mb={3}/>
                  </ListItem>
              );
            })}
          </UnorderedList>
        </VStack>
    </>
  );
};

export default ArticleList;
