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
            <ul className="steps steps-horizontal w-full text-white">
                <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่ง</li>
                <li className="step step-primary">ระดับความปวด</li>
                <li className="step step-primary">คำแนะนำ</li>
                <li className="step step-primary">ยาที่ได้รับ</li>
                <li className="step step-primary">สรุป</li>
            </ul>
            <div className="mb-5"></div>
            <div className="relative">
                <div className="backdrop-blur-sm bg-white/30 rounded-md shadow shadow-neutral-400/30 px-3 py-2 text-black font-medium w-full mb-10 p-5">
                    <h1 className="text-2xl font-medium text-black mb-3 text-center">
                        สรุป
                    </h1>
                    <div className=" mr-3">
                        <img className="block w-[100px] h-auto mx-auto" src="/images/result/demo2.png" alt="step1" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium text-black my-3 text-center">
                        ปวดกลางหลัง
                    </h1>
                    <div className="text-lg font-normal">
                        <p className="mb-2">
                            <strong>ตำแหน่งอาการ</strong> : lorem ipsum dolor sit amet
                        </p> 
                        <p className="mb-2">
                            <strong>ลักษณะการปวด</strong> : ipsum dolor sit amet
                        </p> 
                        <p className="mb-2">
                            <strong>วันที่เริ่มปวด</strong> : 14 ธันวาคม 2566
                        </p> 
                        <p className="mb-2">
                            <strong>ยาที่รับประทาน</strong> : ยาที่ 1, ยาที่ 2, ยาที่ 3
                        </p> 
                    </div>
                </div>
                
            </div>



            <div className="text-center mt-20">
                <button className="btn btn-wide btn-primary text-white text-xl md:text-lg" onClick={() => {router.push("/")}}>บันทึก</button>
            </div>
        </div>
    );
}
