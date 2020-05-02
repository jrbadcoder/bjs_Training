import React from 'react';
import HomeScreen from '../../component/home';

function WithHomeLogin(Component) {
    return () => {
        return (
            <div>
                <HomeScreen></HomeScreen>
                <Component />
            </div>
        )
    }
}

export default WithHomeLogin;