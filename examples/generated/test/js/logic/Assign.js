import { Text, View } from "react-native"

import colors from "../../colors"
import textStyles from "../../textStyles"

class Assign extends React.Component {
  render() {
    let Text$text;
    Text$text = this.props.text
    return (
      <View style={[ styles.View, {} ]}>
        <Text style={[ styles.Text, {} ]} text={Text$text}>

        </Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({ View: { alignSelf: "stretch" }, Text: {} });