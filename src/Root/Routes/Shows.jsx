import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import ShowCard from "../../Components/ShowCard";
import ControlBtns from "../../Components/ControlBtns";
import Loader from "../../Components/Loader";
import Search from "../../Components/Search";
import ShowsTags from "../../Components/ShowsTags";
import PopularPosts from "../../Components/PopularPosts";
import WhatsNew from "../../Components/WhatsNew";

export default function Shows(props) {
  const { customStyle1, customStyle2 } = props;

  const [show, setShow] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchShow = async () => {
    setLoading(true);
    const URL = `https://api.disneyapi.dev/character?page=${page}&pageSize=10`;
    const response = await fetch(URL);
    const data = await response.json();
    setShow(data.data);
    setLoading(false);
  };

  const prevPage = () =>
    setPage((previousPage) => Math.max(previousPage - 1, 1));
  const nextPage = () => setPage((previousPage) => previousPage + 1);

  useEffect(() => {
    fetchShow();
  }, [page]);

  return (
    <div className="p-3">
      <header>
        <Slider />
      </header>

      <div className="show-page my-5 t-flex t-justify-between">
        <main className="t-w-[68%]">
          <h2 className="t-font-mono t-text-4xl text-center pb-5">
            Disney Shows
          </h2>

          {loading && <Loader />}
          {show &&
            show.map((element, index) => {
              return (
                <div key={index} className="mb-3">
                  <ShowCard
                    imageUrl={element.imageUrl}
                    name={element.name}
                    sourceUrl={element.sourceUrl}
                    id={`card-${index}`}
                    customStyle2={customStyle2}
                  />
                </div>
              );
            })}

          <ControlBtns page={page} prevPage={prevPage} nextPage={nextPage} />
        </main>

        <hr className="my-4" />

        <aside className="t-w-[30%] py-2">
          <Search customStyle1={customStyle1} />
          <ShowsTags customStyle1={customStyle1} customStyle2={customStyle2} />
          <PopularPosts />
          <WhatsNew customStyle1={customStyle1} customStyle2={customStyle2} />
        </aside>
      </div>
    </div>
  );
}
