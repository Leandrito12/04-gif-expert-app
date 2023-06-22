import { GifItem } from "../GifItem/GifItem";
import { useFetchGifs } from "../../Hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)
 

  return (
    <>
        <h2>{category}</h2>
        <div className="card-grid">
            {images.map(({id, title, url}) =>{
                return (
                    <GifItem key={id} title={title} url={url}/>
                )
            })}
        </div>
    </>
  )
}
