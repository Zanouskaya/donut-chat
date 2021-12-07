import React, { useState } from 'react';

import AddLink from './Links/AddLink';
import LinkList from './Links/LinkList';

const LinkSection = props => {

  const [linksList, setLinksList] = useState([])

  const addLinkHandler = (lTitle, lUrl) => {
    setLinksList((prevLinksList) => {
      return [...prevLinksList, {title: lTitle, url: lUrl, id: Math.random().toString()}];
    });
  };

  return(
    <div className='link-container'>
      <LinkList links={linksList}/>
      <AddLink onAddLink={addLinkHandler}/>
    </div>
  );
};

export default LinkSection;
