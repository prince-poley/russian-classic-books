import { useEffect, useRef, useState } from "react";

const SortPopup = ({ items }) => {

  let [isVisiblePopup, setIsVisiblePopup] = useState(false);
  let [activeItem, setActiveItem] = useState(0);
  
  const activeSortItem = items[activeItem].name;

  const sortRef = useRef();

  useEffect(() => {
    
    document.body.addEventListener("click", (event) => {
      if (!event.path.includes(sortRef.current)) {
        setIsVisiblePopup(false)
      }
    })
  }, [])

  const toggleVisiblePopup = () => {
    setIsVisiblePopup(!isVisiblePopup);
  }

  const chooseSortItem = (index) => {
    setActiveItem(index);
    setIsVisiblePopup(false);
  }

  return (
    <div ref={sortRef} className="sorted">
      Сортировка по <span onClick={toggleVisiblePopup} className="sorted-title">{activeSortItem}</span>
      <div className={isVisiblePopup ? "sorted-popup" : "sorted-popup hide"}>
        {
          items?.map((item, index) => {
            return (
              <div
                onClick={() => chooseSortItem(index)}
                className={activeItem === index ? "sorted-popup__item active" : "sorted-popup__item"} 
                key={`${item.name}_${index}`}
              >
                {item.name}
              </div>      
            )
          })
        }
      </div>
    </div>
  )
}

export default SortPopup;