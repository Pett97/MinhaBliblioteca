import React from 'react'
import { Text } from 'react-native-paper';

interface inforProps{
   info:string
}

function Info({info}:inforProps) {
  return (
    <>
    <Text variant="bodyMedium">{info}</Text>
    </>
  )
}

export default Info