import { FC, useState } from 'react'
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
}

const Notification: FC<NotificationProps> = ({ user, i }) => {
  // State to track if the images have loaded
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Event handler to set imagesLoaded to true
  const handleImageLoad = () => {
    setImagesLoaded(true)
  }
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.125, delay: i * 0.05 }} // Adjust delay based on index
      className={`${
        !user.seen ? 'bg-neutral-veryLightGrayishBlue' : ''
      } notification w-full flex flex-col py-4 pl-4 pr-6 rounded-lg leading-tight`}
    >
      <div className='flex flex-row md:flex-row items-start space-x-3 space-y-0'>
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

        <div className='flex-grow flex flex-col items-start'>
          <div className='inline space-x-0.5'>
            <span className='font-bold text-neutral-veryDarkBlue hover:text-primary-blue hover:cursor-pointer'>
              {user.name}{' '}
            </span>
            <span className='text-neutral-grayishBlue font-normal'>
              {user.notification}{' '}
            </span>
            {user.post && (
              <span className='font-bold text-neutral-grayishBlue cursor-pointer'>
                {user.post}{' '}
              </span>
            )}
            {user.groups && (
              <span className='font-bold text-primary-blue cursor-pointer'>
                {user.groups}{' '}
              </span>
            )}
            {!user.seen && (
              <div className='inline-block'>
                <span className='flex flex-row items-center h-full'>
                  <span
                    className='seen-indicator'
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
              <div className='w-full border-neutral-grayishBlue border-[0.5px] mt-2 p-4 rounded cursor-pointer hover:bg-neutral-lightGrayishBlue1'>
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
