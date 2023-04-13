import { useState } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import "./styles.css";
import Navbar from "../../molecules/Navbar";
import SubHeader from "../../organisms/SubHeader";
import { openai } from "../../constants";

const PlaceDetail = () => {
  const location = useLocation();
  const placeInfo = location.state;
  const { arrayImages = [] } = placeInfo;
  const smallImages = arrayImages?.slice(1, arrayImages.length);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const generateTravelPlan = async (travelPlace: string) => {
    setSearchResult(null);
    setIsLoading(true);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a html table with a css class named 'table-result' that it will show a trip plan of 3 days for ${travelPlace}. Ever day must contain 2 tours. The first column is the day, the second column is the time (HH:MM), the thirth column is the tour name and the last column is a short description of this tour. All texts need be in Pt-br`,
      max_tokens: 1000,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setSearchResult(completion.data.choices[0].text);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <SubHeader />
      <div className="container mt-4">
        <div>
          <h2>Some beautiful place description</h2>
          <span>
            <i className="bi bi-star-fill"> {placeInfo?.rating}</i> ·{" "}
            {placeInfo?.title}
          </span>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-12 col-lg-7 col-xl-7">
            <img
              src={arrayImages[0]?.src}
              className="rounded-start main-image"
              alt="#"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-5 col-xl-5">
            {smallImages &&
              smallImages.length &&
              smallImages.map((item: any, i: number) => (
                <div className="row" key={i}>
                  <div className="col-12 col-md-6 px-1 my-1">
                    <img
                      src={item.src}
                      className="rounded small-image"
                      alt="#"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container my-5">
          <div className="text-center d-flex flex-column align-items-center">
            <button
              className="btn btn-primary btn-lg w-50 text-center"
              onClick={() => generateTravelPlan(placeInfo?.title)}
            >
              Criar plano de viagem para {placeInfo?.title}
              <i className="bi bi-cursor mx-2"></i>
            </button>
            <small className="fst-italic mt-1">
              Powered by <b>OpenAI GPT</b>
            </small>
          </div>
          <div className="mt-4 pb-5">
            {!searchResult && isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Processando...</span>
                </div>
              </div>
            )}
            {searchResult && !isLoading && parse(searchResult)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetail;
