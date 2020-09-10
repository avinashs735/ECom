import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of , BehaviorSubject} from 'rxjs';
import {Iitem, Idescrition, Imeta, Iurl, Ievents} from '../../Shared-service/item.model';
import {ICart, ICartitem} from '../../Shared-service/cart.model';
import {WishlistService} from '../../checkout/CheckoutService/wishlist.service';

@Injectable()
export class CartService {
  private subject = new Subject<any>();
  private valueObs: BehaviorSubject < string > = new BehaviorSubject < string > (null);
  constructor(private wishlist: WishlistService){

  }
sendToWishList(message: string) {
    this.subject.next(message);
}
getWishData(): Observable<any> {
  return this.subject.asObservable();
}
public setWishValue(value: string): void {

  this.valueObs.next(value);
  this.wishlist.AddToWish(this.valueObs.value);
}

public getWishValue(): Observable < string > {

  return this.valueObs;
}

  getCartProduct(userid: string) {
    // const user = userid.toLocaleLowerCase();
    const cartItem = CartItem.filter(x => x.UserId === userid);
    console.log(CartItem);
    const fetchedItem: ICartitem[] = [];
    cartItem.forEach(entry => {
     const item = ItemList.find( x => x.ProductCode === entry.ProductCode);
     item.Quantity = entry.ItemCount;
     fetchedItem.push(item);
    });

    return fetchedItem;
    // return ItemList.find(item => item.ProductCode === id);
  }

  RemoveFromCart(item: any) {

   const cartItem = CartItem.filter(x => x.ProductCode === item.ProductCode && x.UserId=== item.UserId);
   // CartItem.splice(cartItem.indexOf(cartItem), 1);
   cartItem.forEach(entry => {
    const itemtopop = CartItem.find( x => x.ProductCode === item.ProductCode);

    CartItem.splice(CartItem.indexOf(itemtopop), 1);
   });

  }
}
const CartItem: ICart[] = [
  {
    UserId: 'Avi11',
    ProductCode: 6369582,
    ItemCount: 2,
  },
  {
    UserId: 'Avi11',
    ProductCode: 6969582,
    ItemCount: 1,
  },
  {
    UserId: 'Avi11',
    ProductCode: 6962582,
    ItemCount: 4,
  },
  {
    UserId: 'Avi11231',
    ProductCode: 6969581,
    ItemCount: 2,
  },
  {
    UserId: 'Avi1901',
    ProductCode: 6969582,
    ItemCount: 1,
  },
];

const ItemList: ICartitem[] = [
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBKttqPumoSReswXZBiDreYimZNJSC_50NPZWpS9wSnaPaRkX&s',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6969582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6919582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBKttqPumoSReswXZBiDreYimZNJSC_50NPZWpS9wSnaPaRkX&s',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://img.looksgud.com/upload/item-image/561/c1ey/c1ey-kook-n-keech-white-canvas-solid-sneakers_500x500_0.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6962582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://img.looksgud.com/upload/item-image/561/c1ey/c1ey-kook-n-keech-white-canvas-solid-sneakers_500x500_0.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://rukminim1.flixcart.com/image/714/857/jvo4scw0/shoe/g/w/3/5497597-42-kook-n-keech-grey-original-imafgg8epmbghfbf.jpeg?q=50',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6369582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://rukminim1.flixcart.com/image/714/857/jvo4scw0/shoe/g/w/3/5497597-42-kook-n-keech-grey-original-imafgg8epmbghfbf.jpeg?q=50',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6979582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6269582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6969512,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image : 'https://cdn.fashiola.in/L35854053/kook-n-keech-men-grey-printed-sneakers.jpg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/OA/UN/GT/SELLER-43126562/nike-zoom-33-gray-500x500.png',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6968582,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/OA/UN/GT/SELLER-43126562/nike-zoom-33-gray-500x500.png',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'casual',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/OA/UN/GT/SELLER-43126562/nike-zoom-33-gray-500x500.png',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6969522,
    Brand: 'Kook N Keech',
    category: 'Kid',
    title: 'Kid Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'sport',
    vendor: 'kooknkeech',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/OA/UN/GT/SELLER-43126562/nike-zoom-33-gray-500x500.png',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'LOCOMOTIVE',
    category: 'Men',
    title: 'Men White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'Sneaker',
    vendor: 'LOCOMOTIVE',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/OA/UN/GT/SELLER-43126562/nike-zoom-33-gray-500x500.png',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6969580,
    Brand: 'Highlander',
    category: 'Women',
    title: 'Women Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'sneaker',
    vendor: 'Highlander',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/IA/FB/GK/SELLER-17552598/nike003-500x500.jpeg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwZx3rz',
    ProductCode: 6969581,
    Brand: 'Kook N Keech',
    category: 'Women',
    title: 'Women White Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'sport',
    vendor: 'Vans',
    price: 2000,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/IA/FB/GK/SELLER-17552598/nike003-500x500.jpeg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Black'
      }
    ],
  },
  {
    shopId: 'J8Bhq3uTtdgwox3rz',
    ProductCode: 6919582,
    Brand: 'Kook N Keech',
    category: 'Women',
    title: 'Women Blue Sneakers',
    pageTitle: 'Nesciunt itaque modi soluta sint sint.',
    shoecategory: 'Sneaker',
    vendor: 'Vans',
    price: 1200,
    isLowQuantity: false,
    isSoldOut: false,
    isBackorder: false,
    image: 'https://5.imimg.com/data5/IA/FB/GK/SELLER-17552598/nike003-500x500.jpeg',
    description: [
        {
        key: 1,
        value: 'A pair of round-toe white sneakers, has regular styling, lace-up detail'
        },
        {
        key: 2,
        value: 'Canvas upper'
        },
        {
        key: 3,
        value: 'Cushioned footbed'
        },
        {
        key: 4,
        value: 'Textured and patterned outsole'
        },
        {
        key: 5,
        value: 'Warranty: 1 month'
        },
        {
        key: 6,
        value: 'Warranty provided by brand/manufacturer'
        }],
    ImageUrl: [
      {
        key: 1,
        url: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1787982/2017/3/27/11490599418738-Kook-N-Keech-Women-White-Perforations-Regular-Sneakers-4561490599418558-1.jpg'
      },
      {
        key: 2,
        url: 'https://www.price-hunt.com/content/images/shoes/kook-n-keech-white-casual-sneakers-women_l.jpg'
      }],
    metafields: [
      {
        key: 'Sole Material',
        value: 'Rubber'
      },
      {
        key: 'Insole',
        value: 'Comfort Insole'
      },
      {
        key: 'Shoe Width',
        value: 'Regular'
      },
      {
        key: 'Type',
        value: 'Sneakers'
      },
      {
        key: 'Ankle Height',
        value: 'Regular'
      },
      {
        key: 'Fastening',
        value: 'Lace-Ups'
      },
      {
        key: 'Color',
        value: 'Blue'
      }
    ],
  },

];

