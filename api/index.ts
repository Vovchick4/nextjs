import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore"

import { IAppsData, ISendDataOnEmail } from "./interfaces"
import { auth, firestore } from "@/processes/firebase"

export const getApps: (category: string) => Promise<IAppsData[]> = async (category: string) => {
    const q = query(collection(firestore, "apps"), where("category", "==", category))
    const data = (await getDocs(q)).docs
    return data.map(doc => ({ id: doc.id, ...doc.data() })) as IAppsData[]
}

export const onSendEmailForm = async (data: ISendDataOnEmail, onFinally: () => void, onSuccess: () => void, onError: (err: string) => void) => {
    try {
        await signInWithEmailAndPassword(auth, 'ch.vova321@gmail.com', '11111111')
        await sendPasswordResetEmail(auth, data.tel)
        onSuccess()
    } catch (err) {
        onError((err as Error).message)
    } finally {
        onFinally()
    }
}
