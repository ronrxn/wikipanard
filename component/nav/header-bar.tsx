import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full h-14">
            <div className='flex items-center mt-1'>
                <div className="font-mono text-xl ml-5 ">
                    WIKIPANARD
                </div>
                <Image src="/images.jpg" width={45} height={45} alt="" />
            </div>
            <div className='border mt-1'></div>
        </div>
    )
}