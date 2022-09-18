import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  I18nManager,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import { NativeModules } from "react-native";
import { title } from 'process';


const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();

 

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Title')}</Text>
          <Text style={styles.regularText}>
          {t('Intro')}
          </Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t("Title2")}</Text>
          <View style={styles.row}>
            <Text>{t('column_1')}</Text>
            <Text>{t('column_2')}</Text>
            <Text>{t('column_3')}</Text>
          </View>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Title3')}</Text>
          <TextInput style={styles.textInput} placeholder={t('placeholder')} />
        </View>
       
        <View style={styles.sectionWrapper}>
          <Button
            title={t("button1")}
            onPress={() => {
              i18n
                .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                .then(() => {
                  I18nManager.forceRTL(i18n.language === 'ar');
                  NativeModules.DevSettings.reload();
                });
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
  sectionWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  regularText: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default Home;