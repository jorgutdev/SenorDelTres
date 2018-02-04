import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Images } from "../Themes";
import { connect } from "react-redux";
import LoginActions from "../Redux/LoginRedux";

// Styles
import styles from "./Styles/LaunchScreenStyles";

class LaunchScreen extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.request();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless
              your designer handed you this screen and, in that case, congrats!
              You're ready to ship. For everyone else, this is where you'll see
              a live preview of your fully functioning app using Ignite.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.login
});
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  request: () => dispatch(LoginActions.loginRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
