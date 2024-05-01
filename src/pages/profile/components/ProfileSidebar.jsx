import React from 'react'
import { Link } from 'react-router-dom'

function ProfileSidebar() {
    return (
        <div className='profile-sidebar'>
            <div className='profile-sidebar_link'>
                <Link to={'/profile/card'}>
                    Buyurtmalarim
                </Link>
            </div>
            <div className='profile-sidebar_link'>
                <Link to={'/profile/setting'}>
                    Sozlamalar
                </Link>
            </div>
        </div>
    )
}

export default ProfileSidebar