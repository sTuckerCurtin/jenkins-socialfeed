import React, {useState, useEffect } from 'react';
import {ReactComponent as ThumbsDown} from '../../SVG/thumbs-down-solid.svg';
import {ReactComponent as ThumbsUp} from '../../SVG/thumbs-up-solid.svg';
import './Post.css';

const Post = (props) => {
    const [thumbsDownColor, setThumbsDownColor] = useState('grey');
    const [thumbsUpColor, setThumbsUpColor] = useState('grey');

    useEffect(() => {
        
    }, [props.post]);

    function changeThumbColors(colorNumber){

        if(colorNumber === 1){
            setThumbsDownColor('grey')
            setThumbsUpColor('green')
        } else if (colorNumber === -1){
            setThumbsDownColor('red')
            setThumbsUpColor('grey')
        }else{
            setThumbsDownColor('grey')
            setThumbsUpColor('grey')
        }
    }

    return ( 
        <div>
            <p style={{'fontWeight': 'bold'}}>{props.post.name}</p>
            <p>{props.post.body}</p>
            <span className='icons-span'>
                <ThumbsUp fill={thumbsUpColor} height='1.5em' style={{'margin-right': '1em'}} onClick={() => changeThumbColors(1)}/>
                <ThumbsDown fill={thumbsDownColor} height='1.5em' onClick={() => changeThumbColors(-1)}/>
            </span>
        </div>
     );
}
 
export default Post;