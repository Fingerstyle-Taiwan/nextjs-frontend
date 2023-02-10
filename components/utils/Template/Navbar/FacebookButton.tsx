import Link from 'next/link'
import { useState } from 'react'
import FacebookIcon from './FacebookIcon'

const FacebookButton = () => {
  const [iconColor, setIconColor] = useState<string>('')

  return (
    <Link href="https://www.facebook.com/fingerstyle.tw">
      <a
        target="_blank"
        className="group w-full h-12 cursor-pointer flex border-2 rounded-[32px] border-main px-6 py-3 flex justify-center lg:justify-between items-center lg:hover:bg-main"
        onMouseEnter={() => {
          setIconColor('white')
        }}
        onMouseLeave={() => {
          setIconColor('')
        }}
      >
        <FacebookIcon color={iconColor} />
        <div className="text-main text-base font-semibold ml-3 lg:ml-0 lg:group-hover:text-white">
          追蹤臉書專頁
        </div>
      </a>
    </Link>
  )
}

export default FacebookButton
