import React, { useState } from 'react';
import { View, Text, Image } from'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constants/theme';


const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: 'Find the best restaurants, cafes, and shops near you.',
    image: require('./assets/images/onboarding 1.png'),
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: 'Find the best restaurants, cafes, and shops near you.',
    image: require('./assets/images/onboarding 1.png'),
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description: 'Find the best restaurants, cafes, and shops near you.',
    image: require('./assets/images/onboarding 1.png'),
  }
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

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
            }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 300,
                }} 
                resizeMode="contain"// Example styling, adjust as needed
              />
              <Text>
                {item.title}
              </Text>
              <Text>
                {item.description}
              </Text>
            </View>
          );
        }}
        onDone={onDone} // Call onDone when the intro is finished
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
