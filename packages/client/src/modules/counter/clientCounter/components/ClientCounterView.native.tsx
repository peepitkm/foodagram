import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, primary } from '../../../common/components/native';

interface ViewProps {
  text: string;
  children: any;
}

export const ClientCounterView = ({ text, children }: ViewProps) => (
  <View>
    <View style={styles.element}>
      <Text style={styles.box}>{text}</Text>
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  element: {
    paddingTop: 30
  },
  box: {
    textAlign: 'center',
    marginBottom: 5
  }
});
interface ButtonProps {
  onClick: () => any;
  text: string;
}

export const ClientCounterButton = ({ onClick, text }: ButtonProps) => (
  <Button type={primary} onPress={onClick}>
    {text}
  </Button>
);

export default ClientCounterView;
