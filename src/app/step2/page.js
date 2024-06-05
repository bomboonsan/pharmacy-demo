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
    const [levelTitle, setLevelTitle] = useState('ปวดน้อย');
    const [emojiLevel, setEmojiLevel] = useState(1);

    const handleLevel = (e) => {
        setLevel(e.target.value);
        if(e.target.value == 20) {
            setLevelTitle("ปวดน้อย");
        }
        if(e.target.value == 50) {
            setLevelTitle("ปวดปานกลาง");
        }
        if(e.target.value == 70) {
            setLevelTitle("ปวดมาก");
        }
        if(e.target.value == 100) {
            setLevelTitle("ปวดมากที่สุด");
        }

        if(levelTitle !== null) {
            if( e.target.value == 100 ) {
                setEmojiLevel(5);
            } else {
                setEmojiLevel(Math.floor(((e.target.value) / 20)+1));
            }
        }

    }
    


    return (
        <div className="p-5">
            <div className="text-center mb-10">
                <ul className="steps steps-horizontal w-full text-white">
                    <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่ง</li>
                    <li className="step step-primary">ระดับความปวด</li>
                    <li className="step">คำแนะนำ</li>
                    <li className="step">ยาที่ได้รับ</li>
                    <li className="step">สรุป</li>
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
                <input type="range" min={0} max="100" value={level} className="range range-primary" step="10" onChange={handleLevel} />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
                <div className="grid grid-cols-10 gap-0 h-4 mb-3 -mt-1">
                    <div className="bg-[#74b551]"></div>
                    <div className="bg-[#7fba53]"></div>
                    <div className="bg-[#98c34d]"></div>
                    <div className="bg-[#c0ca43]"></div>
                    <div className="bg-[#f2cb2e]"></div>
                    <div className="bg-[#ebb231]"></div>
                    <div className="bg-[#e19831]"></div>
                    <div className="bg-[#dc802d]"></div>
                    <div className="bg-[#d6682d]"></div>
                    <div className="bg-[#d14c2b]"></div>
                </div>

                {/*  */}
                <div className="flex justify-center mt-10">
                    <div className="stats">    
                        <div className="stat min-w-[300px]">
                            <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                {/* <img src="/images/emoji/"{emojiLevel}".png" /> */}
                                <img src={`/images/emoji/${emojiLevel}.png`} />
                                {/* <Image className="block absolute w-full top-0 left-0 z-0" src={`/images/emoji/${emojiLevel}.png`} alt="step1" width={500} height={500} /> */}
                                </div>
                            </div>
                            </div>
                            <div className="stat-value">ระดับ {level / 10}</div>
                            <div className="stat-title text-2xl">
                                <span className={level > 50 ? 'text-red-600' : level == 50 ? 'text-yellow-500' : 'text-green-600'}>
                                {levelTitle}
                                </span>
                            </div>
                            {/* <div className="stat-desc text-secondary text-app">
                                lorem ipsum dolor sit amet
                            </div> */}
                        </div>                    
                    </div>
                </div>
                {/*  */}
            </div>



            <div className="text-center">
                <button className="btn btn-wide btn-primary text-white text-2xl" onClick={() => {router.push("/step3")}}>ถัดไป</button>
            </div>
        </div>
    );
}
