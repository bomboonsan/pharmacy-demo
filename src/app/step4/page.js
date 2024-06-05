'use client'

import Image from "next/image";
import Step from "@/components/Step";

import { TypeAnimation } from 'react-type-animation';

import { useState } from "react";

import { setCookie , getCookies  } from 'cookies-next';

// import router
import { useRouter } from 'next/navigation'

export default function Step3() {
    const router = useRouter();

    const [inputSearch, setInputSearch] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [items, setItems] = useState([]);
    
    const handleSearch = (e) => {
        setInputSearch(e.target.value);

        if(e.target.value.length > 0) {
            setShowResult(true);
        } else {
            setShowResult(false);
        }

    }

    const handleSetCookie = (name, value, options) => {
        setCookie('textCookie', 'ทดสอบ');
    }

    const handleAddItem = (value) => {
        const newItems = [...items, value];
        setItems(newItems);
    }
    const handleRemoveItem = (value) => {
        const newItems = items.filter((item) => item !== value);
        setItems(newItems);
    }


    return (
        <div className="p-5">
            <ul className="steps steps-horizontal w-full text-white">
                <li className="step step-primary cursor-pointer" onClick={() => {router.push("/step1")}}>ตำแหน่ง</li>
                <li className="step step-primary">ระดับความปวด</li>
                <li className="step step-primary">คำแนะนำ</li>
                <li className="step step-primary">ยาที่ได้รับ</li>
                <li className="step">สรุป</li>
            </ul>
            <div className="mb-5"></div>
            <div className="relative">
                

                <div className="my-10">
                    <h2 className="text-xl md:text-2xl text-black mb-2 font-bold">ค้นหาชื่อยา</h2>
                    <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Search" 
                        value={inputSearch}
                        onChange={handleSearch}
                    />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                {showResult && (
                    <>
                    <h2 className="text-xl md:text-2xl text-black mb-2 font-bold">ผลการค้นหา</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {'test'.includes(inputSearch) && showResult && (
                            <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer relative" onClick={() => handleAddItem('test')}>
                                <h2 className="text-xl font-bold mb-1">ยา Test</h2>
                                <p className="text-sm">
                                    generic name : TextName
                                </p>
                            </div>
                        )}
                        {'arcoxia'.includes(inputSearch) && showResult && (
                            <div className="box mb-5 hover:bg-white/60 transition-all cursor-pointer relative" onClick={() => handleAddItem('arcoxia')}>
                                <h2 className="text-xl font-bold mb-1">ยา ARCOXIA</h2>
                                <p className="text-base">
                                    generic name : Etoricoxib
                                </p>
                            </div>
                        )}
                    </div>
                    </>
                )}
                

                    <div className="box w-full my-10">
                        <h1 className="text-2xl md:text-3xl font-medium text-black mb-3">
                            ยาที่ได้รับ
                        </h1>
                        <ul className="list-disc pl-5 text-neutral-700 font-light space-y-2 text-lg">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <p className="relative">
                                        <span className="font-bold">{item}</span>
                                        <span 
                                            className="absolute top-0 right-0 bg-red-700 text-white py-0.5 px-4 rounded-md font-medium text-sm inline-block ml-10 cursor-pointer"
                                            onClick={() => handleRemoveItem(item)}
                                        >ลบ</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                
            </div>


            <div className="text-center mt-20">
                <button className="btn btn-wide btn-primary text-white text-2xl" onClick={() => {router.push("/step5")}}>ถัดไป</button>
            </div>
        </div>
    );
}
