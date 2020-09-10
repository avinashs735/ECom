export interface Iitem {
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


export interface Ievents {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    imageUrl: string;
    location?: {
      city: string,
      address: string,
      country: string
    };
    onlineUrl?: string;
    sessions: Isession[];
  }

export interface Isession {
    id: number;
    name: string;
    presenter: string ;
    duration: number;
    level: string ;
    abstract: string;
    voters: string[];
  }
