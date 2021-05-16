import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {

    const [isPublished, togglePublished] = useState( false );

    // let publishState = '';
    // if (props.isPublished) {
    //     publishState = '公開'
    // } else {
    //     publishState = '非公開'
    // }

    return (
        <>
            {/* <h2>{props.title}</h2>
            <label htmlFor='check'>公開状態：</label>
            <input type='checkbox' checked={props.isPublished} id='check' onClick={() => props.toggle()} />
            <LikeButton count={props.count} /> */}
            <h2>{props.title}</h2>
            <label htmlFor='check'>公開状態：</label>
            <input type='checkbox' checked={isPublished} id='check' onClick={() => togglePublished(!isPublished)} />
            {/* <LikeButton count={props.count} /> */}
            <LikeButton />
        </>
    )
};

export default Article;