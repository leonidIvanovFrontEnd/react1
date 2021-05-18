import React from 'react';
import { List, ListInlineItem } from 'reactstrap';
import "./post-list.css"
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <ListInlineItem key={id} className="list-group-item">
       <PostListItem 
          {...itemProps} 
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
          />
      </ListInlineItem>
    )
  }); 


  return (
    <List className="app-list ">
        {elements}
    </List>
  )
}
export default PostList;