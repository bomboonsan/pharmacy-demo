'use client'

import Image from "next/image";
import Step from "@/components/Step";
import { useState } from "react";
import Swal from 'sweetalert2'

// import router
import { useRouter } from 'next/navigation'

export default function Step1() {
    const router = useRouter()

    const Swal = require('sweetalert2')

    const [position, setPosition] = useState(null);
    const [frontBack, setFrontBack] = useState(true);
    const [level, setLevel] = useState(null);
    const [show_1, setShow_1] = useState(false);
    const [show_2, setShow_2] = useState(false);
    const [show_3, setShow_3] = useState(false);
    const handleShow = (id) => {
        if(id == 1) {
          resetShow();
          setShow_1(!show_1);
          setPosition("ศีรษะ");
        }
        if(id == 2) {
          resetShow();
          setShow_2(!show_2);
          setPosition("ไหล่ขวา");
        }
        if(id == 3) {
          resetShow();
          setShow_3(!show_3);
          setPosition("ไหล่ซ้าย");
        }
        setPosition(id);
    };
    const resetShow = () => {
        setShow_1(false);
        setShow_2(false);
        setShow_3(false);
        setPosition(null);
    }

    const handleConfirm = () => {
        if (position == null) {
            Swal.fire({
                // title: 'Error!',
                text: 'กรุณาเลือกตำแหน่งที่ปวด',
                icon: 'warning',
                confirmButtonText: 'ตกลง',
            })
            return;
        }
        router.push("/step2")
    }

    const handleSwitch = () => {
        resetShow();
        setFrontBack(!frontBack);
    }


    return (
        <div className="p-5">
            {/* <div className="text-center mb-10">
                <ul className="steps steps-horizontal w-full text-white">
                    <li className="step step-primary">ตำแหน่งที่ปวด</li>
                    <li className="step">ระดับความปวด</li>
                    <li className="step">คำแนะนำ (* เปลี่ยน)</li>
                </ul>
            </div> */}

            <h1 className="page-title mb-10">
                เลือกตำแหน่งที่ปวด
            </h1>
            <div className="my-3 text-center">
                {frontBack ? <p className="text-2xl font-bold">ด้านหน้า</p> : <p className="text-2xl font-bold">ด้านหลัง</p>}
            </div>
            <div className="relative w-[65%] md:w-[40%] mx-auto mb-5">           
                <div className="absolute top-[5%] left-[110%] -translate-x-1/2 -translate-y-1/2 w-[50px] h-auto aspect-square z-10 cursor-pointer opacity-[40%] hover:opacity-[70%]">
                    <Image className={frontBack ? "block w-[100px] rotate-[90deg] transition-all duration-500 ease-in-out" : "block w-[100px] rotate-[0deg] transition-all duration-500 ease-in-out"} src="/images/bring-to-front.png" alt="bring-to-front" width={100} height={100} onClick={handleSwitch} />
                </div>     

                {/* <Image className="block" src="/images/body.png" alt="step1" width={500} height={500} /> */}
                <Image className={frontBack ? "block" : "hidden"} src="/images/body_front.png" alt="step1" width={500} height={500} />
                <Image className={frontBack == false ? "block" : "hidden"} src="/images/body_back.png" alt="step1" width={500} height={500} />
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-auto aspect-square z-10 cursor-pointer" onClick={() => handleShow(1)}></div>
                <div className="absolute top-[22%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-1/4 h-auto aspect-square z-10 cursor-pointer" onClick={() => handleShow(2)}></div>
                <div className="absolute top-[22%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-1/4 h-auto aspect-square z-10 cursor-pointer" onClick={() => handleShow(3)}></div>
                {show_1 && <Image className="block absolute w-full top-0 left-0 z-0" src="/images/body_1.png" alt="step1" width={500} height={500} />}
                {show_2 && <Image className="block absolute w-full top-0 left-0 z-0" src="/images/body_2.png" alt="step1" width={500} height={500} />}
                {show_3 && <Image className="block absolute w-full top-0 left-0 z-0" src="/images/body_3.png" alt="step1" width={500} height={500} />}

            </div>            
            <div className="text-center">
                <button className="btn btn-wide btn-primary text-white text-xl md:text-lg" onClick={handleConfirm}>ยืนยัน</button>
            </div>
        </div>
    );
}
