// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Meta from '../Meta';

type Props = {
  body: string,
  title: string,
  date: string,
};

const Content = ({ body, title, date }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__highlight-first-char']}>{title.charAt(0).toUpperCase()}</div>
    <Meta date={date} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
