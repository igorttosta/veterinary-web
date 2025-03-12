"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import SortIcon from '@mui/icons-material/Sort';
import ProductList from "@/components/product/ProductList";
import FilterSidebar from "@/components/toolbar/FilterBar"; 

export default function StorePage() {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <SortIcon 
                    className="cursor-pointer"
                    onClick={() => setIsFilterOpen(true)} 
                />
                <ProductList />
            </div>
            <FilterSidebar 
                isOpen={isFilterOpen} 
                onClose={() => setIsFilterOpen(false)} 
            />
        </DashboardLayout>
    );
}
