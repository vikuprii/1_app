import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
      { props.message }
      <div>like<span>{props.likesCount}</span></div>
    </div>
  );
}

export default Post;
