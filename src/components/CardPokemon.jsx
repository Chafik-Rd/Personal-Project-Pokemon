import React, { useState, useEffect } from "react";

const CardPokemon = () => {
  const [datas, setDatas] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prePage, setPrePage] = useState("");
  const [pageStatus, setPageStatus] = useState(false);
  const [page, setPage] = useState(1);

  const bgType = {
    normal: "bg-[#616161]",
    fighting: "bg-red-700",
    flying: "bg-[#264652]",
    poison: "bg-[#66198C]",
    ground: "bg-[#573500]",
    rock: "bg-[#8F5800]",
    bug: "bg-[#008D1F]",
    ghost: "bg-[#7A8F84]",
    steel: "bg-[#5B6B63]",
    fire: "bg-[#E12500]",
    water: "bg-[#0001E0]",
    grass: "bg-[#9C8248]",
    electric: "bg-[#EDCE00]",
    psychic: "bg-[#FF5B99]",
    ice: "bg-[#5FACE3]",
    dragon: "bg-[#E68500]",
    dark: "bg-black",
    fairy: "bg-[#D1CD56]",
    stellar: "bg-[#13E5BB]",
    unknown: "bg-[#B0BD00]",
    shadow: "bg-[#525251]",
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNextPage(data.next ? data.next : "");
      setPrePage(data.previous ? data.previous : "");
      // get data
      const promises = data.results.map(async (element) => {
        const res = await fetch(element.url);
        return await res.json(); // เก็บผลลัพธ์จาก element.url แต่ละตัว
      });
      const results = await Promise.all(promises); // รอให้ข้อมูลทั้งหมดถูกดึงเสร็จสิ้น
      setPageStatus(results.length ? true : false);

      setDatas(
        results.map((element) => ({
          id: element.id,
          name: element.name,
          img: element.sprites.other.dream_world.front_default,
          type1: element.types[0].type.name,
          type2: element.types[1]?.type.name,
          hp: element.stats[0].base_stat,
          atk: element.stats[1].base_stat,
          defen: element.stats[2].base_stat,
          spAtk: element.stats[3].base_stat,
          spDefen: element.stats[4].base_stat,
          speed: element.stats[5].base_stat,
        }))
      ); // เก็บข้อมูลทั้งหมดใน datas
      console.log("datas", datas);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon");
    setPage(1);
  }, []);

  const getNextPage = () => {
    if (nextPage.length && pageStatus) {
      setDatas([]);
      fetchData(nextPage);
      setPage(page + 1);
    }
  };
  const getPrePage = () => {
    if (prePage.length && pageStatus) {
      setDatas([]);
      fetchData(prePage);
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className='min-h-screen font-sans pb-8 pt-28 bg-[#696666]'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-x-4 xl:gap-x-10 gap-y-4 justify-items-center '>
          {datas.map((element) => {
            return (
              <div
                key={element.id}
                className='w-[290px] h-[370px] border-8 border-black hover:shadow-xl hover:scale-105'
              >
                <img
                  src={element.img}
                  className={`${
                    !element.img ? "animate-pulse" : ""
                  } bg-white w-full h-[155px] mx-auto p-2`}
                />
                <div className='bg-[#C4C4C4] h-[200px]'>
                  <div className='ps-2 pt-5 capitalize'>
                    <p className='text-2xl font-bold'>{element.name}</p>
                    <div className=' flex text-center text-sm mt-2'>
                      {element.type2 ? (
                        <>
                          <p
                            className={`ms-1 py-1 font-medium  ${
                              bgType[element.type1] || "bg-gray-500"
                            } w-16 rounded-full text-white`}
                          >
                            {element.type1}
                          </p>
                          <p
                            className={`ms-1 py-1 font-medium ${
                              bgType[element.type2] || "bg-gray-500"
                            } w-16 rounded-full text-white`}
                          >
                            {element.type2}
                          </p>
                        </>
                      ) : (
                        <p
                          className={` ms-1 py-1 font-medium ${
                            bgType[element.type1] || "bg-gray-500"
                          } w-16 rounded-full text-white`}
                        >
                          {element.type1}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      !element ? "animate-pulse " : ""
                    } mt-3 grid grid-cols-2 gap-4  justify-items-center text-lg`}
                  >
                    <div>
                      <p className='mb-1'>
                        <span className='font-semibold'>HP: </span> {element.hp}
                      </p>
                      <p className='mb-1'>
                        <span className='font-semibold'>ATK: </span>{" "}
                        {element.atk}
                      </p>
                      <p>
                        <span className='font-semibold'>DEF: </span>{" "}
                        {element.defen}
                      </p>
                    </div>
                    <div>
                      <p className='mb-1'>
                        <span className='font-semibold'>SP-ATK: </span>{" "}
                        {element.spAtk}
                      </p>
                      <p className='mb-1'>
                        <span className='font-semibold'>SP-DEF: </span>{" "}
                        {element.spDefen}
                      </p>
                      <p>
                        <span className='font-semibold'>SPEES: </span>{" "}
                        {element.speed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center text-center mt-10'>
          <button
            onClick={getPrePage}
            className={`${
              prePage ? "text-black hover:scale-110 " : "text-[#726F75]"
            } text-lg w-20 p-1 rounded-lg bg-[#E5AD00] mx-40 font-semibold `}
          >
            ก่อนหน้า
          </button>
          <p className='text-white text-2xl font-semibold'>{page}</p>
          <button
            onClick={getNextPage}
            className={`${
              nextPage ? "text-black hover:scale-110 " : "text-[#726F75]"
            } text-lg w-20 p-1 rounded-lg bg-[#E5AD00] mx-40 font-semibold`}
          >
            ถัดไป
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPokemon;
