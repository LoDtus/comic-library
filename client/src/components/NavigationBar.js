import { Link } from 'react-router-dom';

function NavigationBar() {

    return (
        <div className="navigationBar basis-[20%] flex flex-col border-x bg-white h-full">
            <div className="avatar-navigationBar flex flex-col items-center py-5 border-b px-5">
                <img
                    src="https://i.pinimg.com/564x/4e/a4/76/4ea476c2f7d4136c1283297976a248cd.jpg" 
                    alt=""
                    className='h-[200px] w-[200px]'
                    />
                <span className='title font-semibold'>Nguyễn Thị Phương Ly</span>
                <div className="flex items-center text-[#7a7a7a]">
                    <span>A12345</span>
                    <div className="rounded-full bg-[#7a7a7a] w-1 h-1 mx-2"></div>
                    <span>Năm nhất</span>
                </div>
                <Link to="/profile"
                className="w-full flex justify-center font-semibold bg-[#e7f3ff] p-3 mt-3
                rounded-md hover:cursor-pointer hover:bg-[#0614f5] duration-200">Thay đổi hồ sơ</Link>
            </div>
            <div className='flex flex-col h-full'>
                <div className='grow'>
                    <Link
                        to='/'
                        className='p-3 m-2 rounded-md flex items-center font-semibold text-[#7a7a7a] hover:text-black
                        hover:bg-[#e7f3ff] duration-200'>
                        <div className='h-[20px] w-[20px] fill-[#7a7a7a] hover:fill-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                        </div>
                        <span className='pl-3'>Trang chủ</span>
                    </Link>
                    <div
                        className='p-3 m-2 rounded-md flex items-center font-semibold text-[#7a7a7a] hover:text-black
                        hover:bg-[#e7f3ff] duration-200 hover:cursor-pointer'>
                        <div className='h-[20px] w-[20px] fill-[#7a7a7a] hover:fill-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
                            </svg>
                        </div>
                        <span className='pl-3'>Thể loại</span>
                    </div>
                </div>
                <div
                    className='p-3 m-2 rounded-md flex items-center font-semibold text-[#7a7a7a] hover:text-black
                    hover:bg-[#e7f3ff] duration-200 hover:cursor-pointer'>
                    <div className='h-[20px] w-[20px] fill-[#7a7a7a] hover:fill-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                        </svg>
                    </div>
                    <span className='pl-3'>Đăng xuất</span>
                </div>
            </div>
        </div>
    )
}
export default NavigationBar;