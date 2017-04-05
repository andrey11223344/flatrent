import React from 'react';
import Container from '../../../components/container';
import Sidebar from '../../../components/sidebar';
import ProfileSettings from '../../../components/profile-settings';

const Settings = () => {
    return (
        <Container
            sidebar={
                <Sidebar/>
            }
        >
            <div className="profile-settings-wrapper">
                <ProfileSettings/>
            </div>

        </Container>
    );
};

export default Settings;
