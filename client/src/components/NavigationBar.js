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
            <div>
                <Link to="/"
                className="w-full flex justify-center font-semibold bg-[#e7f3ff] p-3 mt-3
                rounded-md hover:cursor-pointer hover:bg-[#0614f5] duration-200">Trang chủ</Link>
                <div className="w-full flex justify-center font-semibold bg-[#e7f3ff] p-3 mt-3
                rounded-md hover:cursor-pointer hover:bg-[#0614f5] duration-200">Thể loại</div>
                <div className="w-full flex justify-center font-semibold bg-[#e7f3ff] p-3 mt-3
                rounded-md hover:cursor-pointer hover:bg-[#0614f5] duration-200">Đăng xuất</div>
            </div>
        </div>
    )
}
export default NavigationBar;