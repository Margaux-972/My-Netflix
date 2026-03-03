import data from "../assets/movies.json";

const Section = () => {
  //   console.log(data); [{category: 'Reprendre avec', images: Array(27)}]
  return (
    <main>
      {data.map((element) => {
        //   console.log(element); {category: 'Reprendre avec', images: Array(27)}
        // console.log(element.images);
        let carrousel = element.images;
        return (
          <>
            <h2>{element.category}</h2>
            <div>
              {carrousel.map((pic, index) => {
                return <img key={index} src={pic} alt="bla" />;
              })}
            </div>
          </>
        );
      })}
    </main>
  );
};

export default Section;
