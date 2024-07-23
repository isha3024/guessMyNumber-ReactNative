import React, {useEffect, useRef} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomOTP = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  useEffect(() => {
    input1.current.focus();
  }, [input1]);

  return (
    <>
      <View>
        <Text style={styles.staticText}>OTP</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.otpBox}>
          <TextInput
            ref={input1}
            keyboardType="numeric"
            style={styles.text}
            maxLength={1}
            onChange={text => {
              if (text.nativeEvent.text.length == 1) {
                input2.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={input2}
            keyboardType="numeric"
            style={styles.text}
            maxLength={1}
            onChange={text => {
              if (text.nativeEvent.text.length == 1) {
                input3.current.focus();
              } else {
                input1.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={input3}
            keyboardType="numeric"
            style={styles.text}
            maxLength={1}
            onChange={text => {
              if (text.nativeEvent.text.length == 1) {
                input4.current.focus();
              } else {
                input2.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={input4}
            keyboardType="numeric"
            style={styles.text}
            maxLength={1}
            onChange={text => {
              if (!text.nativeEvent.text.length == 1) {
                input3.current.focus();
              }
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 30,
    paddingTop: 20
  },
  otpBox: {
    width: 70,
    height: 70,
    flex: 1,
    borderWidth: 2,
    borderColor: 'plum',
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    height: '100%',
    borderRadius: 5,
  },
  staticText: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center',
    color: 'midnightblue'
  }
});

export default CustomOTP;
