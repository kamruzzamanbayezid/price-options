import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';

const Navigation = () => {

      const [open, setOpen] = useState(false);

      const routes = [
            { id: 1, name: 'Home', path: '/' },
            { id: 2, name: 'About', path: '/about' },
            { id: 3, name: 'Contact', path: '/contact' },
            { id: 4, name: 'Blog', path: '/blog' },
            { id: 5, name: 'Services', path: '/services' },
            { id: 6, name: 'NotFound', path: '*' }
      ];

      return (
            <div className="">
                  <div onClick={() => setOpen(!open)} className="text-2xl md:hidden text-white">
                        {
                              open ? <RxCross1>
                                    <ul className="md:flex">
                                          {
                                                routes.map(route => <Navbar key={route.id} route={route}></Navbar>)
                                          }
                                    </ul>
                              </RxCross1> : <FaAlignJustify></FaAlignJustify>
                        }
                  </div>
                  <ul className={`${open ? 'top-16' : '-top-96'} duration-1000 md:flex absolute md:static md:bg-inherit bg-gray-400 rounded-b-xl`}>
                        {
                              routes.map(route => <Navbar key={route.id} route={route}></Navbar>)
                        }
                  </ul>
            </div>
      );
};

export default Navigation;