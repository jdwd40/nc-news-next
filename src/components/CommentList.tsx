import {
  Heading,
  Text,
  Stack,
  UnorderedList,
  Box,
  ListItem,
  Center,
  Avatar,
  HStack,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getCommentsById } from '../utils/api';
import { FaRegThumbsUp } from 'react-icons/fa';
import { getFormattedDate } from '../utils/formatDate';

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const article_id = props.article_id;

  useEffect(() => {
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  console.log('article_id from comments list: ', article_id);
  return (
    <Center py={6}>
      <Box
        maxW={'100%'}
        w={'full'}
        bg={'gray.700'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack display="flex" align={'right'}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'md'}
            letterSpacing={1.1}
          >
            Comments
          </Text>

          <UnorderedList styleType="none">
            {comments.map((comment) => {
              return (
                <ListItem>
                  <Box
                    w={'full'}
                    bg={'gray.600'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={2}
                    m={3}
                  >
                    <Text color="white">{comment.body}</Text>
                    <HStack
                      mt={6}
                      direction={'row'}
                      spacing={4}
                      align={'right'}
                      p={2}
                    >
                      <Stack direction={'row'} align={'right'}>
                        <Avatar
                          src={
                            'https://avatars0.githubusercontent.com/u/1164541?v=4'
                          }
                          alt={'Author'}
                          size="xs"
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                          <Text as="i" fontWeight={600}>
                            {comment.author}
                          </Text>
                        </Stack>
                        <Box
                          justifyItems={'right'}
                          display="flex"
                          alignItems={'right'}
                        >
                          <HStack
                            display={'flex'}
                            alignItems={'right'}
                            spacing={0}
                            fontSize={'sm'}
                          ></HStack>
                        </Box>
                      </Stack>
                    </HStack>
                  </Box>
                  <HStack fontSize={'sm'}>
                    <Button
                      leftIcon={<FaRegThumbsUp />}
                      colorScheme="green"
                      size="xs"
                      m={3}
                    >
                      <Text fontWeight={600}>Up Vote</Text>
                    </Button>
                    <Text>Likes {comment.votes}</Text>
                    <Text as="i" >Created on {getFormattedDate(comment.created_at)}</Text>
                  </HStack>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Stack>
      </Box>
    </Center>
  );
};

export default CommentList;
