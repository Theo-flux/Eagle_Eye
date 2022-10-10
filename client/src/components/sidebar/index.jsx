import React from 'react';

const sidebar_items = [
  {
    id: '1',
    unactiveIcon: 'ri-home-line',
    activeIcon: 'ri-home-fill',
    item: 'Home',
  },

  {
    id: '2',
    unactiveIcon: 'ri-wallet-line',
    activeIcon: 'ri-wallet-fill',
    item: 'Report',
  },

  {
    id: '3',
    unactiveIcon: 'ri-wallet-line',
    activeIcon: 'ri-wallet-fill',
    item: 'Report',
  },
];

function Sidebar() {
  return (
    <div className="bg-white fixed w-fit h-[100vh]">
      <div className={`py-24`}>
        {sidebar_items.map((sidebar_item, index) => {
          const { unactiveIcon, activeIcon, item } = sidebar_item;
          return (
            <span
              key={index}
              className={`transition-all duration-300 ease-in-out cursor-pointer group hover:bg-resblue py-3 px-12 mb-4 flex items-center`}
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
