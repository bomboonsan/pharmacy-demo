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
                        ยา xxx
                    </h1>
                    <p>
                        generic name : xxx
                    </p> 

                </div>

                <div className="collapse collapse-arrow backdrop-blur-sm bg-white/30 rounded-md shadow shadow-neutral-400/30 mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        สรรพคุณ
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow backdrop-blur-sm bg-white/30 rounded-md shadow shadow-neutral-400/30 mb-2">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        ข้อบ่งใช้
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow backdrop-blur-sm bg-white/30 rounded-md shadow shadow-neutral-400/30 mb-2">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        ข้อความระวัง
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                
            </div>


        </div>
    );
}
