'use client'
import { useState } from 'react'

import Notification from '@/components/Notification'
import usersData from '@/utils/users.json'

export default function Home() {
  // Step 1: Use useState to manage the state of the users data
  const [users, setUsers] = useState(usersData)

  const markAllAsRead = () => {
    // Step 2: Update the seen property for each user
    const updatedUsers = users.map((user) => ({ ...user, seen: true }))
    setUsers(updatedUsers) // Update the state
  }

  const notificationList = users
    .sort((a, b) => a.id - b.id)
    .map((user, index) => {
      return <Notification key={user.id} user={user} i={index} />
    })

  return (
    <main className='flex min-h-screen flex-col items-center justify-center container w-full'>
      <section className='bg-neutral-white px-6 shadow'>
        <div className='flex flex-row justify-between items-center py-6'>
          <div className='flex flex-row space-x-2 items-center'>
            <h2 className='font-bold text-xl'>Notifications</h2>
            <div className='bg-primary-blue px-2 rounded font-bold text-white'>
              {users.filter((user) => user.seen).length}
            </div>
          </div>

          {/* Step 3: Attach the function to the onClick event of the button */}
          <div onClick={markAllAsRead}>
            <p className='text-gray-500 hover:text-primary-blue cursor-pointer'>
              Mark all as read
            </p>
          </div>
        </div>
        <div className='space-y-2'>{notificationList}</div>
      </section>
    </main>
  )
}
