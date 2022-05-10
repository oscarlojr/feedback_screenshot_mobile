import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text 
       style={styles.text}
      >
        Estudo realizado com ♥ na RocketSeat
      </Text>
    </View>
  );
}