import {Fragment} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {
    NavigationContainer,
} from './navigation.styles';

const Navigation = () => {

    return (
        <Fragment>
            <NavigationContainer>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/'>SIGN IN</NavLink>
                <NavLink to='/'>SIGN OUT</NavLink>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;