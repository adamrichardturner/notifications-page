'use client'

import { useState } from 'react'
import Notification from '@/components/Notification'
import usersData from '@/utils/users.json'
import { UserNotification } from '@/components/Notification'

export default function Page() {
  // Store our notifications in users as a raw array of objects
  const [users, setUsers] = useState<UserNotification[]>(usersData)

  // Store our counter for the seen notifications at top of Feed
  const [counter, setCounter] = useState(
    // Length of unseen notifications array
    usersData.filter((user) => !user.seen).length
  )

  const markAllAsRead = () => {
    // Marks all notifications as read and resets counter to 0
    const updatedUsers = users.map((user) => ({ ...user, seen: true }))
    setUsers(updatedUsers)
    setCounter(0)
  }

  // Notifications list to render in the return statement, sorted by ID
  const notificationList = users
    .sort((a, b) => a.id - b.id)
    .map((user, index) => {
      return (
        <Notification
          key={user.id}
          user={user}
          i={index}
          setCounter={setCounter}
          counter={counter}
        />
      )
    })

  return (
    <main className='flex min-h-screen flex-col items-center justify-center container w-full'>
      <section className='bg-neutral-white px-6 shadow'>
        <div className='flex flex-row justify-between items-center py-6'>
          <div className='flex flex-row space-x-2 items-center'>
            <h2 className='font-bold text-xl'>Notifications</h2>
            <div className='bg-primary-blue px-2 rounded font-bold text-white transition ease-in-out'>
              {counter}
            </div>
          </div>

          {counter > 0 && (
            <div onClick={markAllAsRead}>
              <p
                className={`${
                  counter > 0 ? 'hidden' : ''
                }text-gray-500 hover:text-primary-blue cursor-pointer transition ease-in-out`}
              >
                Mark all as read
              </p>
            </div>
          )}
        </div>
        <div className='space-y-2'>{notificationList}</div>
      </section>
    </main>
  )
}
