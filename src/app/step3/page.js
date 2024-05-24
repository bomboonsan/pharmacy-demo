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
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่งที่ปวด</li>
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step2")}}>ระดับความปวด</li>
                    <li className="step step-primary">วิเคราะห์</li>
                </ul>
            </div>

            <div className="relative w-[80%] mx-auto mb-5">
                <h1 className="page-title mb-10">
                    ปวดหัวเข่า
                </h1>
                <div className="text-center mb-10">
                    <Image className="block w-[120px] h-auto mx-auto" src="/images/result/demo1.png" alt="step1" width={500} height={500} />
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => {router.push("/detail")}}>
                    <h2 className="text-xl font-bold mb-1">ข้อเท้าพลิกหรือข้อเท้าแพลง</h2>
                    <p>
                    lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => {router.push("/detail")}}>
                    <h2 className="text-xl font-bold mb-1">เอ็นร้อนหวายอักเสบ</h2>
                    <p>
                    lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => {router.push("/detail")}}>
                    <h2 className="text-xl font-bold mb-1">โรคเก๊าท์</h2>
                    <p>
                    lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                </div>
                <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => {router.push("/detail")}}>
                    <h2 className="text-xl font-bold mb-1">โรคข้อเสือม</h2>
                    <p>
                    lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                </div>
            </div>


        </div>
    );
}
