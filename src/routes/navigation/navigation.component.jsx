import {NavLink} from 'react-router-dom';

import {
    NavigationContainer,
} from './navigation.styles';

const Navigation = () => {
    return (
        <NavigationContainer>
            <NavLink to='/videos'><b>VIDEOS</b></NavLink>
            <NavLink to='/upload'><b>UPLOAD</b></NavLink>
            <NavLink to='/login'><b>SIGN IN/SIGN OUT</b></NavLink>
        </NavigationContainer>
    );
};

export default Navigation;