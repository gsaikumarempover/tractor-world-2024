import React from 'react';

const Tab = ({ id, activeTab, onClick, children }) => {
    return (
        <div
            className={`${activeTab === id ? 'text-secondaryColor border-b-2 border-secondaryColor' : 'text-[#00000080]'} sm:text-[15px] text-[11px] cursor-pointer`}
            onClick={() => onClick(id)}
        >
            {children}
        </div>
    );
};

export default Tab;
