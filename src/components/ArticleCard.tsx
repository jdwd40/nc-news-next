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
import { useState, useEffect } from 'react';
import { getArticleById } from '../utils/api';
import { getFormattedDate } from '../utils/formatDate';

const ArticleCard = (props) => {
    const [article, setArticle] = useState<{[key: string]: any}>({});
    const article_id = props.article_id;

    type article = {
        topic?: string;
      };

    useEffect(() => {
        getArticleById(article_id).then((ArticleFromApi) => {
          setArticle(ArticleFromApi);
        });
      }, [article_id]);

  return (
    <>
      <Center py={1}>
        <Box
          maxW={'100%'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Stack>
            <Image
              boxSize="l"
              borderRadius="10%"
              objectFit="cover"
              src={''}
            ></Image>
            <Text
              color={'white'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'md'}
              letterSpacing={1.1}
            >
              {article.topic}
            </Text>
            <Heading color={'green.500'} fontSize={'4xl'} fontFamily={'body'}>
              {article.title}
            </Heading>
            <Text color={useColorModeValue('gray.700', 'white')}>
              {article.body}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{article.author}</Text>
              <Text color={'gray.500'}>
                Created on {getFormattedDate(article.created_at)}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default ArticleCard;
