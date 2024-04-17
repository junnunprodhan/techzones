'use client'

import React, { useState } from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import TopRatedModal from './TopRatedModal';

interface Product {
    id: number;
    name: string;
    // Add other properties as needed
}



const TopRatedIcons= () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <HiOutlineEye
                onClick={handleOpen}
                className="startIcon startIcon2 cursor-pointer"
                size={30}
            />

            {open && <TopRatedModal onClose={handleClose} />}
        </div>
    );
};

export default TopRatedIcons;
