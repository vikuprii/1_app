import React from 'react';
import s from "./Profile.module.css"
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {

return (
    <div>
      <ProfileInfo />
      <MypostsContainer />
    </div>
  );
}

export default Profile;
