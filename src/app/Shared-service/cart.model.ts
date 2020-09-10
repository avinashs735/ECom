export interface ICart {
  UserId: string;
  ProductCode: number;
  ItemCount: number;
  }

export interface ICartitem {
    Quantity?: number;
    shopId: string;
    ProductCode: number;
    Brand: string;
    category: string;
    title: string;
    pageTitle: string;
    shoecategory: string;
    vendor: string;
    price: number;
    isLowQuantity: boolean;
    isSoldOut: boolean;
    isBackorder: boolean;
    image?: string;
    description: Idescrition[];
    ImageUrl: Iurl[];
    metafields: Imeta[];
    }
export interface Iurl {
      key: number;
      url: string;
    }
export interface Idescrition {
    key: number;
    value: string;
    }
export interface Imeta {
      key: string;
      value: string;
      }
