import React, { useMemo, useState } from 'react';

import { styles } from './style';
import {
  Dimensions,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TextLayoutEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const DEFAULT_FONT_SIZE = 32;
const DEFAULT_LINE_HEIGHT = 38;

const { width } = Dimensions.get('window');
interface RnViewMoreLessProps {
  numberOfLines: number;
  desc: string;
  containerStyle?: StyleProp<ViewStyle>;
  descStyle?: StyleProp<TextStyle>;
  moreText: string;
  viewMoreContainer?: StyleProp<ViewStyle>;
  moreTextStyle: StyleProp<TextStyle>;
  lessText?: string;
  viewLessContainer?: StyleProp<ViewStyle>;
  lessTextStyle?: StyleProp<TextStyle>;
}

export const RnViewMoreLess: React.FC<RnViewMoreLessProps> = ({
  numberOfLines,
  desc,
  containerStyle,
  descStyle,
  moreText = 'View More',
  viewMoreContainer,
  moreTextStyle,
  lessText,
  viewLessContainer,
  lessTextStyle,
}) => {
  const [textLines, setTextLines] = useState(numberOfLines || undefined);

  const [actualTextNumberOfLines, setActualTextNumberOfLines] = useState(0);

  const textStyle = [
    {
      fontSize: DEFAULT_FONT_SIZE,
      lineHeight: DEFAULT_LINE_HEIGHT,
    },
    descStyle,
  ];

  const MoreOrLess = () => {
    return useMemo(
      () => (
        <React.Fragment>
          {actualTextNumberOfLines > numberOfLines &&
          textLines === numberOfLines ? (
            <Pressable
              style={[styles.moreTextContainer, viewMoreContainer]}
              onPress={() => setTextLines(undefined)}
            >
              <Text style={moreTextStyle}>{moreText}</Text>
            </Pressable>
          ) : (
            <>
              {!!lessText && (
                <Pressable
                  style={[styles.lessTextContainer, viewLessContainer]}
                  onPress={() => setTextLines(numberOfLines)}
                >
                  <Text style={lessTextStyle}>{lessText}</Text>
                </Pressable>
              )}
            </>
          )}
        </React.Fragment>
      ),
      [actualTextNumberOfLines, numberOfLines, textLines]
    );
  };

  const onFirstTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>
  ) => {
    setActualTextNumberOfLines(event.nativeEvent.lines.length);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ position: 'absolute', left: -width }}>
        <Text onTextLayout={onFirstTextLayout} style={[textStyle]}>
          {desc}
        </Text>
      </View>

      <Text
        style={[textStyle, styles.truncatedTextStyle]}
        numberOfLines={textLines}
      >
        {desc}
      </Text>

      <MoreOrLess />
    </View>
  );
};
