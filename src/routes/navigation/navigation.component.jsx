import {Fragment} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

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
                <NavLink to='/videos'>HOME</NavLink>
                <NavLink to='/upload'>UPLOAD</NavLink>
                <NavLink to={signOut}>SIGN OUT</NavLink>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default withAuthenticator(Navigation);