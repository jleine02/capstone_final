import {Fragment} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

import {
    NavigationContainer,
} from './navigation.styles';

import {Amplify} from 'aws-amplify';
import {Button, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const Navigation = ({signOut}) => {

    return (
        <Fragment>
            <NavigationContainer>
                <NavLink to='/videos'>VIDEOS</NavLink>
                <NavLink to='/upload'>UPLOAD</NavLink>
                <Button onClick={signOut}>SIGN OUT</Button>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default withAuthenticator(Navigation);