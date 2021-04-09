import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setData({
          menu: menuResponse.data,
          newsFeed: newsFeedResponse.data,
          friends: friendsResponse.data
        });
      }
    );
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!data || !data.menu ? <p>Loading..</p> : (
        <nav>
          {data.menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!data || !data.newsFeed ? <p>Loading..</p> : (
          <section>
            {data.newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!data || !data.friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {data.friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
