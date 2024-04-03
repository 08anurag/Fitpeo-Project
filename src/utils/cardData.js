import dollar from "../images/dollar.png";
import list from "../images/lists.png";
import coins from "../images/coins.png";
import bag from "../images/bag.png";
import up from "../images/up.png";
import down from "../images/down_icon.png";

const cardData = [{
    "icon": dollar,
    "title": "Earning",
    "value": 198,
    "growth": 37.8,
    "time": "month",
    "up": up,
},
{
    "icon": list,
    "title": "Orders",
    "value": 2.4,
    "growth": 2,
    "time": "month",
    "up": down,
},
{
    "icon": coins,
    "title": "Balance",
    "value": 2.4,
    "growth": 2,
    "time": "month",
    "up": down,
},
{
    "icon": bag,
    "title": "Total Sales",
    "value": 89,
    "growth": 11,
    "time": "week",
    "up": up,
},
]

export default cardData;