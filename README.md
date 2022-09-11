# react-native-toggle-more-less
react native package to toggle number of lines on react native text
## Installation

```sh
npm install react-native-toggle-more-less
```

## Usage

```js
import { RnViewMoreLess } from 'react-native-toggle-more-less';

// ...

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
