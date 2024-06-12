import { Link } from "react-router-dom";

function Home() {
    const listPopular = [];
    for (let i=0; i<10; i++) {
        listPopular.push(
            <Link to='/comic-detail'
                className="rounded-lg overflow-hidden mx-2 my-2 hover:shadow-lg duration-200">
                <div className="rounded-lg overflow-hidden">
                    <img src={i<9 ? `./assets/posters/poster0${i+1}.jpg` : `./assets/posters/poster${i+1}.jpg`} alt=""
                        className=""
                    />
                </div>
                
                <div className="mx-2">
                    <div className="text-xl font-semibold">My Hero Academia</div>
                    <div className="text-[#7a7a7a] font-semibold">Tác giả / Tác giả</div>
                    <div className="flex items-center">
                        <div className="text-[#8d8d8d]">Chapter 203</div>
                        <svg className="w-1 h-1 fill-[#8d8d8d] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                        </svg>
                        <div className="text-[#8d8d8d]">2 giờ trước</div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div className="home basis-[80%] px-5 py-5 h-full bg-[#f5f9ff] border-r">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <img src="./assets/thumbnail.jpg" alt=""
                    className="w-full"
                />
            </div>

            {/* (Gợi ý), xu hướng, mới cập nhật, truyện mới */}
            <div className="bg-white shadow-md rounded-xl mt-3 px-5 py-5">
                <span className="text-2xl font-semibold ml-2">Xu hướng</span>
                <div className="grid grid-cols-5">
                    {listPopular}
                </div>
            </div>
            <div className="bg-white shadow-md rounded-xl mt-3 px-5 py-5">
                <span className="text-2xl font-semibold ml-2">Mới cập nhật</span>
                <div className="grid grid-cols-5">
                    {listPopular}
                </div>
            </div>
            <div className="bg-white shadow-md rounded-xl mt-3 px-5 py-5">
                <span className="text-2xl font-semibold ml-2">Tân binh</span>
                <div className="grid grid-cols-5">
                    {listPopular}
                </div>
            </div>
        </div>
    )
}
export default Home;