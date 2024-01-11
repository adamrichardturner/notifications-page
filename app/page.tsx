import Notification from '@/components/Notification'
import users from '@/utils/users.json'
import convertToDate from '@/utils/convertDate'

export default function Home() {
  const notificationList = users
    .map((user) => <Notification key={user.id} user={user} />)
    .sort((a, b) => {
      const dateA = convertToDate(a.props.user.timestamp) || new Date()
      const dateB = convertToDate(b.props.user.timestamp) || new Date()
      return dateB.getTime() - dateA.getTime()
    })
  return (
    <main className='flex min-h-screen flex-col items-center justify-center container w-full desktop:w-[800px]'>
      <section className='bg-neutral-white p-6'>{notificationList}</section>
    </main>
  )
}
