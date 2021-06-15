import { Camera } from 'expo-camera';
import {FOODS_API_BASE_URL} from '@env'
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground, Button} from 'react-native' 

var photo;
function CameraScreen({ navigation }){
    const [startCamera, setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState(null)
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
    const [flashMode, setFlashMode] = React.useState('off')
  
    const __startCamera = async () => {
      const {status} = await Camera.requestPermissionsAsync()
      console.log(status)
      if (status === 'granted') {
        setStartCamera(true)
      } else {
        Alert.alert('Access denied')
      }
    }
    const __takePicture = async () => {
      photo = await camera.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCapturedImage(photo)
    }

    const __savePhoto = () => {
      print("******************")
      print(photo, photo.uri)
      fetch(FOODS_API_BASE_URL + "/predict", {
        method: "POST",
        body: createFormData(photo)
      })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ photo: null });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
    }

    const __retakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
      __startCamera()
    }
    const __handleFlashMode = () => {
      if (flashMode === 'on') {
        setFlashMode('off')
      } else if (flashMode === 'off') {
        setFlashMode('on')
      } else {
        setFlashMode('auto')
      }
    }
    const __switchCamera = () => {
      if (cameraType === 'back') {
        setCameraType('front')
      } else {
        setCameraType('back')
      }
    }
    return (
      <View style={styles.container}>
        {startCamera ? (
          <View style={{ flex: 1, width: '100%' }} >
            {previewVisible && capturedImage ? (
              <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
            ) : (
              <Camera type={cameraType} flashMode={flashMode} style={{flex: 1}}
                ref={(r) => {
                  camera = r
                }}
              >
                <View style={{ flex: 1, width: '100%', backgroundColor: 'transparent', flexDirection: 'row' }} >
                  <View style={{ position: 'absolute', left: '5%', top: '10%', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <TouchableOpacity onPress={__handleFlashMode} style={{ backgroundColor: flashMode === 'off' ? '#000' : '#fff', borderRadius: '50%', height: 25, width: 25 }}>
                      <Text style={{ fontSize: 20 }}>
                        ⚡️
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={__switchCamera} style={{ marginTop: 20, borderRadius: '50%', height: 25, width: 25 }}>
                      <Text style={{ fontSize: 20 }} >
                        {cameraType === 'front' ? '🤳' : '📷'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', flex: 1, width: '100%', padding: 20, justifyContent: 'space-between' }}>
                    <View style={{ alignSelf: 'center', flex: 1, alignItems: 'center' }}>
                      <TouchableOpacity onPress={__takePicture} style={{ width: 70, height: 70, bottom: 0, borderRadius: 50, backgroundColor: '#fff' }}/>
                    </View>
                  </View>
                </View>
              </Camera>
            )}
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#1f2833' }} >
              <Text style= {{ fontSize: 30, color: "#66fcf1"}}>
                Camera Entry
              </Text>
            <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-around' }}>
              <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3, marginHorizontal: 20, padding: 5}}>
                <Button color='white' title="Back" onPress={() => navigation.navigate('Home')} />            
              </View>
              <TouchableOpacity onPress={__startCamera} style={{ borderRadius: 3, borderWidth: 2, borderColor: '#66fdf1', backgroundColor: '#1f2833', padding: 13 }} >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>
                  Camera
                </Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }
  
  const CameraPreview = ({photo, retakePicture, savePhoto}: any) => {
    console.log('sdsfds', photo.uri)
    return (
      <View style={{ backgroundColor: 'transparent', flex: 1, width: '100%', height: '100%' }} >
        <ImageBackground source={{uri: photo && photo.uri}} style={{ flex: 1 }} >
          <View style={{ flex: 1, flexDirection: 'column', padding: 15, justifyContent: 'flex-end' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
              <TouchableOpacity onPress={retakePicture} style={{ width: 130, height: 40, alignItems: 'center', borderRadius: 4 }} >
                <Text style={{ color: '#fff', fontSize: 20 }} >
                  Retake
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={savePhoto} style={{ width: 130, height: 40, alignItems: 'center', borderRadius: 4 }} >
                <Text style={{ color: '#fff', fontSize: 20 }} >
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5C6C7',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    buttonStyle: {
      borderColor: '#66FDF1',
      borderWidth: 4,
      marginTop: 50,
      marginHorizontal: 100,
    },
    section: {
      marginBottom: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionHeader: {
      marginBottom: 8,
    },
    componentsSection: {
      backgroundColor: '#1f2833',
      paddingHorizontal: 16,
      paddingVertical: 24,
      marginBottom: 20,
      borderRadius: 5,
      borderColor: '#c5c6c7',
      borderWidth: 4
    },
    componentSectionHeader: {
      // fontFamily: fonts.primaryRegular,
      color: '#ffffff',
      fontSize: 24,
      marginBottom: 20,
    },
    demoButtonsContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    demoIconsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 3,
      marginBottom: 20,
    },
    demoButton: {
      marginTop: 8,
      marginBottom: 8,
    },
    demoItem: {
      marginVertical: 15,
    },
  });

export default CameraScreen;