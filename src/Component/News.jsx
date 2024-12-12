import { useEffect, useState } from "react";
import mountain from '../Image/Mountain.png'
import './News.css'
export default function News() {
    const [news, setNews] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_61548f20c0a8eb88db3cab2b0f86564a2bbf3&q=cricket');
            const data = await response.json();
            setNews(data?.results[3]);
            setLoading(false);
        }
        fetchNews();
    }, [])
    return (
        <div className="News-main">
            {loading ? <p>Loading...</p> : 
            <div>
                {/* <img srcSet={news.image_url ? news?.image_url.split(',')[0] : null} alt={news.title} className="new-img" />
                <p className="news-head">{news.title}</p> */}
                <img src={mountain} className="new-img"/>
                <p className="news-head">Want to climb Mount Everest?</p>
            </div>}
            <div>
                <p className="news-des">In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......</p>
                {/* <p className="news-des">{news.description}</p> */}
            </div>
        </div>
    );
}