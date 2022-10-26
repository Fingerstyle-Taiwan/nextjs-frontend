interface MenuToggleProps {
  show: boolean;
  setShow: (show: boolean) => void
}

const MenuToggle = (props: MenuToggleProps) => {
  const { show, setShow } = props;
  return (
    <div
      className="w-10 h-10 bg-[#E2E8F0] rounded-full flex justify-center items-center px-3 py-3.5"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className="inner-container w-full h-full relative">
        <div className={`line-1 w-full h-0.5 bg-black rounded-full duration-300 absolute ${show ? 'top-1/2 -translate-y-1/2 rotate-[45deg]' : 'top-0'}`} />
        <div className={`line-2 w-full h-0.5 bg-black rounded-full duration-200 absolute top-1/2 -translate-y-1/2 ${show ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`line-3 w-full h-0.5 bg-black rounded-full duration-300 absolute ${show ? 'top-1/2 -translate-y-1/2 rotate-[-45deg]' : 'bottom-0'}`} />
      </div>
    </div>
  );
}

export default MenuToggle;