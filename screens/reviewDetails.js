import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { images } from '../styles/global';

export default function ReviewDetails( { navigation }) {
  const rating = navigation.getParam("rating");

  
   return(
    <View style={globalStyles.container}>
      <Card>
      <Text style={globalStyles.text}> ReviewDetails Screen</Text>
       <Text>{ navigation.getParam('title') }</Text>
       <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.ratings}>
        <Text> GameZone Rating</Text>
        <Image source= {images.ratings[rating]}/>
        </View>
      </Card>
    </View>
   )
}

const styles= StyleSheet.create({
  ratings: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})
