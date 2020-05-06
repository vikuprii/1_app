import React from 'react';
import s from "./Profile.module.css"
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsConteiner from './Myposts/MypostsConteiner';

const Profile = (props) => {

return (
    <div>
      <ProfileInfo />
      <MypostsConteiner />
    </div>
  );
}

export default Profile;
