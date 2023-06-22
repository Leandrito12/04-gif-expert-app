import { GifItem } from "../GifItem/GifItem";
import { useFetchGifs } from "../../Hooks/useFetchGifs";
import {PropTypes} from 'prop-types'

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)
 

  return (
    <>
        <h2>{category}</h2>
        {isLoading && (<h2>Loading...</h2>)}
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


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
