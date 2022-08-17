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
import { getArticleById } from '../utils/api';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CommentList from '../components/CommentList';
import { getFormattedDate } from '../utils/formatDate';

export default function ArticleCard() {
  const [article, setArticle] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [humanDate, setHumanDate] = useState();
  const router = useRouter();
  const query = router.query;
  const article_id = query.article_id;

  useEffect(() => {
    getArticleById(article_id).then((ArticleFromApi) => {
      setArticle(ArticleFromApi);
      if (article.topic === "Football") setImageUrl("https://jdwd40.tech/wp-content/uploads/2022/08/thomas-serer-r-xKieMqL34-unsplash.jpg");
      if (article.topic === "Coding") setImageUrl("https://jdwd40.tech/wp-content/uploads/2022/08/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg");

    });
  }, [article_id]);

console.log(article.created_at);
  return (
    <>
      <Container maxW={'7xl'} p="12">
        <NavBar />
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
                src={imageUrl}
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
              <Heading
                color={'green.500'}
                fontSize={'4xl'}
                fontFamily={'body'}
              >
                {article.title}
              </Heading>
              <Text color={useColorModeValue('gray.700', 'white')}>{article.body}</Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar
                src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                alt={'Author'}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>{article.author}</Text>
                <Text color={'gray.500'}>Created on {getFormattedDate(article.created_at)}</Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <CommentList article_id={article_id} />
      </Container>
    </>
  );
}
