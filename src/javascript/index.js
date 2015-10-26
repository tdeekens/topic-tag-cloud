// Polyfill Promises for older browsers
require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';
import TagCloud from 'ui/containers/tag-cloud'

render(
  <TagCloud uri='http://localhost:3000' />,
  document.getElementById('react-root')
);
