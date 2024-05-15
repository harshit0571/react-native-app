import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,

    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    width: "20%",
    height: 100,
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#50DBB4',
  },
  card3: {
    backgroundColor: '#5DA3FA',
  },
});
