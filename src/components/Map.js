import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

class Map extends Component{
  constructor(props){
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    };

  }

 componentDidMount = () => {
   navigator.geolocation.getCurrentPosition(data => {
     console.log(data)
     this.setState({ region: {
       latitude: data.coords.latitude,
       longitude: data.coords.longitude,
       latitudeDelta:.01,
       longitudeDelta:.02
     }});
    }
   );
 }

  render(){
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          // provider='google'
        >
          <MapView.Marker coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}} />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default Map;
