import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('./assets/newyork.jpeg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>New York</Text>
          <Text style={styles.cardLabel}>United States</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            magnam veniam nesciunt quas culpa aliquam dolor necessitatibus?
            Nobis animi quis doloribus cumque commodi harum mollitia, modi
            assumenda iste, labore libero.
          </Text>
          <Text style={styles.cardFooter}>33 hours away</Text>
        </View>
      </View>
    </View>
  );
};
export default FancyCard;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
   
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 8,
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 14,
    marginBottom: 10,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },
  cardFooter: {
    color: '#000000',
    marginBottom: 4,
  },
});
