import './profile.css';
import Avatar from '../components/Avatar'
import Person from '../components/Person';
import Nav from '../components/Nav';
import Button from '../components/Button';
import LinkBtn from '../components/LinkBtn';


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
              <div className='link-container'>
                  <LinkBtn networkLink={'@facebook'}/>
                  <LinkBtn networkLink={'@twitter'}/>
              </div>
          </div>
      </div>

  );
}

export default Profile;
