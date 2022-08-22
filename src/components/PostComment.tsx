import { Button, Center, Link, Text } from '@chakra-ui/react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { changeVotes } from '../utils/api';
import { useEffect, useState } from 'react';

const PostComment = (props) => {
    const article_id = props.article_id;
    const [votes, setVotes] = useState(props.votes);
    
    // useEffect(()=> {
    //   setVotes(props.votes);
    //   console.log('votes ',votes);
    // }, [votes]);

    const handleVoteClick = async () => {
      console.log("vote button clicked!!!!!");
      const currentVotes = await changeVotes(article_id, 1);
      setVotes(currentVotes);
    }

  return (
    <Center>
      <Button size="md" colorScheme={'green'}
                 leftIcon={<FaRegThumbsUp />}
                 m={3} mt={6}
                 onClick={handleVoteClick}
                 >Like</Button>
      <Text mr={3} key={article_id}>{votes ? votes : props.votes}</Text>
      <Link href={`/CommentForm?article_id=${article_id}`} width="85%">
        <Button mt={3} colorScheme={'blue'} width="85%">
          POST A COMMENT
        </Button>
      </Link>
    </Center>
  );
};

export default PostComment;
