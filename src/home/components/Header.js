import {Helmet} from 'react-helmet';
import React from 'react';

const SeoRenderers = {
  og: ({name, value}) => <meta name={name} property={name} content={value} key={`og-${name}`} />,
  tag: ({name, value}) => React.createElement(name, {key: `tag-${name}`}, value),
  meta: ({name, value}) => <meta name={name} content={value} key={`meta-${name}`} />,
};

const urls = {
  he: 'https://welldone.software/he/',
  en: 'https://welldone.software/',
};

const Header = React.memo(({fields, lang}) => (
  <Helmet>
    {fields.map(({type, name, value}) => SeoRenderers[type]({name, value}))}
    <link rel="canonical" href={lang === 'en-us' ? urls.en : urls.he} />
    <link rel="alternate" href={urls.en} hrefLang="en" />
    <link rel="alternate" href={urls.he} hrefLang="he" />
  </Helmet>
));

export default Header;
