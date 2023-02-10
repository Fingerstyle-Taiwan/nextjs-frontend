import Link from 'next/link'
import MenuToggle from './MenuToggle'
import FacebookButton from './FacebookButton'
import Image from 'next/image'
import { menuItems } from './constants'
import { useState } from 'react'

interface MenuItemProps {
  name: string
  path: string
}

const DesktopMenuItem = (props: MenuItemProps) => {
  const { name, path } = props

  return (
    <Link href={path}>
      <div className="group relative w-20 flex justify-center cursor-pointer mr-4">
        <a className="text-lg font-semibold duration-300 text-[#52525B] group-hover:-translate-y-1.5">
          {name}
        </a>
        <span className="w-0 h-0.5 bg-main duration-300 group-hover:w-full absolute left-0 bottom-0" />
      </div>
    </Link>
  )
}

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="h-18 lg:h-24 w-screen fixed top-0 flex py-3.5 px-4 lg:py-6 lg:px-16 items-center justify-between z-50 bg-background">
      <div className="left-container flex">
        <Link href="/">
          <div className="logo-container w-9 h-9 lg:w-12 lg:h-12 bg-[#4F46E5] rounded-full cursor-pointer flex justify-center items-center">
            <Image
              className="rounded-full"
              src="/logo.jpg"
              layout="intrinsic"
              width="100%"
              height="100%"
            />
          </div>
        </Link>
        <div className="menu-items-container hidden lg:flex ml-12 items-center justify-center">
          {menuItems.map((item, index) => {
            return (
              <DesktopMenuItem key={index} name={item.name} path={item.path} />
            )
          })}
        </div>
      </div>
      <div className="right-container">
        <div className="facebook-button-container w-48 hidden lg:flex">
          <FacebookButton />
        </div>
        <div className="menu-toggle-container flex  lg:hidden">
          <MenuToggle show={showMenu} setShow={setShowMenu} />
        </div>
      </div>
      <div
        className={`mobile-menu-container overflow-hidden bg-background block lg:hidden duration-300 h-96 top-[68px] px-4 w-full fixed left-0 flex flex-col justify-between ${
          showMenu ? 'h-full py-6' : 'h-0 py-0'
        }`}
      >
        <div className="menu-items-container h-[244px] flex flex-col justify-between">
          {menuItems.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <a className="menu-item text-lg font-semibold text-[#52525B] mr-6 cursor-pointer block text-[#475569]">
                  {item.name}
                </a>
              </Link>
            )
          })}
        </div>
        <div className="facebook-button-container w-full lg:flex">
          <FacebookButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
