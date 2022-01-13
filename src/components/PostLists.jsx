import Post from '../components/Post'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getPosts } from '../redux/actions/data';

function PostLists() {

    const { posts } = useSelector((state) => state.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 m-10 sm:grid-cols-1">
      {posts && posts.map(post =>  <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostLists;
