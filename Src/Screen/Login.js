import React, {useEffect } from "react";
import { View,Text,StyleSheet,Animated, TextInput,TouchableOpacity,KeyboardAvoidingView,Keyboard, ImageBackground } from "react-native";


const Login =()=>{
  
    const imageHeight = new Animated.Value(80);
    const playerHeight = new Animated.Value(250);
    const textSize = new Animated.Value(20);


  
 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        
            console.log(true,"jhjjgjg")
            Animated.timing(imageHeight, {
             duration: 500,
              toValue:60,
            }).start();
       
      }
    );
    
    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
         
              console.log(false,"jhjjgjg")
              Animated.timing(imageHeight, {
                duration: 500,
                toValue:80,
              }).start();
         
           
        }
      );
    //---Player Image----//
      const keyboardShow = Keyboard.addListener(
        'keyboardDidShow',
        () => {
         
              console.log(true,"Player")
              Animated.timing(playerHeight, {
                duration: 500,
                toValue:180,
              }).start();
         
           
        }
      );


      const keyboardHide = Keyboard.addListener(
        'keyboardDidHide',
        () => {
         
              console.log(false,"Player")
              Animated.timing(playerHeight, {
                duration: 500,
                toValue:250,
              }).start();
         
           
        }
      );

      //----Text----//



      const keyboardShowText = Keyboard.addListener(
        'keyboardDidShow',
        () => {
         
              console.log(true,"Player")
              Animated.timing(textSize, {
                duration: 500,
                toValue:15,
              }).start();
         
           
        }
      );


      const keyboardHideText = Keyboard.addListener(
        'keyboardDidHide',
        () => {
         
              console.log(false,"Player")
              Animated.timing(textSize, {
                duration: 500,
                toValue:20,
              }).start();
         
           
        }
      );





    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
      keyboardHide.remove();
      keyboardShow.remove();
      keyboardShowText.remove();
      keyboardHideText.remove();
    }
  }, []);




    return(
        <KeyboardAvoidingView style={styles.container} behavior="height">
           <ImageBackground    
                source={require('../image/Group8760.png')}style={{flex:1}}>


                <View style={{alignItems:'center',marginTop:20}}>                                     

                             <Animated.Image
                            source={require('../image/Group3173.png')}
                            style={[styles.Circleimg,{width:imageHeight,height:imageHeight}]}
                            />
                           
                           
                            <Animated.Text style={[ styles.Anitext,{fontSize:textSize ,marginTop:5} ]}>
                                INDIA'S 1ST 
                            </Animated.Text>
                            <Animated.Text style={[styles.Anitext,{fontSize:textSize}]}>
                                SPORTS ECOSYSTEM APP
                            </Animated.Text>
                            <Animated.Image
                            source={require('../image/MaskGroup310.png')}
                            style={[{width:playerHeight,height:playerHeight}]}
                            />
                </View>

            
            
                    <View style={[styles.containertwo,styles.shadowcomp]}>
                
                        <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{fontSize:20,color:'black'}}>Welcome to </Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>BigHit!</Text>
                        </View>
                        
                        <View style={styles.containertwoin}>
                            <Text style={styles.countrycode}>+91</Text>
                            <TextInput style={styles.phoneno} keyboardType="numeric" placeholder="ENTER MOBILE NUMBER" onSubmitEditing={Keyboard.dismiss}/>
                        </View>
                        <TouchableOpacity style={styles.Buttonstyle}>
                            <Text style={styles.Butttontext}>Let 's Go</Text>
                        </TouchableOpacity>
                
                    </View>
            </ImageBackground>
            
        
        </KeyboardAvoidingView>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        containertwo:{
           flex:3,
            backgroundColor: "white",
            borderTopEndRadius:70,
            borderTopLeftRadius:70,
            alignItems:'center',  
            
        },
        shadowcomp:{
            shadowColor: "black",
            shadowOffset: { width: 0, height: -50 },
            shadowOpacity: 0.9,
            shadowRadius: 6,  
            elevation: 20
        },
        containertwoin:{
            flexDirection:'row',
            margin:20

        },
        phoneno:{
            width:"50%",
            backgroundColor: "white" ,
            borderBottomWidth:1,
            marginLeft:40
        },
        countrycode:{
            marginTop:15,
            backgroundColor: "white" ,
            fontSize:15,
            borderBottomWidth:1,
        },
        Buttonstyle:{
            borderRadius:30,
            backgroundColor:'blue',
            height:50,
            width:"70%",
        },
        Butttontext:{
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            color:'white',
            margin:15,
            fontWeight:'bold',
        },
        Circleimg:{
            alignItems:'center',
            justifyContent:'center'
        },
        Anitext:{
           
            fontWeight:'bold',
            color:'white',
            textAlign:'center',
            
        }

      });

   

export default Login;
