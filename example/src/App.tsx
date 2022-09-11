import * as React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { RnViewMoreLess } from 'react-native-toggle-more-less';

export default function App() {
  const textToDisplay =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar.";

  return (
    <SafeAreaView style={styles.container}>
      <RnViewMoreLess
        numberOfLines={4}
        desc={textToDisplay}
        containerStyle={styles.viewMoreContainer}
        descStyle={styles.descStyle}
        moreText={'show more'}
        moreTextStyle={styles.moreLessTextStyle}
        lessText="show less"
        lessTextStyle={styles.moreLessTextStyle}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMoreContainer: {
    marginVertical: 32,
    paddingHorizontal: 12,
  },
  descStyle: {
    color: '#8c8c8c',
  },
  moreLessTextStyle: {
    color: '#0071D8',
  },
});
