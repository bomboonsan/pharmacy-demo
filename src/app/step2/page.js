'use client'

import Image from "next/image";
import Step from "@/components/Step";
import { useState } from "react";

// import router
import { useRouter } from 'next/navigation'

export default function Step2() {
    const router = useRouter()

    const [position, setPosition] = useState(null);
    const [level, setLevel] = useState(0);
    const [levelTitle, setLevelTitle] = useState(null);
    const [emojiLevel, setEmojiLevel] = useState(1);

    const handleLevel = (e) => {
        setLevel(e.target.value);
        if(e.target.value == 25) {
            setLevelTitle("ปวดน้อย");
        }
        if(e.target.value == 50) {
            setLevelTitle("ปวดปานกลาง");
        }
        if(e.target.value == 75) {
            setLevelTitle("ปวดมาก");
        }
        if(e.target.value == 100) {
            setLevelTitle("ปวดมากที่สุด");
        }

        if(levelTitle !== null) {
            setEmojiLevel(((e.target.value) / 25)+1);
        }

    }
    


    return (
        <div className="p-5">
            <div className="text-center mb-10">
                <ul className="steps steps-horizontal w-full text-white">
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่งที่ปวด</li>
                    <li className="step step-primary">ระดับความปวด</li>
                    <li className="step">วิเคราะห์</li>
                </ul>
            </div>

            <div className="relative w-[80%] mx-auto mb-5">
                <h1 className="page-title mb-10">
                เลือกระดับความปวด
                </h1>
                <div className="flex justify-between">
                    <p>ปวดน้อย</p>
                    <p>ปวดมาก</p>
                </div>
                <input type="range" min={0} max="100" value={level} className="range range-primary" step="25" onChange={handleLevel} />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>

                {/*  */}
                <div className="flex justify-center mt-10">
                    <div className="stats">    
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                {/* <img src="/images/emoji/"{emojiLevel}".png" /> */}
                                <img src={`/images/emoji/${emojiLevel}.png`} />
                                {/* <Image className="block absolute w-full top-0 left-0 z-0" src={`/images/emoji/${emojiLevel}.png`} alt="step1" width={500} height={500} /> */}
                                </div>
                            </div>
                            </div>
                            <div className="stat-value">{level}%</div>
                            <div className="stat-title">
                                <span className={level > 50 ? 'text-red-600' : level == 50 ? 'text-yellow-500' : 'text-green-600'}>
                                {levelTitle}
                                </span>
                            </div>
                            <div className="stat-desc text-secondary">
                                lorem ipsum dolor sit amet
                            </div>
                        </div>                    
                    </div>
                </div>
                {/*  */}
            </div>



            <div className="text-center">
                <button className="btn btn-wide btn-primary text-white text-xl md:text-lg" onClick={() => {router.push("/step3")}}>ยืนยัน</button>
            </div>
        </div>
    );
}
