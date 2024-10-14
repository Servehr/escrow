import React from 'react';
import './index.css'

type ModalPropos = 
{
    children?: React.ReactNode,
    overLay?: string, 
    isOpen: boolean,
    onClick: (isOpen: boolean) => void,
    color?: string, 
    text?: string, 
    size?: string,
    state?: string,
    title?: string,
    heading?: string,
    centralize?: boolean,
    wrapperWidth?: number,
    margin?: string, 
    content?: string
}
// overLay = 'react-modal-overlay'

export const Modal = ({children, overLay = 'react-modal-overlay', isOpen, onClick, wrapperWidth=500, margin, content=''}: ModalPropos)  =>
{
    // const css = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`  
    // const center = centralize ? `modal-dialog-centered` : ''
    // const width = `modal-dialog-${size}`
    // const style = `modal-dialog ${width} ${center}`
    const overlay = overLay
    
    return (
          <>
              {
                isOpen && (
                  <div className={`${overlay} z-50`} onClick={() => onClick(isOpen)}>
                    <div className="react-modal-wrapper rounded-none" onClick={(e) => e.stopPropagation()} style={{maxWidth: `${wrapperWidth}px`, margin: `${margin}`}}>
                      <div className={`react-modal-content mx-3 ${content}`}>

                         <div>
                          {children}
                         </div>
                      </div>
                    </div>
                  </div>
                )
              }
          </>     
    );
}
