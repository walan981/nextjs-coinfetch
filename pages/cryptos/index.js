//Fecthing data of cryptocurrency
import axios from "axios";
import styles from '../../styles/CoinList.module.css'



function createPar(coin){
    if(coin.priceChange1d>=0){
        return(
            <p id='teste' className={styles.priceChangePos}>{coin.priceChange1d}%</p> 
        )
    }else{
        return(
            <p id='teste' className={styles.priceChangeNeg}>{coin.priceChange1d}%</p> 
        )
    }
}


function decimals(coin){
    if(coin.price>1){
        return(
            <div>
                <p className={styles.dollar}>USD</p>
                <p className={styles.coinPrice}>{Number(parseFloat(coin.price)).toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 3})}</p>
            </div>
        )
    }else{
        const decIndex = -1*Math.floor(Math.log10(coin.price));
        //console.log(coin.name, coin.price, ',', decIndex);
        return(
            <div>
                <p className={styles.dollar}>USD</p>
                <p className={styles.coinPrice}>{Number(parseFloat(coin.price)).toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: decIndex+3})}</p>
            </div>
        )
    }

}


//destructuring the database info
const CoinList = ({coinData}) =>{
    //console.log(coinData)
    return(
        <div className={styles.outterContainer}>
            
        <div>{coinData.coins.map((coin)=>{
            return(
                <a  key={coin.id} href={coin.websiteUrl} rel="noreferrer" target="_blank">
                <div className={styles.coinBox}>
                    <div className={styles.coinHeader}>
                        <img src={coin.icon}  width='30px' height='30px'/>
                        <h1> {coin.name} ({coin.symbol})</h1>
                    </div>
                    <div className={styles.coinInfo}>
                        <div>{decimals(coin)}</div>
                        {/* <p className={styles.dollar}>USD</p><p>{Number(parseFloat(coin.price).toFixed(3)).toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>    */}
                    </div>
                        {/* <p id='teste' className={styles.priceChange} onLoad={toggleColor(coin)}>{coin.priceChange1d}%</p> */}
                        <div>{createPar(coin)}</div>
                </div>
                </a>
            ); 
        })}</div>
        </div>
    );
};


//it fetches data on the app buildup time
export const getStaticProps = async() =>{
    //const id = params.id; //how to fetch data on a component that is a dynamic prop

    //fetching the data from API
    const data = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");

    //returning an object
    return{
        props:{
            coinData: data.data,
        },
        revalidate: 50, //incremental revalidate data on seconds 
    };
}
export default CoinList;
