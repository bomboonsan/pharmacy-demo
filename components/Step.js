


import '../styles/globals.scss'
export default function Step({ children , step }) {
    

    return (
        <div className="text-center mb-10">
            <ul className="steps steps-horizontal w-full text-white">
                <li className="step step-primary">ตำแหน่งที่ปวด</li>
                <li className="step">ระดับความปวด</li>
                <li className="step">วิเคราะห์</li>
            </ul>
        </div>
    );
  }
  