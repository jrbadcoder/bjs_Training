import React from 'react';
import _get from 'lodash/get';

function HomeScreen(props) {
    return (
        <div>
            this is home screen route name is : -
            {
                _get(props, 'name') || ''
            }
        </div>
    )
}

export default HomeScreen;