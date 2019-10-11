import {Helmet} from 'react-helmet';
import React from 'react';

const SeoRenderers = {
  og: ({name, value}) => <meta name={name} property={name} content={value} key={`og-${name}`} />,
  tag: ({name, value}) => React.createElement(name, {key: `tag-${name}`}, value),
  meta: ({name, value}) => <meta name={name} content={value} key={`meta-${name}`} />,
};

const Header = React.memo(({fields}) => (
  <Helmet>{fields.map(({type, name, value}) => SeoRenderers[type]({name, value}))}</Helmet>
));

export default Header;
