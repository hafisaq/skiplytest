import { View, Text,I18nManager,Button,StyleSheet} from 'react-native'
import React from 'react'

import {useTranslation} from 'react-i18next';

export default function Settings({navigation}) {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text style={styles.settings}>{t("Settings")}</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
  settings: {
    textAlign:'left'
  }
})