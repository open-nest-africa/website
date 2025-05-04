import React from 'react'
import Button from '../../components/Button'

const OurCommunity = () => {
  return (
    <section className='flex items-center gap-x-[30px] py-20 pl-24'>
<aside className='w-1/2'>
    <h2 className="text-black text-[64px] leading-[92.8px] font-semibold">Our Community</h2>
    <p className="text-[#04354A] -tracking-[1px] text-2xl">Join our vibrant community of open source enthusiasts. Connect with fellow developers, designers, and technical writers. Share knowledge, collaborate on projects, and grow together in the open source ecosystem.</p>
    <div className='mt-11'>
        <Button text="Join Our Community" className="bg-blue text-white text-base font-semibold px-[114px] py-4"/>
    </div>
</aside>
<aside className='w-1/2  relative right-0'><img src="/images/community-image.svg" className='h-[30rem] w-full' alt="" /></aside>
    </section>
  )
}

export default OurCommunity