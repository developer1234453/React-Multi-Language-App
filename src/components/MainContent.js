
import React from 'react';
import './MainContent.css';

const images = {
  home: 'https://d3dh6of9cnaq4t.cloudfront.net/Pictures/480xany/8/5/0/20850_netflixhomepage_840558.jpg',
  movies: 'https://www.cnet.com/a/img/resize/4f658dd9a30be420421914585d0d05c6485f0e85/hub/2020/11/24/f118a940-bf89-41e8-9bd2-f373d2e59eee/fandango.jpg?auto=webp&fit=crop&height=675&width=1200',
  tvshows: 'https://www.mapsofindia.com/ci-moi-images/my-india/2017/01/top-ten-indian-series.jpg',
  sports: 'https://media.licdn.com/dms/image/C5112AQF9BW8qUejwcg/article-cover_image-shrink_600_2000/0/1528442067999?e=2147483647&v=beta&t=CVGjNowMX4heN3zVm7NB_wKouVAIx9zI9kVGfMZMSvM',
  live: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-79293,resizemode-75,msid-66506963/small-biz/marketing-branding/marketing/powerful-tool-why-live-videos-matter-for-small-businesses/live-videos-getty.jpg'
};

const MainContent = ({ view }) => {
  return (
    <div className="main-content">
      {view in images && (
        <div className="full-screen-image">
          <img src={images[view]} alt={view} className="full-screen-img" />
        </div>
      )}
      {view === 'settings' && (
        <div className="settings-content">
          <h2 className="settings-heading">Settings</h2>
          <p>Select your language from the dropdown in the menu to update the language for the menu items.</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
