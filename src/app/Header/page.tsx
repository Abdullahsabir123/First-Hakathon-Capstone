import Image from "next/image";
import './page.css'

export default function Header(){
    return (
        <div className="responsive-div-1">
            <div className="responsive-div-2">
            <Image className="responsive-img-1" src='/images/Head.png' alt="img" width={40} height={40}/>
            <h2 className='responsive-h1-1'>Hight Fidelty Dashboard - Home Rent</h2>
            </div>
            <div className="responsive-div-3">
                <h4 className="responsive-h4-1 text-dark"><span className="text-[#9F9F9F] responsive-span-1">Last updated:</span> 8 Aug 2022</h4>
            </div>
            <hr />
        </div>
        );
}