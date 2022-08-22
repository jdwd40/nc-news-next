import { Button, Center, Link, Text } from '@chakra-ui/react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useRouter } from 'next/router';

const PostComment = (props) => {
    const article_id = props.article_id;
    const votes = props.votes;

    const handleVoteClick = () => {
      console.log("vote button clicked!!!!!")
    }

  return (
    <Center>
      <Button size="md" colorScheme={'green'}
                 leftIcon={<FaRegThumbsUp />}
                 m={3} mt={6}
                 onClick={handleVoteClick}
                 >Like</Button>
      <Text mr={3}>{votes}</Text>
      <Link href={`/CommentForm?article_id=${article_id}`} width="85%">
        <Button mt={3} colorScheme={'blue'} width="85%">
          POST A COMMENT
        </Button>
      </Link>
    </Center>
  );
};

export default PostComment;
