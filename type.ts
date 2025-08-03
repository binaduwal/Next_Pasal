export interface BannerData {
  _id: string;
  _createdAt: Date;
  title?: string;
  subtitle?: string;
  price?: number;
  description?: string;
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
    caption?: string;
  };
}


export interface CategoryData {
  _id: string;
  _createdAt: Date;
  title: string;
  description?: string;
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
  };
}


export interface ProductData {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description?: string;
  price: number;
  row_price?: number;
  quantity?: number;
  position?: string;
  ratings?:number;
  Brand?: string;
  category: {
    _ref: string;
    _type: "reference";
  };
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
  };
  New_arrivals: boolean;
}

interface UserInfo{
  id:string;
  name:string;
  email:string;
}

export interface StoreState{
shoppers:{
  cart:ProductData[];
  wishList:ProductData[];
  userInfo:UserInfo | null;
}  
}