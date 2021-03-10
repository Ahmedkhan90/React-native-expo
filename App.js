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
        <Text>
        MUHAMMAD AHMED KHAN
        CONTACT # 03112030422
        E-mail:Mohammad.ahmedkhan@icloud.com
        KEY WORDS:
        Looking For a sultable position of sharia Adviser / Assistants of sharia advviser / Teacher
        position with a pertigious and reputable establishment where
        I will have a 'hands on' role.
  </Text>
      </View>

      <View>
      <Text>
        PERSONAL INFORMATION
        
        Father's name : MUHAMMAD MIKAIL KHAN
          CNIC: 42201-9557244-7
          DOB: -1-MAR-1991
          Religion : Islam
          Adress: H no. 5/1856 Shah faisal colony Block 5 karachi
          </Text>
    </View>

        <View>
        <Text>
        PERSNOL SKILLS
        
            Ms Office
            Web  mobile Aplication Development
            Englisht Composing
            Urdu Composing
            Arabic Cmposing
            Persion Composing
            </Text>
        </View>
        <View>
        <Text>
    QULIFICATION

    MATRIC: IN SCIENCE FORM MATRIC BOARD KARACHI
    INTER: IN COMMERCE FORM INTER BOARD KARACHI
    BECHOLOUR: IN COMMERCE FROM UNIVERCITY OF KARACHI(CONTINUE)
    MASTER'S IN ARABIC AND ISLAMIAT FROM KARACHI UNIVERCITY
    EQULANCE FRON HEC(HEIGHER EDUCATION CENTER KHI) FOR ARABIC And ISLAMIAT
    MPHIL FROM KARACHI UNIVERCTY(CONTINUE)
    SHAHADAT UL AMMA IS EQULE TO MATRIC IN ARABIC And ISLAMIAT
    SHAHADAT UL KHASSA IS EQULE TO INTER IN ARABIC ISLAMIAT
    SHAHADAT UL ALMIA IS EQULE TO BECHOLER IN ARABICISLMIAT
    SHAHADAT UL AALMIA IS EQULE TO MASTER IN ARABICISLAMIAT
    SHAHADAT UL TAKHASSUS FIL FIQH IS EQULE TO M.PHIL IN ARABIC ISLMIAT
    ADEEB ARABIC FORM MATRIC BOARD OF KARACHI
    ALIM ARABIC FROM MATRIC BOARD OF KARACHI
    FAZIL ARABIC FROM MATRIC BOARD OF KARACHI   
    </Text>
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
