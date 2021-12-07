import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button'
import styles from './AddLink.module.css'

const AddLink = props => {

  const [enteredLinkTitle, setEnteredLinkTitle] = useState('');
  const [enteredLinkUrl, setEnteredLinkUrl] = useState('');

  const addLinkHandler = (event) => {
    event.preventDefault();
    if (enteredLinkTitle.trim().length === 0 || enteredLinkUrl.trim().length === 0) {
      return;
    };

    props.onAddLink(enteredLinkTitle, enteredLinkUrl);
    setEnteredLinkTitle('');
    setEnteredLinkUrl('');
  };

  const linktitleChangeHandler = (event) => {
    setEnteredLinkTitle(event.target.value);
  };
  const linkurlChangeHandler = (event) => {
    setEnteredLinkUrl(event.target.value);
  };


  return (

      <Card className={styles.input}>

        <form onSubmit={addLinkHandler}>
          <label htmlFor='link-title'>Link Description</label>
          <input id='link-title'
                 type='text'
                 value={enteredLinkTitle}
                 onChange={linktitleChangeHandler}/>

          <label htmlFor='link-url'>Link</label>
          <input id='link-url'
                 type='url'
                 value={enteredLinkUrl}
                 onChange={linkurlChangeHandler}/>
          <div className={styles.btns}>
            <Button className={styles['btn-cancel']}>Cancel</Button>
            <Button type='submit'>Save</Button>
          </div>

        </form>
      </Card>

  );
};

export default AddLink;


// 1. создаем функцию или константу со стадартными полями
//2. создаем form with labels and inputs
//3. add onSubmit method in form
//4.create new const addLinkHandler that will run when button Save clicked
//5. connection onSubmit with addLinkHandler =>  onSubmit={addLinkHandler}
//6. make a styling of app -
//7. Wrap form into Card component
//8. Create a Card component in folder UI;
//9. create a children-parents connection in Card => <div>{props.childen}</div>
//10. create new css file card.module.css and connect it to the Card.js
//11.create new css AddLink.module.css and connect it to the addLink
//12. added some styles into css files
//13. connect styles Card's component with children calsses by adding in Card.js => {`${styles.card} ${props.className}`}
// it need for adding custom styles in AddLink.js for different tags
//14. Create new component Button.js and styles sheet Button.module.js
//15. in Button.js {props.type || 'button'} - need for using custom type of button or standart type "button"
//16. adding styles for cool look
//17. using useState for collect and return data from input =>
//18. don't forget import {useState}
//19. for each input add useState; => const [enteredLinkTitle, setEnteredLinkTitle] = useState('');
//20. add a function that listen every character of input; =>
  // const linktitleChangeHandler = (event) => {
  //   setEnteredLinkTitle(event.target.value);
  // };
//21. add onChange method for input for trigger event listner; => onChange={linktitleChangeHandler}
//22. add console.log function for checking
//23. reset default empty input:
  //add => setEnteredLinkTitle('');
//and add attribute value to the input:=> value={enteredLinkTitle}
//24. validation
  //if (enteredLinkTitle.trim().length === 0 || enteredLinkUrl.trim().length === 0) {
  //return;
  //};
//25. Create a field with list of links:
//26. Create new file LinkList.js and LinkList.module.class
//27. In LinkList.js create const with unodered list. add maping elements:
//28. <ul>
//   {props.links.map((link) =>(
//     <li>
//       <button> <a href={link.url}><h3>{link.title}</h3> </a>
//       </button>
//     </li>))}
// </ul>
//29. in LinkSection add state conroler => const [linksList, setLinksList] = useState([])
//30.  add event onAddLink which run when button is Clicked onAddLink={addLinkHandler}
//31.
//    const addLinkHandler = (lTitle, lUrl) => {
//   setLinksList((prevLinksList) => {
//     return [...prevLinksList, {title: lTitle, url: lUrl];
//   });
// };
//32. can try start code
//33. key error: need add key to the <li> => <li key=''>
//34. add some random id number for each links :return [...prevLinksList, {title: lTitle, url: lUrl, id: Math.random().toString()}];
//35.  
