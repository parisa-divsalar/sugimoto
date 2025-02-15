import {  Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { UserShopType } from '@/type/user.ts';
import useStyles from '@/pages/Products/useStyles.ts';
import {  useSelector } from 'react-redux';
import { selectUserShopSelector } from '@/store/user/userSelecor.ts';
import shoes from '@/assets/images/shoes.avif';



const ProductDetails = () => {
	const classes = useStyles();
	const selectUserShop: UserShopType = useSelector(selectUserShopSelector);


	const getAllPosts = () => {

	};


	useEffect(() => {
		getAllPosts();
	}, [selectUserShop]);

	return (
		<Box className={classes.mainContainer}>
				<Box>
					<Box className='fadeInRightAnimation'>
						<Box className={classes.imageContainer}>
							<img  className={classes.imageContainerImg} src={shoes}/>
						</Box>
						<Box>
							<Box className={classes?.details}>
								<Typography fontWeight='bold' fontSize='large' color='text.main'>
									نام محصول :
								</Typography>
								<Typography mr={1} color='grey.light'>
									{"لورم ایپسوم"}
								</Typography>
							</Box>
							<Box className={classes?.details}>
								<Typography fontWeight='bold' fontSize='large' color='text.main'>
									قیمت محصول :
								</Typography>
								<Typography mr={1} color='grey.light'>
									{"دویست و بیست هزار تومان "}
								</Typography>
							</Box>
							<Box  className={classes?.details}>
								<Typography fontWeight='bold' fontSize='large' color='text.main'>
									جزییات محصول :
								</Typography>
								<Typography  mr={1} color='grey.light'>
									{"امیدوار هستیم که با همراهی و حمایت شما عزیزان و با تخصص کارشناسان و متخصصان این حوزه، این مسیر پر فراز و نشیب را به راحتی طی کنیم.    بیشتر، " }
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box className='fadeInLeftAnimation' />
			</Box>

		</Box>
	);
};

export default ProductDetails;
