import { Modal } from "../../../../component/Modal";

type RejectedMessageProps = 
{
    onClick: (isOpen: boolean | string) => void,
    rejectedMessageModal: boolean,
    acceptOrReject?: string,
    returnTo?: string,
    msg?: any,
} 

export const RejectedMessage = ({onClick, rejectedMessageModal, msg}: RejectedMessageProps)  =>
{
        return (
                <Modal 
                        onClick={onClick} isOpen={rejectedMessageModal} wrapperWidth={1000} margin={'85px auto 0px auto'}
                >
                        <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll text-black text-2xl justify-center item-center h-[250px] border-2 border-gray-200 p-3 rounded-lg mb-10'
                        >
                                {msg}
                        </div>
                        <button 
                                className="py-4 px-4 bg-black hover:bg-gray-700 text-white font-semibold text-sm rounded-xl w-fit"
                                onClick={() => onClick(!rejectedMessageModal) }
                        >
                                Close
                        </button>
                </Modal>  
        );
}