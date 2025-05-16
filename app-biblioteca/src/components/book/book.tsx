import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface BookPros  {
   name: string;
   genreName: string;
   autorName: string;
   pages: number;
   publicationDate: Date;
};

function Book({name,genreName,autorName,pages,publicationDate}:BookPros) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{genreName}</Text>
      <Text>{autorName}</Text>
      <Text>{pages}</Text>
      <Text>{publicationDate}</Text>
    </View>
  )
}

export default Book