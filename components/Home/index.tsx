import ItemBlock from './ItemBlock'
import Link from 'next/link'
import { itemBlocksContent } from './ItemBlock/constants'

const Home = () => {
  return (
    <div>
      <div className="content relative mb-4 lg:mb-0 mt-24 lg:mt-32 mx-auto text-center z-10 absolute">
        <div className="text-main font-semibold tracking-wide">
          Get ready for Fingerstyle Taiwan Club? Coming soon!
        </div>
        <div className="mt-8 font-bold text-mainDark">
          <div className="text-4xl lg:text-5xl">你準備好了嗎？</div>
          <div className="mt-4 lg:mt-2 text-4xl lg:text-5xl">
            一站式服務的指彈平台即將來臨
          </div>
        </div>
        <div className="mt-8 font-medium text-lg text-[#475569]">
          指彈台灣是由一群音樂愛好者所成立的組織，致力於打造史上最豐富的指彈吉他資源網站！
        </div>
        <Link href="https://discord.gg/XrhUFqfrdq">
          <a
            className="mt-8 font-semibold text-2xl text-white w-40 h-16 bg-main mx-auto flex justify-center items-center rounded-[32px] cursor-pointer"
            target="_blank"
          >
            加入社群
          </a>
        </Link>
        <div className="block-container grid grid-cols-2 lg:grid-cols-3 gap-3 lg:w-[700px] mx-auto mt-8">
          {itemBlocksContent.map((item, index) => {
            return (
              <div key={index} className="flex justify-center">
                <ItemBlock
                  icon={item.icon}
                  desc1={item.desc1}
                  desc2={item.desc2}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="background fixed z-[0] top-1/2 left-0 w-screen h-screen flex justify-center items-center z-0">
        <div className="absolute circle w-[1000px] h-[1000px] bg-[#0D3B94] opacity-20 rounded-full  blur-[100px]" />
      </div>
    </div>
  )
}

export default Home
