import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import { store } from "@/app/store";
import { useSnapshot } from "valtio";
import toast from "react-hot-toast";

export default function AdminDeleteCategory({ idCat }: any) {
    const { selectedResto, selectedCat } = useSnapshot(store);

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const OpenModal = () => setIsOpen(true);
    // const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        // setShowModal(false);
        try {
            const response = await fetch(`http://localhost:3001/api/restaurant/${selectedResto}/${idCat}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error('Failed to delete the category');
            }
            await response.json();
            toast.success('Category successfully deleted');
            router.push("/dashboard/menu/ListCategories");
        } catch (error) {
            toast.error('Error: Unable to delete category');
            console.error(error);
        }
    }


    return (
        <>
            <HiOutlineTrash
                onClick={OpenModal}
                className="cursor-pointer h-6 w-6 text-red-500"
            />
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmation</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this Category?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>No, cancel</button>
                                <button type="button" className="btn btn-danger" onClick={() => { handleDelete(); closeModal(); }}>Yes, I'm sure</button>
                            </div>
                        </div>
                    </div>
                </div>


            </Modal>
        </>
    );
}
