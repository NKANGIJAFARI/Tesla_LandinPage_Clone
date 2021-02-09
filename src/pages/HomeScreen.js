import React from 'react'
import Item from '../components/Item'

import Accessories from '../Images/Desktop-Accessories.jpg'
import ModelS from '../Images/Desktop-ModelS.jpeg'

import Model3 from '../Images/Desktop-Model3.jpeg'
import ModelX from '../Images/Desktop-ModelX.jpeg'
import ModelY from '../Images/Desktop-ModelY.jpeg'
import SolarPanels from '../Images/Desktop-SolarPanels.jpeg'
import SolarRoof from '../Images/Desktop-SolarRoof.jpeg'

const HomeScreen = () => {
    return (
        <div className="app__itemsContainer">
        <Item 
          title='Lowest Cost Solar Panels in America'
          desc="Money-back guarantee"
          descLink=""
          background={SolarPanels}
          leftBtnText = "Order Now"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink = ""
          twoButtons= 'true'
          first
        > </Item>

        <Item 
          title='Model S'
          desc="$69,420"
          descLink=""
          background={ModelS}
          leftBtnText = "CUSTOM ORDER"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
          twoButtons= 'true'
        />
       <Item 
          title='Model 3'
          desc="Money-back guarantee"
          descLink=""
          background={Model3}
          leftBtnText = "CUSTOM ORDER"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
          twoButtons= 'true'
        />
        <Item 
          title='Model X'
          desc="Money-back guarantee"
          descLink=""
          background={ModelX}
          leftBtnText = "CUSTOM ORDER"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
          twoButtons= 'true'
        />
        <Item 
          title='Model Y'
          desc="Money-back guarantee"
          descLink=""
          background={ModelY}
          leftBtnText = "CUSTOM ORDER"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
          twoButtons= 'true'
        />
        <Item 
          title=' Solar For New Roofs'
          desc="Money-back guarantee"
          descLink=""
          background={SolarRoof}
          leftBtnText = "CUSTOM ORDER"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
          twoButtons= 'true'
        />
        <Item 
          title='Accessories'
          desc="Money-back guarantee"
          descLink=""
          background={Accessories}
          leftBtnText = "SHOP NOW"
          leftBtnLink = ""
          rightBtnText = "LEARN MORE"
          rightBtnLink =""
        />
      </div>
    )
}

export default HomeScreen
