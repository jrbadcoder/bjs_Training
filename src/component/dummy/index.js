import React, { useEffect } from 'react';

import _get from 'lodash/get';
import _noop from 'lodash/noop'

function DummyScreen(props = {}) {
    useEffect(() => {
        console.log("props", props)
        const actions = _get(props, 'actions') || {};
        const { saveDummyData = _noop } = actions;
        saveDummyData(0)
    }, [])
    console.log("props updated", props)
    const handleClick = () => {
        const actions = _get(props, 'actions') || {};
        const { saveDummyData = _noop } = actions;
        const click = _get(props, 'dummyData') || 0
        const updatedClick = click + 1;
        saveDummyData(updatedClick)
    }
    return (
        <div>
            <p>
                this is DummyScreen
                following data is from redux : -
                {_get(props, 'dummyData')}

            </p>
            <button onClick={handleClick} >
                update Redux
            </button>
        </div>
    )
}

export default DummyScreen;