import { Categories, SortPopup } from "../components";

export default function Home() {
  return (
    <div className="d-flex jutify-content-between mt-20">
      <Categories items={["Достоевский", "Шолохов", "Тургенев"]} />
      <SortPopup items={["популярности", "алфавиту"]} />
    </div>
  )
}