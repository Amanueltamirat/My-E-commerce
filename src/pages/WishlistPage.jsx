import React, { useContext } from 'react'
import { CartContext } from '../stores/cartContext'
import WishListProducts from '../components/WishListProducts'
import JustForYou from '../components/JustForYou'
import { Cart } from '../stores/config'

function WishlistPage() {

const { wishList } = useContext(CartContext)
 const {allProducts} = useContext(Cart);
console.log(wishList)

  return (
    <div className='m-20'>
        <h1 className='mb-10 tracking-wide'>WishList ({wishList.length})</h1>
        <div>
            {
                wishList.length > 0? 
                <div>
                        <WishListProducts item={wishList} />
                        <JustForYou products={allProducts} count={4} />

                </div>
               
                       
           
                :
                <div className='flex justify-center'>
                    <p className='text-2xl font-semibold'>Wish List is empty</p>
                </div> 
            }
        </div>
    </div>
  )
}

export default WishlistPage