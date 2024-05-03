import Cards from "../components/Cards"

export default function PricingPage(){
    const style = {
        backgroundColor:'#082032'
    }
    return(
        <div className="h-full p-10 w-screen md:flex md:justify-around" style={style}>
            <Cards isHigh={false} pricingBefore={'Rp. 50.000'} pricingAfter={'Rp. 30.000'}/>
            <Cards isHigh={true} pricingBefore={'Rp. 100.000'} pricingAfter={'Rp. 50.000'}/>
        </div>
    )
}