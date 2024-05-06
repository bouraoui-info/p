"use client";
import React from "react";
import TableWrapper from "../Components/TableWrapper";
import AddCategorie from "./AjouterCategories";

const AdminMenuTable = () => {
    const handleDelete = (id: number) => {
        // API call to delete the restaurant with the given ID
        fetch(`http://localhost:3001/api/restaurant/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    const handleCategories = (id: number) => {
        // API call to retrieve the categories for the restaurant with the given ID
        fetch(`http://localhost:3001/api/restaurant/${id}/categories`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };


    const [shopList, setShopList] = React.useState<any>([]);
    const getShopList = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/restaurant`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData = await response.json();
            console.log({ jsonData });
            setShopList(jsonData);
            localStorage.setItem("shopLength", jsonData.length);
        } catch (e) {
            console.error("Login error", e);
        }
    };

    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        getShopList();
    }, []);

    return (
        <TableWrapper title={"All Restaurants"}>
            <table className="w-full text-left text-slate-500">
                <thead className="text-xs overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <input
                                className="w-4 h-4 accent-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                                type="checkbox"
                            />
                        </th>
                        <th scope="col" className="px-6 py-3">
                            IdResto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Adress
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Town
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Categories
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {shopList.map((item: any, id: number) => (
                        <tr key={id}>
                            <td className="px-6 py-3">
                                <input
                                    className="w-4 h-4 accent-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                                    type="checkbox"
                                />
                            </td>
                            <td className="px-6 py-3">{item.resto.id}</td>
                            <td className="px-6 py-3">{item.resto.Name}</td>
                            <td className="px-6 py-3">{item.resto.Address}</td>
                            <td className="px-6 py-3">{item.resto.town}</td>
                            <td className="px-6 py-3">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(item.resto.id)}
                                >
                                    Supprimer le restaurant
                                </button>
                            </td>
                            <td className="px-6 py-3">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => setShowModal(true)}
                                >
                                    Ajouter Categories
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <AddCategorie
                showModal={showModal}
                setShowModal={setShowModal}
                setUpdate={() => { }}
                Update={false}
            />
        </TableWrapper>
    );
};

export default AdminMenuTable;