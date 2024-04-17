// ProductIcons.tsx
 'use client'

import React, { useState } from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import ProductModal from './ProductModal';

interface TProduct {
    id: number;
    name: string;
    data: {
        name: string;
        image: string;
    };
}

interface ProductIconsProps {
    product: TProduct;
}

const ProductIcons: React.FC<ProductIconsProps> = ({ product }) => {
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

            {open && <ProductModal product={product} onClose={handleClose} />}
        </div>
    );
};

export default ProductIcons;
