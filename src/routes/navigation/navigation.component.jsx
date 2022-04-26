import {Fragment} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {
    NavigationContainer,
} from './navigation.styles';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);


const Navigation = ({signOut}) => {

    return (
        <Fragment>
            <NavigationContainer>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/videos'>VIDEOS</NavLink>
                <NavLink to='/upload'>UPLOAD</NavLink>
                <NavLink onClick={signOut}>SIGN OUT</NavLink>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default withAuthenticator(Navigation);