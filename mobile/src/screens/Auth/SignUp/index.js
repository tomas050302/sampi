import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Form } from '@unform/mobile';
import { Picker } from '@react-native-community/picker';

import monthDays from 'month-days';

import api from '../../../services/api';

import Input from '../../../components/Input';
import HelpButton from '../../../components/HelpButton';

import styles from './styles';

export default function SignUp({ navigation }) {
  const formRef = useRef(null);

  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const [birthdayDay, setBirthdayDay] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');
  const [birthdayYear, setBirthdayYear] = useState('');

  async function handleSubmit({ email, name, password, phone }) {
    const birth = `${birthdayMonth}-${birthdayDay}-${birthdayYear}`;

    try {
      await api.post('/api/user/register', {
        name,
        email,
        password,
        birth,
        gender,
        phone,
        position,
      });
    } catch (error) {
      if (error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      }
      if (error.response.data.details[0].message) {
        Alert.alert('Error', error.response.data.details[0].message);
      }
      throw error;
    }

    Alert.alert(
      'Success',
      'Navigate you can now sign up with your new account! Have fun!'
    );
    navigation.goBack();
  }

  function populateYears() {
    const years = ['YEAR'];

    for (let i = 1; i < 120; i++) {
      years.push(new Date().getFullYear() - i);
    }

    return years;
  }

  useEffect(() => {
    const days = monthDays({
      month: birthdayMonth - 1,
      year: parseInt(birthdayYear) || new Date().getFullYear(),
    });

    let daysArray = ['DAY'];

    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    setDaysOfMonth(daysArray);
  }, [birthdayMonth, birthdayYear]);

  const genders = ['GENDER', 'Male', 'Female'];

  const months = [
    'MONTH',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const years = populateYears();

  const positions = [
    'POSITIONS',
    'Goalkeeper',
    'Defender',
    'Midfielder',
    'Forward',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logoDark.png')}
        />
      </View>

      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name='name' label='NAME' type='name' />
            <Input name='email' label='EMAIL' type='email' />

            <View style={styles.formPickerContainer}>
              <Picker
                selectedValue={gender}
                style={styles.formPicker}
                onValueChange={itemValue =>
                  itemValue !== 'GENDER' ? setGender(itemValue) : null
                }
              >
                {genders.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })}
              </Picker>
            </View>

            <View style={styles.birthdayRow}>
              <View style={[styles.formPickerContainer, { flex: 1.25 }]}>
                <Picker
                  selectedValue={birthdayMonth}
                  style={[styles.formPicker, { paddingHorizontal: 65 }]}
                  onValueChange={itemValue =>
                    itemValue != 'MONTH' ? setBirthdayMonth(itemValue) : null
                  }
                >
                  {months.map((item, index) => {
                    return (
                      <Picker.Item key={index} label={item} value={item} />
                    );
                  })}
                </Picker>
              </View>

              <View style={styles.spacer} />

              <View style={styles.formPickerContainer}>
                <Picker
                  style={styles.formPicker}
                  selectedValue={birthdayDay}
                  onValueChange={itemValue =>
                    itemValue != 'DAY' ? setBirthdayDay(itemValue) : null
                  }
                >
                  {daysOfMonth.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.toString()}
                        value={item}
                      />
                    );
                  })}
                </Picker>
              </View>

              <View style={styles.spacer} />

              <View style={styles.formPickerContainer}>
                <Picker
                  selectedValue={birthdayYear}
                  style={[styles.formPicker, { paddingHorizontal: 52 }]}
                  onValueChange={itemValue =>
                    itemValue != 'YEAR' ? setBirthdayYear(itemValue) : null
                  }
                >
                  {years.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.toString()}
                        value={item}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>

            <Input name='phone' label='PHONE' type='text' />

            <View style={styles.formPickerContainer}>
              <Picker
                selectedValue={position}
                style={styles.formPicker}
                onValueChange={itemValue =>
                  itemValue != 'POSITIONS' ? setPosition(itemValue) : null
                }
                mode='dialog'
              >
                {positions.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })}
              </Picker>
            </View>

            <Input name='password' label='PASSWORD' type='password' />
          </Form>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => formRef.current.submitForm()}
      >
        <Text style={styles.buttonText}>Sign Up!</Text>
      </TouchableOpacity>

      <View style={styles.signUpTextContainer}>
        <Text style={styles.simpleSignUpText}>Already have an account? </Text>
        <TouchableOpacity
          style={styles.signUpClickable}
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <Text style={styles.clickableSignUpText}>Sign In!</Text>
        </TouchableOpacity>
      </View>
      <HelpButton
        text='These are the authentication screens,
          here you will be able to provide your credentials in order to be identified in the app.
          When you create a profile you need to correctly provide some information that we will use
          in order to make your profile more suitable for you! Later you will be able to change some of it
          as well as add a picture to your profile to customize it even more! For now, just provide your
          e-mail and password and tap the button LOGIN to start!'
      />
    </View>
  );
}
