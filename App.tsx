import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
