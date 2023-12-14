import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //------------------Styles for MyProgram Screen------------------
  programScreenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '1%',
    width: '70%',
    backgroundColor: '#ffffff',
  },
  searchIconStyle: {
    alignSelf: 'center',
    marginRight: '2%',
  },
  searchInput: {
    height: 40,
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  onGoingText: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '3%',
  },
  flatListOuterView: {
    width: '95%',
    height: 550,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: '3%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  flatListInnerView: {
    width: '92%',
    height: 530,
    //  borderWidth:1,
    //  borderColor:'green',
    alignSelf: 'center',
    marginTop: '3%',
    backgroundColor: '#ffffff',
  },
  postedDateStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '1%',
  },
  postedDateStyle2: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  programNameStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '1%',
  },
  programNameStyle2: {
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '3%',
  },
  subjectsStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '2%',
  },
  readMoreStyle: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    height: 50,
    width: '100%',
    marginBottom: '1%',
    // flexDirection:'row',
  },
  subjectsStyle2: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '400',
    height: 35,
    width: '95%',
    lineHeight: 18,
    // borderColor:'red',
    //borderWidth:1,
    alignSelf: 'center',
  },
  readMoreLink: {
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '400',
    position: 'absolute',
    left: '3%',
    bottom: '100%',
  },
  trainingTypeStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '3%',
  },
  trainingTypeStyle2: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '10%',
  },
  startDateStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '2%',
  },
  startDateStyle2: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  trainingDurationStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '3%',
  },
  trainingDurationStyle2: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '10%',
  },
  endDateStyle1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '2%',
  },
  endDateStyle2: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  totalPartStyle1:{
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    alignSelf:'center'
  },
  totalPartStyle2:{
color:'#2676C2',
fontSize:30,
fontWeight:'500',
marginRight:'5%'

  },
  totalPartStyle3:{
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '400',
    alignSelf:'center'  
  },
  modeStyle1:{
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom:'2%'
  },
  modeStyle2:{
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  locationStyle1:{
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom:'2%'
  },
  locationStyle2:{
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  horizontalLineStyle:{
    width:'90%',
    height:1,
    backgroundColor:'#EEEEEE',
    alignSelf:'center',
    marginBottom:'2%'
  },

  //----------------------------------Styles for Previous Training program--------------------
  previousProText:{
    color: '#888888',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '3%',
    marginTop:'3%'
  },

  //---------------------------Styles for Menu Modal--------------------
  menuModalContainer: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '20%',
    width: '100%',
    top: '80%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
  },

  menuCloseButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '85%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuCloseImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '27%',
  },
  menuTextView:{
    
    paddingTop:'12%',
    justifyContent:'center',    

  },
  menuModalText:{
    color:'#535353',
    fontSize:16,
    fontWeight:'500',
    justifyContent:'center',    
    marginLeft:'5%',
    marginTop:'3%'    
  },
  menuModalLine:{
    width:'100%',
    height:1,
    backgroundColor:'#D9D9D9'
  },
//-------------------------Styles for Delete Modal-------------

delModalContainer: {
  backgroundColor: '#ffffff', //FDFEFE
  height: '20%',
  width: '100%',
  top: '80%',
  opacity: 1,
  borderColor: '#1111111A',
  borderWidth: 0.5,
},

delCloseButton: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#ffff',
  position: 'absolute',
  alignSelf: 'center',
  bottom: '85%',
  borderColor: '#1111111A',
  borderWidth: 1,
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 20},
  shadowOpacity: 2,
  shadowRadius: 4,
  elevation: 5,
},
delCloseImageStyle: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginTop: '27%',
},
delSureText:{
  color:'#535353',
  fontSize:15,
  fontWeight:'500',
  alignSelf:'center',
  marginTop:'7%',
  marginBottom:'3%'
},
delButtonsView:{
  flexDirection:'row',
  justifyContent:'space-around',
},
delResetButton:{
  width:'40%',
  height:50,
  backgroundColor:'#ffffff',
  borderColor:'#2676C2',
  borderWidth:1,
  borderRadius:10,
  justifyContent:'center',
},
delResetText:{
  color:'#2676C2',
  fontSize:16,
  fontWeight:'500',
  alignSelf:'center'
},
delSubmitButton:{
  width:'40%',
  height:50,
  backgroundColor:'#2676C2',
  borderColor:'#2676C2',
  borderWidth:1,
  borderRadius:10,
  justifyContent:'center'
},
delSubmitText:{
  color:'#ffffff',
  fontSize:16,
  fontWeight:'500',
  alignSelf:'center'
},
});
