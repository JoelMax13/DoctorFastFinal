import React from "react";
import styled from "styled-components";

const Modal = ({children, estado, cambiarEstado}) =>{
    return(
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        

                        <BotonCerrar onClick={()=>cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </BotonCerrar>

                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    );
}
export default Modal;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items:center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 50vh;
    background: #fff;
    position: fixed;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

// const EncabezadoModal = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 20px;
//     padding-bottom: 20px;
//     border-bottom: 1px solid #E8E8E8;

//     h2{
//         font-weight: 500;
//         font-size: 20px;
//         color: #1766DC;
//     }
// `;

const BotonCerrar = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }
    svg{
        width:100%;
        height:100%
    }
`;