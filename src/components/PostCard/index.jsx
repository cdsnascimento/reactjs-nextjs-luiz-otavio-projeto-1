import React from 'react';
import P from 'prop-types';
import './styles.css';

export const PostCard = ({title,cover,body,id}) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title} {id}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
