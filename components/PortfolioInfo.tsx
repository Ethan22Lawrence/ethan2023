import InfoHero from "./InfoHero";
import InfoNutshell from "./InfoNutshell";
import InfoPricespider from "./InfoPricespider";
import InfoStudioease from "./InfoStudioease";
import InfoSwoogo from "./InfoSwoogo";


const PortfolioInfo = ({data} : any) => {
    switch(data) {
        case 'hero':
            return <InfoHero/>
            break;
        case 'swoogo':
            return <InfoSwoogo/>
            break;
        case 'studioease':
            return <InfoStudioease/>
            break;
        case 'nutshell':
            return <InfoNutshell/>
            break;
        case 'pricespider':
            return <InfoPricespider/>
            break;
        default:
            return null
      }
}

export default PortfolioInfo