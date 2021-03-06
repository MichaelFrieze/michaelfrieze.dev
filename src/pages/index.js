/* eslint-disable react/display-name */
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../config/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;
  console.log('description: ', description);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={
            'Come check out the portfolio of Michael Frieze.' || description
          }
        />
      </Helmet>
      <App />
    </>
  );
};

/* 
If displayName becomes an issue, here are solutions:

import { compose, setDisplayName } from 'recompose';
export default compose(setDisplayName('SomeComponent'))(props => ...);

or

export default Object.assign(props => ..., { displayName: 'SomeComponent' });
*/
