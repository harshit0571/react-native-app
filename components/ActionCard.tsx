import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

const ActionCard = () => {
  const openWebsite = (websiteLink: string): void => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in Javascript 21!! lore
          </Text>
        </View>
        <Image source={require('./assets/js.png')} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2} style={{color: 'white'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            corrupti explicabo laboriosam dicta fuga quam veniam reiciendis est
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://github.com/harshit0571');
            }}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://github.com/harshit0571');
            }}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 'auto',
    height: 'auto',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    color: 'white',
  },
  socialLinks: {
    fontSize: 15,
    color: 'black',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
  },
});
