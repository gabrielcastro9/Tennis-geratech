import { socialIcons, infoLinks, categoryLinks, contactInfo } from "./data";
import { InfoLinksProps, ContactInfoProps } from "./types";

const SocialIcons: React.FC = () => (
  <div className="flex items-center">
    {socialIcons.map((icon, index) => (
      <img
        key={index}
        src={icon.src}
        alt={icon.alt}
        className={icon.className || ""}
      />
    ))}
  </div>
);

const InfoLinks: React.FC<InfoLinksProps> = ({ title, links }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-md md:text-lg">{title}</h1>
    {links.map((link, index) => (
      <p key={index} className="py-1.5 text-sm cursor-pointer">
        {link}
      </p>
    ))}
  </div>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ title, info }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-md md:text-lg">{title}</h1>
    {info.map((item, index) => (
      <p key={index} className="py-1.5 text-sm cursor-pointer">
        {item}
      </p>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="px-6 pt-6 md:px-28 md:pt-12">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start md:mr-20 mb-8 md:mb-0">
            <div className="flex items-center">
              <img
                src="icon_drip_store_white.svg"
                alt="Digital Store Logo"
                className="w-7 h-7 md:w-10 md:h-10"
              />
              <h1 className="text-lg md:text-4xl font-bold pl-2 md:w-[270px]">
                Digital Store
              </h1>
            </div>
            <p className="py-4 md:py-8 text-center text-sm md:text-base md:text-left max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <SocialIcons />
          </div>
          <div className="flex flex-col md:flex-row justify-around w-full">
            <InfoLinks title="Informação" links={infoLinks} />
            <InfoLinks title="Categorias" links={categoryLinks} />
            <ContactInfo title="Contato" info={contactInfo} />
          </div>
        </div>
        <span className="block md:absolute mt-10 h-0.5 bg-white w-full md:w-10/12 mx-auto"></span>
        <div className="flex justify-center">
          <p className="py-3 md:pt-12">&#64; 2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
}
