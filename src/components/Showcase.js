import showcase from '../content/showcase';

const Showcase = () => {
  return (
    <div className="showcase">
      {showcase.map((article, i) => (
        <article className="showcase__article" key={i}>
          <a href="## ">
            <img
              className="showcase__articleImage"
              src={article.image}
              alt=""
            />

            {article.special ? (
              <div className="showcase__articleHeader showcase__articleHeader--special">
                <h2>{article.heading}</h2>
                <button type="button">GET TICKETS</button>
              </div>
            ) : (
              <div className="showcase__articleHeader">
                <h6 className="showcase__articleHeaderLabel">
                  {article.label}
                </h6>
                <h3>{article.heading}</h3>
              </div>
            )}
          </a>
        </article>
      ))}
    </div>
  );
};

export default Showcase;
