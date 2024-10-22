import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableHighlight, 
  ScrollView,
  FlatList,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface Course {
  id: number;
  name: string;
  fee: string;
  purpose: string;
  content: string[];
}

export interface CartItem extends Course {
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  ShortCourses: undefined;
  LongCourses: undefined;
  CourseDetail: { course: Course };
  Cart: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

  
    const CourseDetailScreen: React.FC<RootStackScreenProps<'CourseDetail'>> = ({ route, navigation }) => {
      const { course } = route.params;
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.courseDetailHeader}>
          <Text style={styles.courseDetailTitle}>{course.name}</Text>
          <Text style={styles.imagePlaceholder}>Course Detail Image Placeholder</Text>
        </View>
        <View style={styles.courseDetailContent}>
          <Text style={styles.detailText}>Fees: {course.fee}</Text>
          <Text style={styles.detailText}>Purpose: {course.purpose}</Text>
          <Text style={styles.detailText}>Content:</Text>
          {course.content.map((item: string, index: number) => (
            <Text key={index} style={styles.contentItem}>• {item}</Text>
          ))}
          <TouchableHighlight
            style={styles.addToCartButton}
            onPress={() => {
              navigation.navigate('Cart');
            }}
            underlayColor="#666"
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    header: {
      alignItems: 'center',
      padding: 20,
    },
    logoPlaceholder: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 10,
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    aboutSection: {
      padding: 20,
    },
    aboutTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    aboutText: {
      color: '#fff',
      marginBottom: 10,
    },
    imagePlaceholder: {
      color: '#fff',
      height: 150,
      backgroundColor: '#666',
      textAlign: 'center',
      lineHeight: 150,
      marginBottom: 10,
    },
    navigation: {
      alignItems: 'center',
    },
    navButton: {
      backgroundColor: '#555',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
      width: '80%',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    screenTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    courseCard: {
      backgroundColor: '#444',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
    },
    coursePlaceholder: {
      height: 100,
      backgroundColor: '#666',
      textAlign: 'center',
      lineHeight: 100,
      marginBottom: 5,
    },
    courseName: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    courseDetailHeader: {
      alignItems: 'center',
      padding: 20,
    },
    courseDetailTitle: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    courseDetailContent: {
      padding: 20,
    },
    detailText: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 5,
    },
    contentItem: {
      color: '#fff',
      marginLeft: 10,
    },
    addToCartButton: {
      backgroundColor: '#555',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
    },
    cartItem: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#444',
      marginVertical: 5,
      borderRadius: 5,
    },
    cartItemDetails: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    cartItemName: {
      color: '#fff',
      fontSize: 16,
    },
    cartItemPrice: {
      color: '#fff',
    },
    cartItemQuantity: {
      color: '#fff',
    },
    cartTotal: {
      padding: 20,
      backgroundColor: '#222',
      alignItems: 'center',
    },
    totalText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  const App: React.FC = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ShortCourses" component={ShortCoursesScreen} />
          <Stack.Screen name="LongCourses" component={LongCoursesScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
       );
    };
      export default App;
  
 