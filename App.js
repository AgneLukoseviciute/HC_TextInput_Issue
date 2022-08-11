import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
// import {
//   createTheme,
//   Themes,
//   useStyleForTheme,
//   mapTheme,
//   ThemeContext,
// } from './theming.ts';
// import {AppTheme} from 'react-native-windows';

const baseTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputBoxStyle: {
    inputBoxStyle: {
      width: 832,
      height: 70,
      color: 'black',
      fontSize: 24,
      lineHeight: 32,
      textAlignVertical: 'center',
      borderRadius: 8,
      backgroundColor: 'red',
      marginBottom: 30,
      borderWidth: 2,
      borderColor: 'green',
    },
  },
});

// const highContrastDarkTheme = StyleSheet.create({
//   ...baseTheme,
//   inputBoxStyle: {
//     ...baseTheme.inputBoxStyle,
//     backgroundColor: 'black',
//     borderWidth: 2,
//     borderColor: 'red',
//     color: 'black',
//   },
// });

// export const myTheme = createTheme(baseTheme)
//   .withTheme(Themes.HighContrastDark, highContrastDarkTheme)
//   .build();

export default function App() {
  // const [theme, getTheme] = useState(
  //   mapTheme(
  //     'dark',
  //     AppTheme.isHighContrast,
  //     AppTheme.currentHighContrastColors,
  //   ),
  // );

  // const styles = useStyleForTheme(myTheme);
  return (
    <View>
      <TextInput
        placeholder={'placeholderText'}
        onChangeText={() => {}}
        maxLength={35}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{borderColor: 'red', backgroundColor: 'black'}}
      />
    </View>
  );
}
