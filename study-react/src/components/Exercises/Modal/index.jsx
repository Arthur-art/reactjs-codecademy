import style from './style.module.scss'
import React, { useState } from 'react'

export const Modal = () => {
    const [modal, setModal] = useState({
        modal: true,
    })

    const handleChangeModal = () => {
        setModal({
            modal: false
        })
    }


    const ModalIndex = (
        <>

            <div className={style.modalOverlay}>
                <div className={style.modal}>
                    <div className={style.form}>
                        <div>
                            <h1>Para realizar o seu agendamento online:</h1><br />
                            <h2>- Esteja com o seu pedido médico.<br />
                    - É cliente Unimed? Tenha seu número da carteirinha.</h2>
                            <p>*Obs: Ao clicar em confirmar você aceita ser contactado pelo whatsapp, para fins desse agendamento.</p>
                            <button onClick={handleChangeModal}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

    return (
        <>
            {modal.modal && ModalIndex}
        </>
    )
}

