import React from 'react';
import './profile.css';
import Avatar from '../components/profile/info-section/Avatar'
import Person from '../components/profile/info-section/Person';
import Nav from '../components/profile/Nav';
import Button from '../components/Button';
import LinkSection from '../components/profile/link-section/LinkSection';

function Profile() {

  return (
      <div>
          <Nav/>

          <div className='container'>

              <div className='person-container'>
                  <Avatar/>
                  <Person userName={'Vlad Pisaruk'}
                          nickName={'@vlad'}
                          country={'Belarus'}/>
              </div>
              <div className='btn-container'>
                  <Button text={'Whish List'}/>
                  <Button text={'Make a Gift'}/>
                  <Button text={'Responses'}/>
              </div>
                <LinkSection />
          </div>
      </div>

  );
}

export default Profile;
