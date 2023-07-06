import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name,
            body
        };
        props.addNewPost(newPost);
    }

    return ( 
        <div className='form-border-box'>
            <form onSubmit={handleSubmit}>
                <div className='custom-form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='custom-form-group' style={{'margin-top': '.5em'}}>
                    <label style={{'margin-bottom': '80px'}}>Post</label>
                    <textarea type='text'className='form-control' value={body} onChange={(e) => setBody(e.target.value)} style={{height: '100px', 'margin-left': '11px'}}/>
                </div>
                <button type='submit' className="btn btn-primary button-space-top">Create</button>
            </form>
        </div>
    );
}
 
export default CreatePost;