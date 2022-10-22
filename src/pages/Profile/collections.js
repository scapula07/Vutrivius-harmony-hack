// images 
import verifyIcon from '../../assests/icon/verify.png'
import harmonyIcon from "../../assests/harmony.png"
import collectionImage from "../../assests/landingPage/new-collections/collection1.png"


export default function UserCollections() {

  const nfts = Array(20).fill(
    {
        image: collectionImage,
        nftName: 'Sofiah obirin NFT',
        collectionName: 'Sofiah #101',
        price: 30,

    }
)
  return (
    <>
      {/* nft collections */}
      <div className="mt-[50px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6 gap-y-8 ">
        {nfts.map((item, index) => (
          <div key={index}>
            {/* nft collection image */}
            <div>
              <img src={item.image} alt="" className='w-full' />
            </div>
            <div className="mt-[19px] space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center space-x-[10px]">
                  <p className="capitalize text-base leading-[18px] text-[#777E90]">{item.nftName}</p>
                  <img src={verifyIcon} alt="" className='h-4 w-4 md:h-5 md:w-5' />
                </div>
                <p className="capitalize text-base leading-[18px] text-[#777E90]">price</p>
              </div>

              <div className="flex justify-between">
                <p className="capitalize font-medium text-xl leading-[23px]">{item.collectionName}</p>
                <div className="flex items-center space-x-2">
                  <img src={harmonyIcon} alt="" className='h-5 w-5' />
                  <p className='uppercase text-[#58BD7D] font-medium text-xl leading-[23px]'>{item.price} One</p>
                </div>
              </div>
            </div>
          </div>
        ))

        }
      </div>

    </>
  )
}
