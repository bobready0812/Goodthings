/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center' , backgroundColor:"#5372F0"}}>
      <View style={
        {
        width:'90%', 
        backgroundColor:"#fff",
        borderRadius:20, 
        padding:20,}
        }>
          <StatusBar barStyle="light-content" />
        <Text style={{
            textAlign:'center', 
            fontSize:26, 
            fontWeight:'600',
            color:'#333',
            marginBottom:20}}>
            Quote of the Day
          </Text>
          <Text style={
          {color:'#000', 
          fontSize:16, 
          lineHeight:26,
          letterSpacing:1.1, 
          fontWeight:"400", 
          textAlign:'center', 
          marginBottom:10,
          paddingHorizontal:30,
          }}>
          The first duty of love is to listen.
        </Text>
        <Text style={{
          textAlign:'right',
          fontWeight:'300', 
          fontStyle:'italic',
          fontSize:16,
          color:'#000'
        }}> ---- Author Name</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#5372F0',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            NewQuote
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity 
          onPress={() => {}} 
          style={{
            borderWidth:2, 
            borderColor:'#5372F0',
            borderRadius:50,
            padding:15}}>
          <Text>🔊</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {}} 
          style={{
            borderWidth:2, 
            borderColor:'#5372F0',
            borderRadius:50,
            padding:15}}>
          <Text>🔊</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {}} 
          style={{
            borderWidth:2, 
            borderColor:'#5372F0',
            borderRadius:50,
            padding:15}}>
          <Text>🔊</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
