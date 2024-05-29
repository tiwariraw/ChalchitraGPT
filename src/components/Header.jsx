import logo from "../assets/images/logo.png";

const Header = () => {
  // when clicked on logo, the page reloads
  const handleImgClick = () => {
    window.location.reload();
  };

  return (
    <div className="header w-full absolute z-10 bg-gradient-to-b from-black px-8 py-6 flex justify-between items-center">
      <img
        className="w-80 cursor-pointer"
        src={logo}
        alt="logo"
        onClick={handleImgClick}
      />
      <img
        src="https://avatars.githubusercontent.com/u/6759280?v=4"
        alt="user-icon"
        className="w-10 cursor-pointer"
      />
    </div>
  );
};

export default Header;
