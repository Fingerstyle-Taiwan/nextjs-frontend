import Icon from '../../utils/Icon'

interface ItemBlockProps {
  icon: string
  desc1: string
  desc2: string
}

const ItemBlock = (props: ItemBlockProps) => {
  const { icon, desc1, desc2 } = props
  return (
    <div className="w-56 h-36 bg-[#f8fafc] rounded-2xl flex flex-col justify-between items-center pt-[22px] pb-4">
      <Icon path={icon} width={36} height={36} />
      <div>
        <div className="desc text-base lg:text-xl font-semibold text-mainDark">
          {desc1}
        </div>
        <div className="desc text-base lg:text-xl font-semibold text-mainDark">
          {desc2}
        </div>
      </div>
    </div>
  )
}

export default ItemBlock
