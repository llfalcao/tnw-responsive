import stories from '../content/stories';

const Stories = () => {
  return (
    <section className="stories">
      <h2 className="section-heading  stories__heading">Latest stories</h2>
      <div className="stories__grid">
        {stories.map((story, i) => (
          <a className="stories__item" href="##" key={i}>
            <img className="stories__itemImage" src={story.image} alt="" />
            <h4 className="stories__itemHeading">{story.heading}</h4>
            <p className="stories__timePosted">{story.since}</p>
          </a>
        ))}
      </div>

      <button className="stories__btn" type="button">
        ALL NEWS{' '}
        <span className="material-icons" aria-hidden="true">
          chevron_right
        </span>
      </button>
    </section>
  );
};

export default Stories;
