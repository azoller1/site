import Image from 'next/image'
import profilePic from './profile_pic.jpg'

export default function Page() {
  return (
    <section>
      <Image
      src={profilePic}
      width={300}
      height={200}
      alt="Profile Pic"
      />
      <br />
      <p className="mb-4">
        {`Hello! My name is Alexander. I enjoy working with computers and creating things.
         Click on 'lab' above to see information about my private homelab I have for enjoyment
         and for learning purposes. I created this minimal site for fun and for learning
         a little bit about Next.js/React`}
      </p>
    </section>
  )
}
