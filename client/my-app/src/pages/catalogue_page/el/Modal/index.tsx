import * as React from 'react';
import IProduct from '../../../../common/interfaces/IProduct';

const Modal = ({id, image, name, price, description}: IProduct) => {
    return (
        <dialog id={`modal-${id}`} className="product-modal">
            <img src={image} alt="" width={255} height={255} />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
        </dialog>
    );
}

export default Modal;