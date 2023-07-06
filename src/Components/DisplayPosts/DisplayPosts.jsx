import Post from "../Post/Post";
import './DisplayPosts.css';

const DisplayPosts = (props) => {
    return ( 
        <div className="posts-div">
            {props.posts.map((post, index) => {
                return (
                    <>
                        <Post key={index} post={post} />
                        <hr />
                    </>
                )
            })}
        </div>
     );
}
 
export default DisplayPosts;