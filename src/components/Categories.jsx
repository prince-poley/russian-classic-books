import { useState } from "react";

const Categories = ({ items }) => {

  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="category">
        <div
          onClick={() => setActiveItem(null)} 
          className={activeItem === null ? "category-item active" : "category-item"}
        >
          Все
        </div>
        { 
          items?.map((name, index) => (
            <div
              onClick={() => setActiveItem(index)}
              key={`${name}_${index}`} 
              className={activeItem === index ? "category-item active" : "category-item"} 
            >
              <span>{name}</span>
            </div>
          )) 
        }
      </div>
  )
}

export default Categories;