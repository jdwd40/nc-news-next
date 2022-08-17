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
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useRouter } from 'next/router';

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

  useEffect(() => {
    getArticles(topic).then((selectedArticlesFromApi) => {
      setArticles(selectedArticlesFromApi);
    });
  }, [topic]);

  console.log('articles: ', articles);
  return (
    <>
      <Container maxW={'7xl'} p="12">
        <NavBar />

        <Heading as="h2" marginTop="5">
          Latest Articles {topic}
        </Heading>
        <Divider marginTop="5" />
        <VStack paddingTop="40px" spacing="3" alignItems="flex-start">
          <UnorderedList styleType="none">
            {articles.map((article) => {
              return (
                <Box
                  boxShadow={'2xl'}
                  rounded={'md'}
                  bg={useColorModeValue('white', 'gray.900')}
                
                  
                >
                  <ListItem key={article.article_id}>
                    <Link
                      href={`/ArticleCard?article_id=${article.article_id}`}
                    >
                      <Heading fontSize="2xl" p={3} color="green.500">
                        {article.title}
                      </Heading>
                      <Text mb={4} p={3} pt={-1} pb={3} noOfLines={3}>
                        {article.body}
                      </Text>
                    </Link>
                  </ListItem>
                </Box>
              );
            })}
          </UnorderedList>
        </VStack>
      </Container>
    </>
  );
};

export default ArticleList;
