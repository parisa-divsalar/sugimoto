import { Avatar, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserShopType } from '@/type/user.ts';
import CustomTable from '@/components/UI/CustomTable';
import CustomPagination from '@/components/UI/CustomPagination';
import { CellType } from '@/type/common.ts';
import useStyles from '@/pages/Products/useStyles.ts';
import { PostModel } from '@/type/post.ts';
import { useSelector } from 'react-redux';
import { selectUserShopSelector } from '@/store/user/userSelecor.ts';
import SearchComponent from '@/pages/Products/Search';

const Products = () => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const selectUserShop: UserShopType = useSelector(selectUserShopSelector)


  const list = [
		  {
			  "id": "98dF",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/45Z1mLBc27U/images/1440_1461_45Z1mxylh1I_sm.webp",
			  "link": "https://www.instagram.com/p/C-29o6CIZwC/",
			  "post_date": "2024-08-19T16:49:30Z",
			  "bookmarks": 123.000,
			  "views": 8,
			  "orders": 1,
			  "copy_contacts": 1
		  },
		  {
			  "id": "94Z5",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/45P1AFm3Cha/images/1440_1440_45P1AowBHOR_sm.webp",
			  "link": "https://www.instagram.com/p/C-vNXumo9lo/",
			  "post_date": "2024-08-16T16:33:03Z",
			  "bookmarks": 129.878,
			  "views": 3,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "93wx",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/45LHHDQxz7h/images/1170_1170_45LHHsvIKa8_sm.webp",
			  "link": "https://www.instagram.com/p/C-sogxOIKXn/",
			  "post_date": "2024-08-15T16:32:29Z",
			  "bookmarks": 908.876,
			  "views": 1,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8hZi",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/3ZC9uf0hzQm/images/1440_1800_3ZC9tZ8rWf4_sm.webp",
			  "link": "https://www.instagram.com/p/C6EqctIIGHS/",
			  "post_date": "2024-04-22T17:54:13Z",
			  "bookmarks": 987.908,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8GuJ",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/42eNfvkDtuR/images/1440_1800_42eNfi2TG2t_sm.webp",
			  "link": "https://www.instagram.com/p/C8C0vlKIH1V/",
			  "post_date": "2024-06-10T17:48:29Z",
			  "bookmarks": 125.876,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8Gsq",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/41EgkXPzJKo/images/1440_1800_41EgkIlB73v_sm.webp",
			  "link": "https://www.instagram.com/p/C7mfLXbICmo/",
			  "post_date": "2024-05-30T17:41:18Z",
			  "bookmarks": 324.876,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8Gsp",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/41KUKqysimX/images/1440_1800_41KUKbq2hAV_sm.webp",
			  "link": "https://www.instagram.com/p/C7rpZ3MqylX/",
			  "post_date": "2024-06-01T17:46:52Z",
			  "bookmarks": 321.876,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8Gsk",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/42yHnCXZAbk/images/1440_1800_42yHnlRvvLr_sm.webp",
			  "link": "https://www.instagram.com/p/C8SQ8Jso7GW/",
			  "post_date": "2024-06-16T17:43:28Z",
			  "bookmarks": 176.765,
			  "views": 6,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8GsV",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/41HCQFUuL5U/images/1440_1800_41HCQprLlDA_sm.webp",
			  "link": "https://www.instagram.com/p/C7pGIy0oqGa/",
			  "post_date": "2024-05-31T18:00:13Z",
			  "bookmarks": 123,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8GsR",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/42s5rlf8ME9/images/1440_1800_42s5r5HaRlX_sm.webp",
			  "link": "https://www.instagram.com/p/C8NIsQ6I2jJ/",
			  "post_date": "2024-06-14T17:55:12Z",
			  "bookmarks": 567,
			  "views": 2,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8Gs9",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/4289IsUHaFF/images/1440_1800_4289IfnC7bS_sm.webp",
			  "link": "https://www.instagram.com/p/C79rOEZI7pn/",
			  "post_date": "2024-06-08T17:49:03Z",
			  "bookmarks": 673.999,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "8Gs8",
			  "thumbnail": "https://cdn-3q31.modai.media/shops/floropera/42LXW2Rsc70/images/1440_1800_42LXVM770Zm_sm.webp",
			  "link": "https://www.instagram.com/p/C8cjlAaoygS/",
			  "post_date": "2024-06-20T17:38:44Z",
			  "bookmarks": 234.000,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eJA",
			  "thumbnail": "https://cdn-2023-08.modai.media/shops/floropera/97/3_sm.webp",
			  "link": "https://www.instagram.com/p/CwdQxIzI-a-/",
			  "post_date": "2023-08-27T17:56:53Z",
			  "bookmarks": 100.999,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eG9",
			  "thumbnail": "https://cdn-2023-08.modai.media/shops/floropera/95/2_sm.webp",
			  "link": "https://www.instagram.com/p/Cwf6VlbIdwE/",
			  "post_date": "2023-08-28T18:38:36Z",
			  "bookmarks": 123.765,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eF3",
			  "thumbnail": "https://cdn-2023-08.modai.media/shops/floropera/93/4_sm.webp",
			  "link": "https://www.instagram.com/p/Cwk9s29Ig5-/",
			  "post_date": "2023-08-30T17:44:12Z",
			  "bookmarks": 432,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eCv",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/91/3_sm.webp",
			  "link": "https://www.instagram.com/p/CwqG78fqXYZ/",
			  "post_date": "2023-09-01T17:41:06Z",
			  "bookmarks": 657,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eBc",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/90/2_sm.webp",
			  "link": "https://www.instagram.com/p/CwvUC6iNei9/",
			  "post_date": "2023-09-03T18:11:51Z",
			  "bookmarks": 345.900,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3eAt",
			  "thumbnail": "https://cdn-2024-01.modai.media/shops/floropera/9/2_sm.webp",
			  "link": "https://www.instagram.com/p/C1zzSAgoNjZ/",
			  "post_date": "2024-01-07T18:38:44Z",
			  "bookmarks":176.990,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e9B",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/89/1_sm.webp",
			  "link": "https://www.instagram.com/p/Cw3PdzMtkqZ/",
			  "post_date": "2023-09-06T20:07:19Z",
			  "bookmarks": 190.876,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e8A",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/88/5_sm.webp",
			  "link": "https://www.instagram.com/p/Cw5t7DiN2Dj/",
			  "post_date": "2023-09-07T19:10:23Z",
			  "bookmarks": 234.877,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e72",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/87/1_sm.webp",
			  "link": "https://www.instagram.com/p/CxAimAItuk1/",
			  "post_date": "2023-09-10T10:53:29Z",
			  "bookmarks": 432.988,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e65",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/86/1_sm.webp",
			  "link": "https://www.instagram.com/p/CxDok1ptUTK/",
			  "post_date": "2023-09-11T15:47:08Z",
			  "bookmarks":322.990,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e57",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/85/2_sm.webp",
			  "link": "https://www.instagram.com/p/CxD4KGANidy/",
			  "post_date": "2023-09-11T17:52:13Z",
			  "bookmarks": 123.000,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e46",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/84/3_sm.webp",
			  "link": "https://www.instagram.com/p/CxI9km-tfn0/",
			  "post_date": "2023-09-13T17:15:44Z",
			  "bookmarks": 129.666,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  },
		  {
			  "id": "3e2y",
			  "thumbnail": "https://cdn-2023-11.modai.media/shops/floropera/83/2_sm.webp",
			  "link": "https://www.instagram.com/p/CxOIogMt6BL/",
			  "post_date": "2023-09-15T17:28:35Z",
			  "bookmarks": 123.666,
			  "views": 0,
			  "orders": 0,
			  "copy_contacts": 0
		  }
  ]

  const getAllPosts = () => {
	  //@ts-ignore
	  setPosts(list);
	  setTotalPages( 1);
  }
	  useEffect(() => {
		getAllPosts();
	  }, [currentPage, rowsPerPage, selectUserShop]);

  const PostThumbnailAction = (row: PostModel) => {
    return (
      <Box className='flexCenter'>
        <Avatar src={row.thumbnail} sx={{ width: 48, height: 48 }} />
      </Box>
    );
  };

  const tableHead = [
    {
      key: 'row',
      label: 'ردیف',
      type: CellType.ROW,
    },
    {
      key: 'bookmarks',
      label: ' قیمت',
      type: CellType.NUMBER,
    },
    {
      key: 'views',
      label: 'تعداد بازدید',
      type: CellType.NUMBER,
    },
    {
      key: 'orders',
      label: 'تعداد ثبت سفارش',
      type: CellType.NUMBER,
    },
    {
      key: 'copy_contacts',
      label: 'تعداد کپی اطلاعات تماس',
      type: CellType.NUMBER,
    },
    {
      key: 'post_date',
      label: 'تاریخ محصول',
      type: CellType.DATE,
    },
    {
      key: 'thumbnail',
      label: 'تصویر محصول',
      type: CellType.ACTION,
      action: PostThumbnailAction,
    },
  ];

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.header}>
        <SearchComponent getAllData={getAllPosts} label='نام محصول' />
      </Box>

      <CustomTable
        rows={posts}
        tableHead={tableHead}
        rowsIndex={totalPages === 1 ? 0 : rowsPerPage * (currentPage - 1)}
      />

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangeCurrentPage={(page: number) => setCurrentPage(page)}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={(rowsPerPage: number) => {
          if (currentPage !== 0) setCurrentPage(1);
          setRowsPerPage(rowsPerPage);
        }}
      />
    </Box>
  );
};

export default Products;
