import React from 'react';

import Card from '../UI/Card';
import styles from './LinkList.module.css'

const LinkList = (props) => {
  return (
    <Card className={styles.list}>
    <ul>
      {props.links.map((link) =>(
        <li key={link.id}>
          <a href={link.url} rel="noreferrer" target="_blank">
            <h4>{link.title}</h4>
          </a>
        </li>))}
    </ul>
    </Card>
  );
};

export default LinkList;
