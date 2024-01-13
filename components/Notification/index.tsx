import { FC, MouseEventHandler, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface UserNotification {
  name: string
  src: string
  timestamp: string
  notification: string
  post?: string
  commentedPicture?: string
  groups?: string
  seen: boolean
  quote?: string
}
interface NotificationProps {
  user: UserNotification
  i: number
  viewed: boolean
  setCounter: Function
  counter: number
}

const Notification: FC<NotificationProps> = ({
  viewed,
  setCounter,
  user,
  counter,
  i,
}) => {
  const [userSeen, setUserSeen] = useState(user.seen)
  const handleClick = () => {
    if (!userSeen) {
      setCounter((prev: number) => prev - 1)
      setUserSeen(true) // Mark as seen
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.125, delay: i * 0.05 }}
    >
      <div
        className={`${
          userSeen
            ? 'bg-white pointer-events-none cursor-default'
            : 'bg-neutral-veryLightGrayishBlue cursor-pointer'
        } flex flex-row md:flex-row items-start space-x-3 space-y-0 p-4`}
        onClick={handleClick}
      >
        <div
          style={{
            minWidth: '40px',
            height: '40px',
            position: 'relative',
          }}
        >
          <Image
            src={user.src}
            alt={user.name}
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div onClick={() => handleClick}>
          <div className='inline space-x-0.5'>
            <span className='font-bold text-neutral-veryDarkBlue hover:text-primary-blue'>
              {user.name}{' '}
            </span>
            <span className='text-neutral-grayishBlue font-normal'>
              {user.notification}{' '}
            </span>
            {user.post && (
              <span className='font-bold text-neutral-grayishBlue'>
                {user.post}{' '}
              </span>
            )}
            {user.groups && (
              <span className='font-bold text-primary-blue'>
                {user.groups}{' '}
              </span>
            )}
            {!user.seen && (
              <div className='inline-block'>
                <span
                  className={`${
                    userSeen ? 'hidden' : ''
                  } seen-indicator flex flex-row items-center h-full`}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'red',
                      borderRadius: '50%',
                    }}
                  ></span>
                </span>
              </div>
            )}
          </div>
          <div className='user-meta'>
            <div className='timestamp text-neutral-grayishBlue'>
              {user.timestamp}
            </div>
            {user.quote && (
              <div className='w-full border-neutral-grayishBlue border-[0.5px] mt-2 p-4 rounded hover:bg-neutral-lightGrayishBlue1'>
                <p className='text-neutral-grayishBlue'>{user.quote}</p>
              </div>
            )}
          </div>
        </div>
        {user.commentedPicture && (
          <div
            style={{ minWidth: '32px', height: '32px', position: 'relative' }}
          >
            <Image
              src={user.commentedPicture}
              alt='Commented'
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default Notification
