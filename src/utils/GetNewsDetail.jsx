import data from '../utils/news.json'
import NewsDetail from '../components/NewsDetail'

const getNews = () => {
    return (
        <div className='container-news'>
            {data.map( (news) =>{
                return(
                    <NewsDetail
                        objNews = {news}
                        key = {news.id}/>
                );
            })}
        </div>
    );
}

export default getNews;