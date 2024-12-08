import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
      icon: '/images/trophy.png',
      title: 'High Quality',
      description: 'crafted from top materials'
    },
    {
      icon: '/images/tick.png',
      title: 'Warranty Protection',
      description: 'Over 2 years'
    },
    {
      icon: '/images/gift.png',
      title: 'Free Shipping',
      description: 'Order over 150 $'
    },
    {
      icon: '/images/support.png',
      title: '24 / 7 Support',
      description: 'Dedicated support'
    }
  ]

export default function Cart() {

  return (
<div className='overflow-hidden'>
<div className="relative h-[280px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    <div className="lg:max-w-6xl mx-auto px-2 lg:px-4 py-8 font-poppins overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-2 lg:gap-8">
        {/* Cart Items */}
        <div className="space-y-4">
          {/* Header */}
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-0 lg:gap-4 lg:px-4 px-8 py-4 bg-cream text-sm md:text-base">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div></div>
          </div>

          {/* Cart Item */}
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 items-center p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 bg-cream rounded-lg overflow-hidden">
                <Image
                  src="/images/sofa-main.png"
                  alt="Asgaard sofa"
                  width={200}
                  height={200}
                  quality={100}
                  className="object-contain object-center pt-1"
                  sizes="80px"
                />
              </div>
              <span className="text-sm md:text-base text-lightGray">Asgaard sofa</span>
            </div>
            <div className="text-sm md:text-base text-lightGray">Rs. 250,000.00</div>
            <div className='text-center'>
              <input
                type="text"
                value="1"
                className="w-8 px-2 py-1 border border-lightGray rounded-md  text-center text-sm "
              />
            </div>
            <div className="hidden lg:block text-sm md:text-base">Rs. 250,000.00</div>
            <button className="text-gray-500 hover:text-gray-700">
              <Image src='./images/brown-bin.png' className="w-4 h-4" alt={''} />
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-cream p-6 rounded-lg h-fit">
          <h2 className="text-xl md:text-2xl font-medium mb-6">Cart Totals</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base">Subtotal</span>
              <span className="text-sm md:text-base">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm md:text-base">Total</span>
              <span className="text-[#B88E2F] text-sm md:text-base">Rs. 250,000.00</span>
            </div>
          </div>
          <button 
            
            className="w-32 text-sm md:text-base border border-black py-2 rounded"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
    <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 mt-6 pl-6 lg:pl-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="flex items-center gap-4 pl-8 md:pl-0"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className='flex flex-col'>
              <h3 className="text-[#333333] text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#666666] text-base">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

