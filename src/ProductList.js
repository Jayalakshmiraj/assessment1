import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
            Products:
            [
              {
            
name: "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink",
                "image_url":"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                "salePrice":119.99,
                "shortDescription": "Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures.FEATURES:Realistic driving experience with foot pedal acceleration and steering wheelPowerful 6V motor with 2.5 mph max speed and 3 speed modesIncludes remote control with speed selection and parking modeBuilt-in AUX jack, headlights, horn, and easy start/stop buttonRechargeable battery with charger allows for hour of playtimeRecommended for ages: 2+ yearsDIMENSIONS:Overall Dimensions: 37.5&quot;(L) x 24&quot;(W) x 19.5&quot;(H)Weight: 24 lbs.Weight Capacity: 44 lbs.SPECIFICATIONS:Material: Plastic, MetalMax Speed: 2.5 mphCharge Time: 8 - 12 hoursRun TIme: 1 - 2 hoursBattery Type: 6V 7AHCharger Type: DC 6V 700MAIncludes: Ride-on car, Remote control, ChargerAssembly required (with instructions)ASTM-certifiedBCP SKU: SKY4622"


                
            },
            {
                name: "Hot Wheels 9-Car Gift Pack Collection (Styles May Vary)",

            "image_url":"https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
            "salePrice":9.47,
            "shortDescription": "Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures.FEATURES:Realistic driving experience with foot pedal acceleration and steering wheelPowerful 6V motor with 2.5 mph max speed and 3 speed modesIncludes remote control with speed selection and parking modeBuilt-in AUX jack, headlights, horn, and easy start/stop buttonRechargeable battery with charger allows for hour of playtimeRecommended for ages: 2+ yearsDIMENSIONS:Overall Dimensions: 37.5&quot;(L) x 24&quot;(W) x 19.5&quot;(H)Weight: 24 lbs.Weight Capacity: 44 lbs.SPECIFICATIONS:Material: Plastic, MetalMax Speed: 2.5 mphCharge Time: 8 - 12 hoursRun TIme: 1 - 2 hoursBattery Type: 6V 7AHCharger Type: DC 6V 700MAIncludes: Ride-on car, Remote control, ChargerAssembly required (with instructions)ASTM-certifiedBCP SKU: SKY4622",


            
        
        }]
        }
    }
    render() {
        // let listOfProductDisplayed=this.state.Products.map((product,index)=>{
        //     return <ProductDetails key={index} details={product}/>   
        // })
        let listOfProductDisplayed='';
        if(this.props.search == ''){
            listOfProductDisplayed=this.state.Products.map((product,index)=>{
            return <ProductDetails remove1={this.props.remove} addCount={this.props.count} key={index} details={product}/>
        })
    }
    else{
        let filterProduct=this.state.Products.filter((product,index)=>{
            return product.name.includes(this.props.search)
        });
        listOfProductDisplayed=filterProduct.map((product,index)=>{
            return <ProductDetails remove1={this.props.remove} key={index} details={product}/>
        })
    }
    

        return (
           <div>
           {listOfProductDisplayed}
               
           </div>
        );
        }    
    }


