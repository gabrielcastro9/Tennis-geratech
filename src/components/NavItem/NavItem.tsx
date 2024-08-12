import "./styles.css";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ label, isActive, onClick }: NavItemProps) => {
  return (
    <div className="flex items-center">
      <h2
        onClick={onClick}
        className={`relative text-xl font-bold mx-6 cursor-pointer ${
          isActive ? "text-primary active" : "text-[#474747]"
        } transition-colors duration-300 ease-in-out`}
      >
        {label}
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-500 ease-in-out ${
            isActive ? "w-full" : "w-0"
          }`}
        ></span>
      </h2>
    </div>
  );
};

export default NavItem;
