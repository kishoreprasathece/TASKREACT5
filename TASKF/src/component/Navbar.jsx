import React from 'react';
import Content from './Content';

const Navbar = () => {
    return (
        <div>
          <h1 className="text-xl  bg-black w-full h-24 p-3 font-rig text-white flex justify-center">ALPHA LIFE STYLE</h1>
          <img class="h-12 ml-3" src="" />
          <button>add</button>
                  <Content/>
        </div>
    );
};

export default Navbar;