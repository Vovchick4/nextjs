import { collection, getDocs, query, where } from "firebase/firestore"

import { IAppsData } from "./interfaces"
import { firestore } from "@/processes/firebase"

export const getApps: (category: string) => Promise<IAppsData[]> = async (category: string) => {
    console.log("🚀 ~ file: index.ts:11 ~ constgetApps: ~ category:", category)
    const q = query(collection(firestore, "apps"), where("category", "==", category))
    const data = (await getDocs(q)).docs
    return data.map(doc => ({ id: doc.id, ...doc.data() })) as IAppsData[]
}
