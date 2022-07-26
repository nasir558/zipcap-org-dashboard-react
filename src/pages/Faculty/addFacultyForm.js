import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../../assets/images/close-icon.png';

const Modal = () => {
    const [open, setOpen] = useState(false)
    const [department, setDepartment] = useState(null);

    const cancelButtonRef = useRef(null)

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    auto-reopen="true"
                    className="fixed z-20 inset-0 overflow-y-auto py-10 px-6 attendanceModal"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <div className="flex justify-center min-h-screen sm:block">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>


                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="block modalContent mx-auto overflow-hidden transform transition-all my-8 align-middle  modalBody">
                                <div className="bg-white p-4 lg:p-8 modalContent mx-auto">
                                    <button type="button" onClick={() => setOpen(false)} className="float-right">
                                        <img src={CloseIcon} alt="" className="w-16px h-auto" />
                                    </button>
                                    <div className="block w-full">

                                        <div className="mt-3 text-center">

                                            <div className="mt-6 lg:mt-14 greyText text-sm leading-6">

                                                <form ref={cancelButtonRef}>
                                                    <div className="grid grid-cols-1 gap-6 mt-5">
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                First Name
                                                            </span>
                                                            <div className="mt-3">
                                                                <input
                                                                    type="text"
                                                                    name=""
                                                                    placeholder="Enter first name"
                                                                    className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                />
                                                            </div>
                                                        </label>
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                Last Name
                                                            </span>
                                                            <div className="mt-3">
                                                                <input
                                                                    type="text"
                                                                    name=""
                                                                    placeholder="Enter last name"
                                                                    className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                />
                                                            </div>
                                                        </label>
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                Email
                                                            </span>
                                                            <div className="mt-3">
                                                                <input
                                                                    type="text"
                                                                    name=""
                                                                    placeholder="Enter email address"
                                                                    className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                />
                                                            </div>
                                                        </label>
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                Department
                                                            </span>
                                                            <div className="mt-3">
                                                                <select
                                                                    value={department}
                                                                    onChange={e => setDepartment(e.target.value)}
                                                                    className={`rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300 ${department === null ? ("placeHolderText") : null}`}>
                                                                    <option className="hidden" selected>Select Department</option>
                                                                    <option value="one">One</option>
                                                                    <option value="two">Two</option>
                                                                    <option value="three">Three</option>
                                                                </select>
                                                            </div>
                                                        </label>
                                                        <p className="text-sm greyText text-left">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-center formBtns mt-7">
                                                            <button
                                                                type="reset"
                                                                onClick={() => setOpen(false)}
                                                                className="redBorder shadow-md rounded-lg redText hover:bg-black hover:text-white hover:border-black text-sm font-medium capitalize px-10 py-3 transition-all duration-300"
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="red2Bg shadow-md rounded-lg text-white hover:bg-black text-sm font-medium capitalize px-10 py-3 transition-all duration-300"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-2.5 py-3.5 rounded-lg transition-all duration-300"
            >
                Add Faculty Member
            </button>
        </div>
    );
};

export default Modal;
