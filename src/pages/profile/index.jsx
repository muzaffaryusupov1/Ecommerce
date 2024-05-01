import React from 'react'
import ProfileSidebar from './components/ProfileSidebar'
import ProfileCard from './components/ProfileCard'

function ProfilePage() {
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile-wrapper">
          <div className="profile-sidebar">
            <ProfileSidebar />
            <ProfileCard item={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage