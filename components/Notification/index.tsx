import { FC } from 'react'
import Image from 'next/image'

interface UserNotification {
  name: string
  src: string
  timestamp: string
  notification: string
  post?: string
  commentedPicture?: string
  groups?: string
  seen: boolean
}

interface NotificationProps {
  user: UserNotification
}

const Notification: FC<NotificationProps> = ({ user }) => {
  return (
    <article
      className={`${
        user.seen && 'bg-neutral-veryLightGrayishBlue'
      } notification w-full flex flex-col my-2 p-4 rounded-lg`}
    >
      <div className='flex flex-row items-center justify-start space-x-3'>
        <div style={{ width: '40px', height: '40px', position: 'relative' }}>
          <Image
            src={user.src}
            alt={user.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='notification-details leading-tight flex flex-col justify-between text-neutral-darkGrayishBlue'>
          <div className='flex flex-row space-x-1'>
            <span className='font-bold text-neutral-veryDarkBlue'>
              {user.name}
            </span>
            <div
              className={`space-x-1 text-neutral-veryDarkBlue flex flex-row justify-start items-center`}
            >
              <span className=''>{user.notification}</span>
              <span>
                {user.post && <span className='font-bold'>{user.post}</span>}
              </span>
              {user.groups && (
                <span className='font-bold text-primary-blue'>
                  {user.groups}
                </span>
              )}
              {user.seen && (
                <div className='w-2 h-2 bg-primary-red rounded-full inline-block'></div>
              )}
            </div>
          </div>
          <div className='timestamp'>{user.timestamp}</div>
        </div>
        <div>
          <div>
            {user.commentedPicture && (
              <div
                style={{ width: '32px', height: '32px', position: 'relative' }}
              >
                <Image src={user.commentedPicture} alt={user.name} fill />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Notification
