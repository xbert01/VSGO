import './CategoryBar.css';
import { Link } from "react-router-dom";


const CategoryBar = () => {
  return (
    <div className="category-bar">
      {Categories.map((category) => (
            <Link to = {category.link}>
                <div className="category-element">
                    <img src={category.img} />
                    <h3 style={{textDecoration:"none"}}>{category.title}</h3>
                </div>
            </Link>
                            ))}
    </div>
  );
};

export default CategoryBar;



const Categories = [
  {
    id: 0,
    img: "https://res.cloudinary.com/efer/image/upload/v1645272009/CarCompare/steering-wheel_ypzenl.png",
    title: "cars",
    link:"/game"
  },
  // {
  //   id: 1,
  //   img: "https://res.cloudinary.com/efer/image/upload/v1645285469/CarCompare/rich-man_rr6zv7.png",
  //   title: "world",
  //   link: "/world"
  // },
  {
    id: 1,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1648506321/images/bitcoin_vahxdh.png",
    title: "crypto",
    link: "/cryptogame"
  }
]
