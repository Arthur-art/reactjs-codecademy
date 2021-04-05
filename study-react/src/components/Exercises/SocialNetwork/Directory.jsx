import React from 'react';
import { UserList } from './UserList';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2>User directory</h2>
      <UserList
        usernames={['dog', 'cat', 'komodo']}
        onChoose={props.onChoose}
      />
    </div>
  );
}