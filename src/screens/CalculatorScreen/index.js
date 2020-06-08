import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
    ScrollView
 } from 'react-native'
 
class CalculatorScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            equation:'',
            answer:'',
            history:[],
            animation: new Animated.Value(0),
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (text) => {
        if(text == 'clear'){
            this.state.history.push(this.state.equation + " = " + this.state.answer)
            this.setState({
                equation:'',
                answer:''
            })
        }
        else if(text == 'equal'){
            this.setState({
                answer:eval(this.state.equation)
            })
        }
        else{
            this.setState({
                equation:this.state.equation+text
            })
        }
    }
    handleOpen = () => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      };
      handleClose = () => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      };
    
   render() {
    const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };
    
       return (
           <View style={styles.container}>
               <TouchableOpacity onPress={() => this.handleOpen()}>
                    <Text style={styles.historyButton}>History</Text>
               </TouchableOpacity>
                <Text style={styles.calculationText}>
                    {this.state.equation}
                </Text>
                <Text style={styles.answerText}>
                    {this.state.answer}
                </Text>
                <View style={styles.buttonViewContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('clear')}
                        
                        style={{flex:3, backgroundColor:'#f46a68', borderWidth:0.5, borderColor:'gray',  justifyContent:'center' }}>
                            <Text style={[styles.buttonText, {marginLeft:30}]}>
                                AC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('/')}
                        style={{flex:1, backgroundColor:'#6a7ff5', borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.buttonText}>
                                /
                            </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('7')}
                        style={{flex:1, backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                7
                            </Text>

                        </TouchableOpacity>
                         <TouchableOpacity 
                         onPress={() => this.handleClick('8')}
                         style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                         <Text style={styles.buttonText}>
                                8
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('9')}
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                9
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('*')}
                        style={{flex:1, backgroundColor:'#6a7ff5',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                x
                            </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('4')}
                        style={{flex:1, backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                4
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('5')}
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                5
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('6')}
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                6
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('-')}
                        style={{flex:1, backgroundColor:'#6a7ff5',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                -
                            </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('1')}
                        style={{flex:1, backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                1
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('2')}
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                2
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.handleClick('3')} 
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                3
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.handleClick('+')} 
                        style={{flex:1, backgroundColor:'#6a7ff5',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                +
                            </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                        onPress={() => this.handleClick('0')} 
                        style={{flex:2,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                0
                            </Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.handleClick('.')}
                        style={{flex:1,  backgroundColor:'#574b9b',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                .
                            </Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.handleClick('equal')} 
                        style={{flex:1, backgroundColor:'#6a7ff5',borderWidth:0.5, borderColor:'gray', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>
                                =
                            </Text>
                            
                        </TouchableOpacity>
                    </View>
                </View>
                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <TouchableOpacity onPress={this.handleClose}>
                <View style={{width:113, height:3, backgroundColor:'white', marginTop:10, alignSelf:'center'}}>

                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => this.handleClose()}
              >
                  <Text style={{fontSize:18, color:'lightblue', alignSelf:'flex-start', marginLeft:10, marginTop:5,}}>
                      {`< Back`}

                  </Text>
              </TouchableOpacity>
                <ScrollView>
              {
                  this.state.history.map((value) => {
                      return <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'flex-end', marginRight:10, color:'white'}}>{value}</Text>
                  })
              }
              </ScrollView>

            </Animated.View>
          </View>
        </Animated.View>

           </View>
        )
    }
}

export default CalculatorScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#393657'
    },
    historyButton:{
        alignSelf:'flex-end', 
        margin:10, 
        fontSize:18,
        color:'white',
    },
    calculationText:{
        fontSize:50,
        alignSelf:'flex-end',
        marginRight:10,
        color:'white'

    },
    answerText:{
        fontSize:20,
        color:'white',
        alignSelf:'flex-end',
        marginRight:10,
        paddingBottom:20,
    },
    buttonViewContainer:{
        flex:1,
    },
    buttonRow:{
        flexDirection:'row',
        flex:1,
    },
    buttonText:{
        fontSize:40,
        color:'white'
    },
    cover: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    sheet: {
      position: "absolute",
      top: Dimensions.get("window").height,
      left: 0,
      right: 0,
      height: "100%",
      justifyContent: "flex-end",
    },
    popup: {
      backgroundColor: "#393657",
      marginHorizontal: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      minHeight: 80,
      
    },


})