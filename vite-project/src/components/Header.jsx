const Header = ({ name, children }) => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between items-center flex-wrap">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div>
        {children}
      </div>
    </header>
  );
};

export default Header;