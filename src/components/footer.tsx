
const Footer = () => {
    return (
      <div className="md:max-w-[1920px] h-[240px] bg-gradient-to-r from-pink-300 via-pink-300 to-pink-300 p-6 text-white ">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-4">
            <p className="font-medium mb-2">
              &copy; 2024 Aqsa ♡ | Todo List
            </p>
            <p className="text-sm text-xl text-bold">"Your future is created by what you do today, not tomorrow."</p>
          </div>
          <div className="mt-4 text-sm">
            <p>Feedback related to this Assignment♡</p>
            <p>
              <a
                href="mailto:aqsaqurayshi@gmail.com"
                className="text-white-300 hover:text-pink-100 transition"
              >
                aqsaqurayshi@gmail.com
              </a>
            </p>
            <p className="font-bold">Roll no. 00136849</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;