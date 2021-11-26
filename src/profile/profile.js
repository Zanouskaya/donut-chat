import './profile.css';
import Person from '../components/Person';
import Nav from '../components/Nav';
import Button from '../components/Button';
import LinkBtn from '../components/LinkBtn';


function Profile() {

  return (
      <>
          <Nav/>

          <div className='container'>
              <div>
                  <Person userName={'Vlad Pisaruk'}
                          nickName={'@vlad'}
                          country={'Belarus'}/>
              </div>
              <div className='main-buttons'>
                  <Button text={'Whish List'}/>
                  <Button text={'Make a Gift'}/>
                  <Button text={'Responses'}/>
              </div>
              <div className='links-buttons'>
                  <LinkBtn networkLink={'@facebook'}/>
                  <LinkBtn networkLink={'@twitter'}/>
              </div>
          </div>
      </>

  );
}

export default Profile;
