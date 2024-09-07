import { StateCreator } from "zustand";

type Notifiaction={
    text:string
    error:boolean
    show:boolean
}
export type NotiSliceType={
   notification:Notifiaction
   showNoti:(payload:Pick<Notifiaction, 'text' | 'error'>)=>void
   hideNoti: () => void
}
export const createNoti: StateCreator<NotiSliceType>=(set)=>({
   notification:{
    text:'',
    error:false,
    show:false
   },
   showNoti:(payload)=>{
        set({
            notification:{
                text:payload.text,
                error:payload.error,
                show:true
            }
        })
        setTimeout(()=>{
            set({
                notification:{
                    text:'',
                    error:false,
                    show:false
                }
            })
        },5000);
   },
   hideNoti:()=>{
    set({
        notification:{
            text:'',
            error:false,
            show:false
        }
    })
   }
})