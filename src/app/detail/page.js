'use client'

import Image from "next/image";
import Step from "@/components/Step";

import { TypeAnimation } from 'react-type-animation';

import { useState } from "react";


// import router
import { useRouter } from 'next/navigation'
// import { TypeAnimation } from 'react-type-animation';

export default function Step3() {
    const router = useRouter()
    


    return (
        <div className="p-5">
            <div className="mb-5"></div>
            <div className="relative">
                <h6 className="text-black text-xl font-semibold mb-5 inline-flex items-center gap-3 cursor-pointer" onClick={() => router.back()}>                  
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
                    ย้อนกลับ
                </h6>
                <div className="box w-full mb-10">
                    <h1 className="text-2xl md:text-3xl font-medium text-black mb-3">
                        กล้ามเนื้ออักเสบ
                    </h1>
                    <div className="float-left mr-3">
                    <img className="block w-[100px] h-auto mx-auto" src="/images/result/demo2.png" alt="step1" />
                    </div>
                    <p className="mb-5">
                        lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p> 
                </div>

                <div className="my-10">
                    <h2 className="text-xl md:text-2xl text-black mb-2 font-bold">ค้นหายาที่ต้องการ</h2>
                    <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>

                <h2 className="text-xl md:text-2xl text-black mb-2 font-bold">ยาที่ได้รับ</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => router.push('/detail/id')}>
                        <h2 className="text-xl font-bold mb-1">ยา XXX</h2>
                        <p className="text-sm">
                            generic name : xxxx
                        </p>
                    </div>
                    <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer" onClick={() => router.push('/detail/id')}>
                        <h2 className="text-xl font-bold mb-1">ยา YYY</h2>
                        <p className="text-sm">
                            generic name : yyyy
                        </p>
                    </div>
                </div>
                
            </div>


        </div>
    );
}
