import React, { useState } from 'react';
import { View, Text, Image } from'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constants/theme';


const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: 'Discover the best places for food lovers! From cozy cafes to fine dining restaurants, explore top spots serving mouthwatering cuisines, local specialties, and unforgettable flavors.',
    image: require('./assets/images/onboard.jpeg'),
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: 'Choose a tasty dish that satisfies your cravings! From savory delights to sweet treats, explore a variety of flavors crafted to perfection.',
    image: require('./assets/images/tasty.webp'),
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description: 'Enjoy the convenience of pickup or delivery! Get your favorite dishes brought to your door or ready for you to grab on the go.',
    image: require('./assets/images/onboarding 2.webp'),
  }
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) =>{
    return (
      <View style={{
        padding: 12,
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  const onDone = () => {
    setShowHomePage(true);
  };
  

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides} // Assuming slides is defined elsewhere
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 150,
            }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 300,
                  borderRadius: 25,
                }} 
                resizeMode="contain"// Example styling, adjust as needed
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title,
              }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }



  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Home Screen</Text>
    </View>
  );
  
}
