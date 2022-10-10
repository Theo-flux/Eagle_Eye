import React from 'react';

const sidebar_items = [
  {
    id: '1',
    unactiveIcon: 'ri-home-line',
    item: 'Home',
  },

  {
    id: '2',
    unactiveIcon: 'ri-wallet-line',
    item: 'Report & Earn',
  },

  {
    id: '3',
    unactiveIcon: 'ri-arrow-up-circle-line',
    item: 'Vote',
  },
];

function Sidebar({ openSidebar }) {
  return (
    <div
      className={`
        fixed ${openSidebar ? 'left-0' : 'left-[-500px]'}
        md:sticky z-50 top-0 bg-white md:w-[350px]
        h-[100vh] transition-all duration-300 ease-in-out
      `}
    >
      <div className={`py-12`}>
        {sidebar_items.map((sidebar_item, index) => {
          const { unactiveIcon, item } = sidebar_item;
          return (
            <span
              key={index}
              className={`transition-all duration-300 ease-in-out cursor-pointer group hover:bg-resblue py-3 px-6 lg:px-12 mb-4 flex items-center`}
            >
              <i
                className={`transition-all duration-300 ease-in-out text-xl mr-4 group-hover:text-white ${unactiveIcon}`}
              ></i>
              <p
                className={`transition-all duration-300 ease-in-out group-hover:text-white`}
              >
                {item}
              </p>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
