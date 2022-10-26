import Icon from "components/shared/Icon";
import Link from "next/link";
import { socialMediaIcons } from "./constants";

const Footer = () => {
  return (
    <footer className="relative md:absolute bottom-0 left-0 w-full h-20 py-6 px-6 lg:px-16 flex justify-between items-center z-10">
      <div className="left-container">
        <div className="love-text font-bold text-[#64748B] text-xs md:text-sm">Made with love</div>
      </div>
      <div className="right-container flex">
        {
          socialMediaIcons.map((icon, index) => {
            return (
              <Link href={icon.link} key={index}>
                <a target="_blank" className="icon-wrapper ml-2">
                  <Icon path={icon.path} width={icon.width} height={icon.height} />
                </a>
              </Link>
            )
          })
        }
      </div>
    </footer>
  );
}

export default Footer;