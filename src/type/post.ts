export type PostModel = {
  id?: number;
  thumbnail?: string;
  link: string;
  post_date: string;
  bookmarks: number;
  views: number;
  orders: number;
  copy_contacts: number;
};

export type AdvertisementModel = {
  id?: number;
  start_at: string;
  end_at?: string;
  phone: string;
  post_url: string;
};
