import React from 'react';
import {compose} from '@truefit/bach';
import {withGATracker} from '../enhancers';

const NotFound = () => <div>Sorry I wasnt able to find the page</div>;

export default compose(withGATracker())(NotFound);
