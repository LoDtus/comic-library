

function Chapter() {
    const pages = [];
    for (let i=0; i<18; i++) {
        pages.push(
            <div className="basis-[50%] flex justify-center">
                <img className="basis-[50%]" src={`./assets/${i+4}.png`} alt="" />
            </div>
        )
    }

    return (
        <div className="chapter flex">
            <div className="basis-[20%]"></div>
            <div className="basis-[60%] flex flex-col">
                {pages}
            </div>
            <div className="basis-[20%]"></div>
        </div>
    )
}
export default Chapter;