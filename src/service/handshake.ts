import { request } from "./endPoint"


export const handShake = async (parameters: any) => 
{
	const {url, method, data, isHeader, token} = parameters
	let responseData: any[] = []
	if(url.length === 1)
	{
		return await request({ url: url[0], method: method, data: data, isHeader: isHeader, token: token })
	} else {
		for (let index = 0; index < url.length; index++) 
		{
			let serverResponse = await request({ url: url[index], method: method, data: data, isHeader: isHeader, token: token })
			responseData.push(serverResponse)		
		}
		return responseData
	}
}





























// const roles: any = allRolesAndPermissions[0].data.data
// const permissions: any = allRolesAndPermissions[1].data.data
// const allRolesAndPermissionFromDb: any = { roles, permissions }
// return allRolesAndPermissionFromDb



// export const authenticate = async (parameters: IhandShake) => 
// {
// 	const {url, method, data, isHeader, token} = parameters
// 	return await request({ url: url[0], method: method, data: data, isHeader: isHeader })
// }

// export const allRolesAndPermissions = async (url: string[], method: string, data: any, isHeader: boolean) => 
// {
// 	const allRoles = await request({ url: url[0], method: method, data: data, isHeader: isHeader })
// 	const allResource = await request({ url: url[1], method: method, data: data, isHeader: isHeader })
// 	return { allRoles, allResource }
// }

// export const allResourcesFromDB = async (url: string, method: string, data: any, isHeader: boolean) => 
// {
// 	return await request({ url: url, method: method, data: data, isHeader: isHeader })
// }