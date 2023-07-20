    import React     ,{Suspense,lazy} from "react";
    import "./Home.scss";
    import propertyListingData from "../../tempdata";
    import ScalitonCard from "../../Components/Card/ScalitonCard";
    const Card = lazy(()=>import( "../../Components/Card/Card"))
    const Home = () => {
    return (
        <div className="Home__cont">
            {/* <ScalitonCard/> */}
            <div className="Home__nav" style={{height:'100px'}}></div>
        <div className="Home__cards_cont">
            {propertyListingData.map((data) => {
            return (
                <Suspense key={data.id} fallback={<ScalitonCard />}>
                <Card
                key={data.id}
                id={data.id}
                title={data.title}
                location={data.location}
                price={data.price}
                rating={data.rating}
                image={data.images}
                />
                </Suspense>
            );
            })}
        </div>
        </div>
    );
    };

    export default Home;
