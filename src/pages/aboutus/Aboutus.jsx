import React from 'react'
import Header from '../../commoncomponents/header/Header';
import Footer from '../../commoncomponents/footer/Footer';
import { Blue, Green } from '../../assets/images';

const Aboutus = () => {
  return (
    <>
      <Header />
      <div className='px-12'>
        <div>
        <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img
          src={Green}
          alt="Top Left"
          className="absolute top-[12px] right-[30px] left-[45px] -translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Top Right"
          className="absolute top-[12px] right-[40px] translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Bottom Left"
          className="absolute top-[34px] left-[41px] -translate-x-full translate-y-full"
        />
        <img
          src={Green}
          alt="Bottom Right"
          className="absolute bottom-0 right-0 left-[145px] top-[36px] translate-x-full translate-y-full"
        />

        {/* Heading */}
        <h1 className="px-12 py-4  text-2xl font-bold">About Us</h1>
      </div>

          <div className='text-center mt-4'>
            <h1 className='text-4xl font-bold mt-4'>Welcome To Ellie</h1>
            <p className='mt-6 px-12 text-center'>
              Ellie’s heart is in the right place. Ellie, bath bed & baby company believes in unity, togetherness and spreading love to all and that Everyone is deserving of premium quality products for themselves and their babies. We don’t believe that good health and quality are negotiable. For that reason, our commitment is to offer premium quality products made with environmentally friendly materials at reasonable prices, making all of Ellie’s products accessible to everyone without breaking the bank!
            </p>
          </div>
        </div>

        <div className='mt-4'>
        <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img
          src={Green}
          alt="Top Left"
          className="absolute top-[12px] right-[30px] left-[45px] -translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Top Right"
          className="absolute top-[12px] right-[40px] translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Bottom Left"
          className="absolute top-[34px] left-[41px] -translate-x-full translate-y-full"
        />
        <img
          src={Green}
          alt="Bottom Right"
          className="absolute bottom-0 right-0 left-[128px] top-[36px] translate-x-full translate-y-full"
        />

        {/* Heading */}
        <h1 className="px-12 py-4  text-2xl font-bold">Mission</h1>
      </div>
          <p className='mt-6 px-12 text-center'>
            Ellie, bath bed & baby company specializes in bath bed & baby products for babies and all ages. Our product line includes premium quality fabrics for our bed linens and towels, and a full complement of plant-based non-toxic formulated body care products, wipes and disposable baby diapers all designed with love and care for healthy families.
          </p>
        </div>

        <div className='mt-4'>
        <div className="relative w-fit mt-8 mb-4">
        {/* Corner Images */}
        <img
          src={Green}
          alt="Top Left"
          className="absolute top-[12px] right-[30px] left-[45px] -translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Top Right"
          className="absolute top-[12px] right-[40px] translate-x-full -translate-y-full"
        />
        <img
          src={Blue}
          alt="Bottom Left"
          className="absolute top-[34px] left-[41px] -translate-x-full translate-y-full"
        />
        <img
          src={Green}
          alt="Bottom Right"
          className="absolute bottom-0 right-0 left-[157px] top-[36px] translate-x-full translate-y-full"
        />

        {/* Heading */}
        <h1 className="px-12 py-4  text-2xl font-bold">Goal</h1>
      </div>
          <p className='mt-6 px-12 text-center'>
            Ellie products are designed with love and care, always prioritizing what is most important. All our products are responsibly manufactured, with pH levels safe for infants and all ages. Our products are natural, free of harmful chemicals, and respectful of the environment to ensure our children inherit a healthy green planet. No animals were used in the testing of our products.
          </p>
        </div>

        <p className='text-center font-bold mt-6'>Thanks For Visiting Our Site</p>
        <p className='text-center mt-6 text-[#0c2dfe] font-extrabold'>Have a nice day !</p>
      </div>
      <Footer />
    </>
  )
}

export default Aboutus;
