import data from '../utils/news.json'
import News from '../components/News'

const getNews = () => {

    
    return (
        <div className='container-news'>
            {data.map( (news) =>{
                return(
                    <News
                        objNews = {news}
                        key = {news.id}/>
                );
            })}
        </div>
    );
}

export default getNews;