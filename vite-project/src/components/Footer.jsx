const Footer = ({ name, children }) => {
  return (
    <footer className="bg-gray-800 text-white p-5 text-center mt-auto">
      <p>{name}</p>
      <div className="mt-2 flex justify-center gap-5">
        {children}
      </div>
    </footer>
  );
};

export default Footer;