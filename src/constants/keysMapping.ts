const helperMapping: any = {


  email: {
    message: 'ایمیل',
  },
  bookmarks: {
    message: 'بوک مارک',
  },
  click_order: {
    message: 'کلیک روی ثبت سفارش',
  },
  copy_contact: {
    message: 'کپی اطلاعات تماس',
  },
  images: {
    message: 'تصاویر',
  },
  products: {
    message: 'محصولات',
  },
  products_view: {
    message: 'بازدید محصولات',
  },
  shop_view: {
    message: 'بازدید فروشگاه',
  },
  videos: {
    message: 'ویدیوها',
  },
  '/admin/dashboard': {
    message: 'داشبورد',
  },
  '/admin/posts': {
    message: 'محصولات',
  },
  '/admin/advertisements': {
    message: 'آگهی ها',
  },
  '/admin/change-password': {
    message: 'تغییر رمز عبور',
  },
};

export const typeMappingHandler = (key: string) => {
  return helperMapping[key] || '---';
};
