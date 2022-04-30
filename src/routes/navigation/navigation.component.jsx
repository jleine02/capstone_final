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
                <NavLink to='/videos'><b>VIDEOS</b></NavLink>
                <NavLink to='/upload'><b>UPLOAD</b></NavLink>
                <Button onClick={signOut}><b>SIGN OUT</b></Button>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default withAuthenticator(Navigation);