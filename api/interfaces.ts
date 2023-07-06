export interface IAppsData {
    id: string
    name: string
    image: string
    category: string
    link: string
}

export interface ISendDataOnEmail {
    [key: string]: string
    name: string
    email: string
    tel: string
    message: string
}