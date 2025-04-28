import React from 'react'
import Header from '../../commoncomponents/header/Header';
import Footer from '../../commoncomponents/footer/Footer';
import KidsCollection from '../../commoncomponents/KidsCollection';
import Bath from '../../commoncomponents/bath-body/Bath';
import Bed from '../../commoncomponents/bed-bath/Bed';
import Trendingproducts from '../../commoncomponents/trending/Trendingproducts';

const Main = () => {
  return (
  <>
  <Header />
  <KidsCollection />
  <Bath />
  <Bed />
  <Trendingproducts />


  <Footer />
  </>
  )
}

export default Main;