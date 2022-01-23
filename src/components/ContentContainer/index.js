import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        <Post
          name='Ali'
          timestamp='one week ago'
          text={`Hey, guys. Who interested to building some brand new project?`}
        />
        <Post name='Said' timestamp='one week ago' text={`I'm ready. `} />
        <Post name='Jeyhun' timestamp='5 days ago' text={`No.`} />
        <Post
          name='Asif'
          timestamp='4 days ago'
          text={`I want, but not today. Sorry :). `}
        />
        <Post
          name='Vahid'
          timestamp='4 days ago'
          text={`Sure, why not.`}
        />
        <Post
          name='Kamran'
          timestamp='2 days ago'
          text={`I'm kinda busy today.`}
        />
        <Post
          name='Vagif'
          timestamp='22 hours ago'
          text={`Brother sorry, I'm with my parents today. ☺️ `}
        />
        <Post
          name='Maksud'
          timestamp='3 hours ago'
          text={`Give me five minutes. I will right back.`}
        />
        <Post
          name='Balmond'
          timestamp='Just now'
          text={`Can you say exactly what you want to build?`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;