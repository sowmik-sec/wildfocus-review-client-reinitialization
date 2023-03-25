import BannerItems from "./BannerItems";

const items = [
  {
    image: "https://i.ytimg.com/vi/nWmrfXnBqo4/maxresdefault.jpg",
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image:
      "https://www.careerguide.com/career/wp-content/uploads/2021/04/tumblr_ms21cuNeJb1qa0ri9o1_1280.jpg",
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image:
      "https://www.wondriumdaily.com/wp-content/uploads/2019/10/Wildlife-Photographer-Feature-1024x555.jpg",
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {items.map((slide) => (
        <BannerItems key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Banner;
