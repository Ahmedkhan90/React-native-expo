import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { H1, H6, Image, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image source={require('./image/mypic.jpg')} style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 10, marginTop: 10 }} />
        {/* <Text>Hello World</Text> */}
        <StatusBar style="auto" />
      </View>

      <View>
        
<Text>MUHAMMAD AHMED KHAN</Text>
        
       <Text>CONTACT #</Text> <Text> 03112030422</Text>
       <Text>E-mail:</Text> <Text>Mohammad.ahmedkhan@icloud.com</Text>
        <Text>KEY WORDS:</Text> <Text>Looking For a sultable position of sharia Adviser / Assistants of sharia advviser / Teacher
        position with a pertigious and reputable establishment where
        I will have a 'hands on' role.</Text>
      </View>

      <View>
        <Text>PERSONAL INFORMATION</Text> 
        <Text>Father's Name:</Text> <Text> MUHAMMAD MIKAIL KHAN</Text>
        <Text> CNIC:</Text><Text>  42201-9557244-7</Text>
        <Text>Date Of Birth:</Text><Text>1-MAR-1991</Text>
        <Text>Religion:</Text><Text>Islam</Text>
        <Text>Maritail Status:</Text><Text>Married</Text>
        <Text>Adress:</Text><Text>H No. 5/1856 Shah Faisal Colony Block 5 Karachi</Text>
    </View>

        <View>
          <Text>PERSNOL SKILLS</Text>
          <Text>Ms Office</Text>
          <Text>Web And Mobile Hybride Application Development</Text>
          <Text>Front-End And Back-End Developer</Text>
          <Text>Graphic Desiner</Text>
          <Text>English Composer</Text>
          <Text>Urdu Composer</Text>
          <Text>Arabic Compoder</Text>
          <Text>Persion Composer</Text>
        </View>
        
        <View>
        
          <Text>ACADEMIC QULIFICATION</Text>
          <Text>MATRIC: IN SCIENCE FORM MATRIC BOARD KARACHI</Text>
          <Text>INTER: IN COMMERCE FORM INTER BOARD KARACHI</Text>
          <Text>BECHOLOUR: IN COMMERCE FROM UNIVERCITY OF KARACHI(CONTINUE)</Text>
          <Text>MASTER'S IN ARABIC AND ISLAMIAT FROM KARACHI UNIVERCITY</Text>
          <Text>MASTER'S EQULANCE FROM HEC(HEIGHER EDUCATION CENTER KARACHI) FOR ARABIC And ISLAMIAT</Text>
          <Text>MPHIL FROM KARACHI UNIVERCTY(CONTINUE)</Text>

          <Text>RELIGION QULIFICATION</Text>
          <Text>SHAHADAT UL AMMA IS EQULE TO MATRIC IN ARABIC And ISLAMIAT</Text>
          <Text>SHAHADAT UL KHASSA IS EQULE TO INTER IN ARABIC And ISLAMIAT</Text>
          <Text>SHAHADAT UL ALMIA IS EQULE TO BECHOLER IN ARABIC And ISLMIAT</Text>
          <Text>SHAHADAT UL AALMIA IS EQULE TO MASTER IN ARABIC And ISLAMIAT</Text>
          <Text>SHAHADAT UL TAKHASSUS FIL FIQH IS EQULE TO M.PHIL IN ARABIC ISLMIAT</Text>
          <Text>ADEEB ARABIC FORM MATRIC BOARD OF KARACHI</Text>
          <Text>ALIM ARABIC FROM MATRIC BOARD OF KARACHI</Text>
          <Text>FAZIL ARABIC FROM MATRIC BOARD OF KARACHI </Text>
          <Text>TAJVEED E QURAN FROM MADARSA MANZAR UL ISLAM</Text>
     </View>
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
