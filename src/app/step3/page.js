'use client'

import Image from "next/image";
import Step from "@/components/Step";

import { TypeAnimation } from 'react-type-animation';

import { useState } from "react";


// import router
import { useRouter } from 'next/navigation'

export default function Step3() {
    const router = useRouter()
    


    return (
        <div className="p-5">
            <div className="text-center mb-10">
                <ul className="steps steps-horizontal w-full text-white">
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่ง</li>
                    <li className="step step-primary" onClick={() => {router.push("/step2")}}>ระดับความปวด</li>
                    <li className="step step-primary">คำแนะนำ</li>
                    <li className="step">ยาที่ได้รับ</li>
                    <li className="step">สรุป</li>
                </ul>
            </div>

            <div className="relative w-[80%] mx-auto mb-5">
                <h1 className="page-title mb-10">
                    กลางหลัง
                </h1>
                <div className="text-center mb-10">
                    <Image className="block w-[120px] h-auto mx-auto" src="/images/result/demo2.png" alt="step1" width={500} height={500} />
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                    <h2 className="text-2xl font-bold mb-1">กล้ามเนื้ออักเสบ</h2>
                    <p className="text-lg">
                    ยกของหนัก ถือของหนัก ก้มยกของผิดวิธี
                    </p>
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <h2 className="text-2xl font-bold mb-1">หมอนรองกระดูกสันหลัง</h2>
                    <p className="text-lg">
                    ปวดแนวกระดูกกลางหลัง
                    </p>
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <h2 className="text-2xl font-bold mb-1">เส้นประสาทอาจถูกกดเบียด</h2>
                    <p className="text-lg">
                    ปวดร้าวเหมือนไฟฟ้าช็อต
                    </p>
                </div>
                {/* <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => {router.push("/detail")}}>
                    <h2 className="text-xl font-bold mb-1">ระบบเส้นประสาทผิดปกติ</h2>
                    <p>
                    ปวดร่วมกับมีอาการชา-อ่อนแรง
                    </p>
                </div> */}
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-[350px]">
                    <h3 className="font-bold text-2xl">กล้ามเนื้ออักเสบ</h3>
                    <p className="py-4 text-lg">อาการที่เกิดจากการอักเสบของกล้ามเนื้อ ซึ่งสามารถทำให้มีอาการปวด บวม และอ่อนแรง อาจเกิดจากการใช้งานกล้ามเนื้อหนักเกินไป การบาดเจ็บ หรือการติดเชื้อ</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box max-w-[350px]">
                    <h3 className="font-bold text-2xl">หมอนรองกระดูกสันหลัง</h3>
                    <p className="py-4 text-lg">ภาวะที่หมอนรองกระดูกสันหลังซึ่งทำหน้าที่เป็นเบาะรองรับแรงกระแทกระหว่างกระดูกสันหลังเคลื่อนหรือยื่นออกมากดทับเส้นประสาท อาจทำให้มีอาการปวดหลัง ปวดร้าวไปยังขาหรือแขน อาการชาหรืออ่อนแรงในบางครั้ง</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-[350px]">
                    <h3 className="font-bold text-2xl">เส้นประสาทอาจถูกกดเบียด</h3>
                    <p className="py-4 text-lg">เกิดจากเส้นประสาทถูกกดหรือบีบรัดจากโครงสร้างต่าง ๆ ในร่างกาย เช่น กระดูกสันหลัง หมอนรองกระดูก หรือกล้ามเนื้อ ทำให้เกิดอาการปวด ชา หรืออ่อนแรงในบริเวณที่เส้นประสาทนั้นควบคุม</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <div className="text-center mt-10">
                <button className="btn btn-wide btn-primary text-white text-2xl" onClick={() => {router.push("/step4")}}>ถัดไป</button>
            </div>
        </div>
    );
}
