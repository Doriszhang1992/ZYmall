import {request} from 'network/request'
export function getDetaildata(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}



export class BaseInfo{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
  this.desc=itemInfo.desc
  this.newPrice=itemInfo.newPrice
  this.oldPrice=itemInfo.oldPrice
  this.discount=itemInfo.discountDesc
  this.columns=columns
  this.services=services
  this.realPrice=itemInfo.lowNowPrice
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class Params{
  constructor(info,rule){
    this.iamge=info.image?info.image[0]:'';
    this.infos=info.set
    this.sizes=rule.tables
  }
}

export function getRecommendData(){
  return request({
    url:'/recommend'
   
  })
}