import React, { useEffect, useState } from 'react';

const Modal = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setProject(data))

    }, [project])
    return (
        <div>

            <label htmlFor="my-modal-6" className="btn">Details</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="text-black bg-white p-4">{project.name}</p>
                    <img src='' alt="" />
                    <p className="text-black bg-white p-4 text-2xl font-bold">{ }</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;