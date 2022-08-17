import {
  Heading,
  Text,
  Stack,
  UnorderedList,
  Box,
  ListItem,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getCommentsById } from '../utils/api';

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
        <Stack>
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
                    <Stack
                      mt={6}
                      direction={'row'}
                      spacing={4}
                      align={'center'}
                      p={2}
                    >
                      <Avatar
                        src={
                          'https://avatars0.githubusercontent.com/u/1164541?v=4'
                        }
                        alt={'Author'}
                        size="xs"
                      />
                      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>{comment.author}</Text>
                      </Stack>
                    </Stack>
                  </Box>
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
