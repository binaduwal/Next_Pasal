import { footerLinks } from "@/constants";

const Footer = () => {

  return (
    <div className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  font-medium gap-6 mt-6">
      {footerLinks.map((item) => (
        <div key={item.id} > 
          <p className="text-orange-500 text-lg mb-2 " >{item.title}</p>
          <div className="flex flex-col gap-2">
            {
                item.links.map((link,index) => (
                  <p key={index}  className="text-black hover:text-orange-500 cursor-pointer transition-all">
                    {link}
                  </p>
                ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
