import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
      </div>
      <div className={s.descriptoinBlock}>
        <div>
          <img className={s.ava} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
Ava+description
</div>
       
      </div>
    </div>
  );
}

export default ProfileInfo;
