import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contactList = [
    {
      uid: 1,
      name: 'Harshit Chadha',
      status: 'Software Engineer',
      image: require('./assets/avatar.jpeg'),
    },
    {
      uid: 2,
      name: 'John Doe',
      status: 'Product Manager',
      image: require('./assets/avatar.jpeg'),
    },
    {
      uid: 3,
      name: 'Alice Smith',
      status: 'UX Designer',
      image: require('./assets/avatar.jpeg'),
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <Image source={contact.image} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  container: {
    paddingHorizontal: 16,
    marginBottom:3
  },
  userCard: {
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap:10,
    backgroundColor:'purple',
    padding:10,
    borderRadius:10
    
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  
   
  },
  userName: {
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color:'white'
  },
});
