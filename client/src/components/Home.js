function Home() {
    const listPopular = [];
    for (let i=0; i<10; i++) {
        listPopular.push(
            <div>
                <img src={i<9 ? `./assets/posters/poster0${i+1}.jpg` : `./assets/posters/poster${i+1}.jpg`} alt=""
                    className=""
                />
                <div>My Hero Academia</div>
            </div>
        )
    }

    return (
        <div className="home basis-[80%] px-5 pt-5 h-full bg-[#f5f9ff] border-r">
            <div className="bg-white shadow-md rounded-xl mt-3">
                <div className="mb-3">
                    <img src="./assets/thumbnail.jpg" alt=""
                        className="w-full"
                    />
                </div>
                <div>
                    <span>Thịnh hành</span>
                    <div className="grid">
                        {listPopular}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;