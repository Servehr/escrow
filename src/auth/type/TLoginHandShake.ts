import { IRegistration } from "../Interface/IRegistration"

export type TLoginHandShake = 
{
    url: string[],
    method: string,
    data: IRegistration,
    isHeader: boolean,
	token?: string,
    dataType?: string,
    crossDomain?: boolean
}