import React from 'react'
import ProfileSidebar from './ProfileSidebar';

function ProfileCard() {


    return (
        <div className="profile">
            <div className="container">
                <div className="profile-wrapper">
                    <ProfileSidebar />
                    <div className='profile-card'>
                        <div className="profile-card__top">
                            <h3 className='profile-card__top__title'>Buyurtmalarim</h3>
                        </div>
                        <div className="profile-card__content">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard