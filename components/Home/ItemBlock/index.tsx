import Icon from "../../shared/Icon";

interface ItemBlockProps {
  icon: string;
  desc: string;
}

const ItemBlock = (props: ItemBlockProps) => {
  const { icon, desc } = props;
  return (
    <div className="w-56 h-36 bg-[#f8fafc] rounded-2xl flex flex-col justify-between items-center pt-[22px] pb-4 px-10">
      <Icon path={icon} width={36} height={36} />
      <div className="desc text-xl font-semibold text-mainDark">{desc}</div>
    </div>
  );
}

export default ItemBlock;