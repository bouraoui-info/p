"use client";

import { HiOutlineSearch, HiOutlineUpload, HiPlus } from "react-icons/hi";
import { usePathname } from "next/navigation";
import OrdersFilter from "../orders/OrdersFilter";
import AddCategorie from "../menu/AjouterCategories";
import { useState } from "react";
import Addresto from "@/app/AddRestaurant/addresto";
import AddProduit from "../menu/AddProduit";


const SearchAndFilter = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [showProduitModal, setShowProduitModal] = useState(false);
  const [showRestaurantModal, setShowRestaurantModal] = useState(false);

  const handleAddCategorieClick = () => {
    setShowModal(true);
  };

  const handleAddRestaurantClick = () => {
    setShowRestaurantModal(true);
  };

  const handleAddProduitClick = () => {
    setShowProduitModal(true);
  };
  return (
    <div className="flex flex-col md:flex-row  z-10 items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/2">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiOutlineSearch
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
              />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg  block w-full pl-10 p-2"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
        {pathname === "/dashboard/menu" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                type="button"
                className="text-white inline-flex items-center whitespace-nowrap bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleAddRestaurantClick}
              >
                <HiPlus className="mr-1 -ml-1 w-4 h-4" />
                Ajouter Restaurant
              </button>
            </div>
            <Addresto showModal={showRestaurantModal} setShowModal={setShowRestaurantModal} />
          </>
        )}

        {pathname === "/dashboard/menu/ListCategories" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                type="button"
                className="text-white inline-flex items-center whitespace-nowrap bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleAddCategorieClick}
              >
                <HiPlus className="mr-1 -ml-1 w-4 h-4" />
                Ajouter Categories
              </button>
            </div>
            <AddCategorie showModal={showModal} setShowModal={setShowModal} />
          </>
        )}
        {pathname === "/dashboard/menu/ListProduit" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                type="button"
                className="text-white inline-flex items-center whitespace-nowrap bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleAddProduitClick}

              >
                <HiPlus className="mr-1 -ml-1 w-4 h-4" />
                Ajouter Produit
              </button>
              <AddProduit showModal={showProduitModal} setShowModal={setShowProduitModal} />
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
            </div>
          </>
        )}
        {pathname === "/dashboard/orders" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                type="button"
                className="text-white inline-flex items-center whitespace-nowrap bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <HiOutlineUpload className="mr-1 -ml-1 w-4 h-4" />
                Export
              </button>
            </div>
          </>
        )}
      </div>

      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        {pathname === "/dashboard/orders" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <OrdersFilter />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;