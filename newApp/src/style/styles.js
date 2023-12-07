import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  //--------------------------Styles for OnBoard Screen ----------------------------

  onBoardingContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffff',
  },
  introImageStyle: {
    width: 390,
    height: 390,
    marginBottom: '10%',
    marginTop: '20%',
  },
  introTitleStyle: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: '5%',
    fontWeight: '600',
    //  fontFamily:'Poppins-SemiBold'
  },
  introDescStyle: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '400',
    width: '80%',
    alignSelf: 'center',
    marginBottom: '10%',
    lineHeight: 21,
    //  fontFamily:'Poppins-Regular'
  },
  dotStyle: {
    justifyContent: 'center',
    marginBottom: '50%',
    backgroundColor: '#2676C266',
  },
  activeDotStyle: {
    backgroundColor: '#2676C2',
    width: 30,
    borderRadius: 30,
    marginBottom: '50%',
  },

  skipButtonText: {
    color: '#2676C2',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#2676C2',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  arrowButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2676C2',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom:'15%'
  },

  //--------------------------------Styles for Login Page----------------------------------------
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  imageLogoStyle: {
    resizeMode: 'contain',
    marginLeft: '7%',
    marginBottom: '3%',
    width: 50,
    height: 47,
    marginTop: '10%',
  },
  welcomeLoginText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '7%',
    width: '70%',
    lineHeight: 39,
    marginBottom: '5%',
    //fontFamily:'Poppins-SemiBold'
  },

  mobileText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '1%',
    marginTop: '10%',
    marginLeft: '1%',
    //fontFamily:'Poppins-SemiBold'
  },
  inputField: {
    height: 55,
    width: '25%',
    borderWidth: 1.3,
    // fontSize: 14,
    // fontWeight: '400',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    // padding: 0,
    color: '#E9E9E9',
    paddingLeft: 15,
    marginLeft: '1%',
    marginBottom: '3%',
    backgroundColor: '#FFFFFF33',
    // fontFamily:'Poppins-Regular'
  },
  errorStyle: {
    color: 'red',
    marginBottom: '2%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-2.5%',
    marginLeft: '1%',
  },
  numberErrorStyle: {
    color: 'red',
    marginBottom: '2%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-2.5%',
    marginLeft: '1%',
  },
  getOTPButton: {
    // justifyContent: 'center',

    backgroundColor: '#ffff',
    height: 44,
    width: '14%',
    borderRadius: 10,
    marginBottom: '3%',
    marginLeft: '7%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  getOTPButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#2676C2',
    // fontFamily:'Poppins-SemiBold'
  },
  hrLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-evenly',
    marginBottom: '3%',
    marginLeft: '1%',
  },
  hrLine: {
    // height: 1,
    // backgroundColor: 'black',
    width: '10%',
    borderBottomColor: '#ffffff', // You can change the color as needed
    borderBottomWidth: 1,
  },
  orWithText: {
    fontSize: 14,
    color: '#ffffff', //white
    textAlign: 'center',
    fontWeight: '600',
    marginHorizontal: '1%',
  },
  emailCatView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // marginHorizontal: '10%',
    marginLeft: '8%',
  },
  //--------------------------------Styles for LoginOTP Page---------------------------------
  loginOTPContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  otpImageLogoStyle: {
    resizeMode: 'contain',
    marginLeft: '7%',
    marginBottom: '3%',
    width: 50,
    height: 47,
  },
  welcomeOtpText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '7%',
    width: '80%',
    lineHeight: 39,
    marginBottom: '2%',
  },
  loginOTPText: {
    color: '#333333',
    fontSize: 24,
    fontWeight: '500',
    marginLeft: '7%',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '2%',
    marginLeft: '1%',
  },
  otpInput: {
    width: '5%',
    height: 50,
    //borderColor: '#FFFFFF33',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#FFFFFF33',
    borderRadius: 10,
    shadowColor: 'transparent',
    fontWeight: '500',
    paddingTop: '1%',
  },
  otpErrorStyle: {
    color: 'red',
    marginBottom: '2%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-2%',
    marginLeft: '1.5%',
  },
  otpTimerView: {
    marginLeft: '8%',
    marginTop: '-1%',
    marginBottom: '1%',
  },
  otpTimerText: {
    color: '#ffffff',
    backgroundColor: 'green',
    width: '10%',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  otpExpiryText: {
    color: 'red',
    fontWeight: '600',
    textAlign: 'center',
    width: '10%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#ffff',
    height: 44,
    width: '14%',
    borderRadius: 10,
    marginBottom: '3%',
    marginLeft: '5.5%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  verifyButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#2676C2',
    //  alignSelf:'center',
  },
  OTPResendView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: '4%',
    marginBottom: '3%',
  },
  receivedOTPText: {
    color: '#E9E9E9',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginRight: '1%',
  },
  ResendButtonText: {
    color: '#E9E9E9',
    fontSize: 14,
    fontWeight: '600',
  },

  otphrLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-evenly',
    marginBottom: '3%',
    marginLeft: '1%',
  },
  otphrLine: {
    height: 1,
    // backgroundColor: 'black',
    width: '8%',
    borderBottomColor: '#ffffff', // You can change the color as needed
    borderBottomWidth: 1,
  },
  otporWithText: {
    fontSize: 14,
    color: '#ffffff', //white
    // textAlign: 'center',
    fontWeight: '600',
    marginLeft: '1%',
    marginRight: '1%',
  },

  emailCatOTPView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: '7%',
  },

  // //--------------------------Styles for SignUp OTP Page ---------------------------------------------
  // fourDigitText: {
  //   color: '#2676C2',
  //   fontSize: 26,
  //   fontWeight: '600',
  //   marginLeft: '7%',
  //   width: '80%',
  //   lineHeight: 39,
  //   marginBottom: '5%',
  // },
  // SignUpOTPText: {
  //   color: '#333333',
  //   fontSize: 24,
  //   fontWeight: '500',
  //   marginLeft: '7%',
  //   marginBottom: '15%',
  // },

  //------------------------------Styles for Success screen----------------------------------

  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 350,
    height: 280,
    resizeMode: 'contain',
    marginBottom: '5%',
  },
  successLoginText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '75%',
    lineHeight: 24,
    marginBottom: '50%',
  },

  //--------------------------------Styles for SignUp Page---------------------------------
  signUPContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  signUpWelcomeText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '7%',
    width: '80%',
    lineHeight: 39,
    marginBottom: '5%',
  },
  empTrainerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '23%',
    height: 100,
    borderRadius: 20,
    backgroundColor: '#FFFFFF33',
  },
  empTrainerTextView: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginHorizontal: '10%',
  },
  empTrainerHeadText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    center: 'center',
    marginBottom: '2%',
  },
  empTrainerDescText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
  },

  //--------------------------------Styles for Employer Screen --------------------------

  employerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  empLogoStyle: {
    resizeMode: 'contain',
    marginLeft: '6%',
    marginBottom: '3%',
    width: 50,
    height: 47,
  },
  empWelcomeText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '7%',
    width: '80%',
    lineHeight: 39,
    marginBottom: '4%',
  },

  empInputView: {
    justifyContent: 'flex-start',
    marginBottom: '1%',
  },
  empLabelText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '0.5%',
  },
  empInputField: {
    height: 46,
    width: '22%',
    borderWidth: 1.3,
    //  fontSize: 14,
    //  fontWeight: '400',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    // padding: 0,
    color: '#fff',
    paddingLeft: 15,
    backgroundColor: '#FFFFFF33',
    marginBottom: '1%',
  },

  EmpErrorStyle: {
    color: 'red',
    marginBottom: '1%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-0.5%',
    marginLeft: '0.5%',
  },

  empSignUpButtonView: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#ffff',
    height: 44,
    width: '13%',
    borderRadius: 10,
    marginLeft: '5%',
  },

  empSignUpButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#2676C2',
  },

  //--------------------------------Styles for Trainer screen ------------------------------------

  trainerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  trainerWelcomeText1: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '6%',
    width: '70%',
    marginBottom: '1%',
  },
  trainerWelcomeText2: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '6%',
    width: '70%',
    marginBottom: '5%',
  },

  trainerInputView: {
    justifyContent: 'flex-start',
  },
  trainerInputField: {
    height: 46,
    width: '22%',
    // borderWidth: 1.3,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: '1%',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    // padding: 0,
    color: '#fff',
    paddingLeft: 15,
    backgroundColor: '#FFFFFF33',
  },
  trainerLabelText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '0.5%',
  },
  dropDownExpStyle: {
    backgroundColor: '#FFFFFF33',
    borderWidth: 1.3,
    width: '22%',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: '1%',
  },
  dropDownContainerStyle: {
    backgroundColor: '#fff',
    width: '22%',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
  },
  dropDownPlaceholderStyle: {
    color: '#E9E9E9',
    fontSize: 14,
    fontWeight: '400',
  },
  dropDownSkillStyle: {
    backgroundColor: '#FFFFFF33',
    borderWidth: 1.3,
    width: '22%',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    // fontSize: 14,
    //fontWeight: '400',
    marginBottom: '1%',
    height: 118,
    color: '#ffffff',
    // overflow:'scroll'
  },
  dropDownContainerStyle1: {
    backgroundColor: '#fff',
    width: '22%',
    borderColor: '#FFFFFF33',
    borderRadius: 10,
  },

  TrainerErrorStyle: {
    color: 'red',
    marginBottom: '1%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-0.5%',
    marginLeft: '0.5%',
  },
  trainerSignUpButtonView: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#ffff',
    height: 44,
    width: '13%',
    borderRadius: 10,
    marginLeft: '5%',
  },

  trainerSignUpButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#2676C2',
  },

  //----------------------------------------Styles for Tab Screens----------------------------

  //------------------------------Styles for HomeScreen and HomelistData-------------------------------------

  HomeScreenContainer: {
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
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '1%',
    width: '70%',
    opacity: 0.4,
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

  scrollViewContainer: {
    marginTop: '7%',
    //justifyContent:'flex-start',
    alignItems: 'flex-start',
  },

  homeHeadText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: '3%',
  },
  flatListHomeData: {
    justifyContent: 'center',
    marginTop: '5%',
    marginLeft: '3%',
    marginRight: '5%',
    backgroundColor: '#ffffff',
  },

  homeRowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '3%',
  },
  nameDesignationView: {
    alignSelf: 'center',
  },
  homeName: {
    color: '#535353',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: '2%',
  },

  homeDesignationStyle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '500',
  },
  homeDescStyle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    width: '80%',
    marginBottom: '3%',
  },
  homeSalaryRangeStyle: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: '3%',
  },
  homeModeStyleView: {
    flexDirection: 'row',
    marginBottom: '3%',
  },
  homeModeStyle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
  },
  homeModeStyle1: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  homeAvailableStyleView: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  homeAvailableStyle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
  },
  homeAvailableStyle1: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
  },
  homeSeparatorStyle: {
    height: 2,
    backgroundColor: 'black',
  },
  likeImage:{
width:20,
height:20,
resizeMode:'contain'
  },
  //----------------Styles for TrainerList ---------------------------
  tListContainer: {
    flex: 1,
    //justifyContent: 'flex-start',
    //alignItems:'center',
    backgroundColor: '#ffffff',
  },
  tListHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
  },
  tListSearchView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '1%',
    width: '70%',
    opacity: 0.4,
    backgroundColor: '#ffffff',
  },
  tListSearchIconStyle: {
    
  },
  tListSearchInput: {
    height: 40,
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },

  tListViewContainer: {
    marginTop: '7%',
    //justifyContent:'flex-start',
    //  alignItems: 'flex-start',
  },
  tListHeadText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: '3%',
  },

  flatListTListData: {
   // flex:1,
    justifyContent: 'center',
    marginLeft: '5%',
    backgroundColor: '#ffffff',
    width: '90%',
    height: 200,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: '7%',
  },

  tListRowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '95%',
    height: '70%',
    marginLeft: '2.5%',
    marginBottom: '3%',
    // borderWidth:1,
    // borderColor:'green'
  },
  tListLocationView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '1%',
    marginLeft: '5%',
    position: 'absolute',
    top: '90%',
  },
  tListLocationText: {
    textAlign: 'center',
    color: '#6A6A6A',
    fontSize: 10,
    fontWeight: '400',
  },
  tListColumnView: {
    marginTop: '2%',
    marginLeft: '3%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  tListName: {
    color: '#3C84C9',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: '7%',
  },
  tListDesignation: {
    color: '#6A6A6A',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '7%',
  },
  tListYoe: {
    color: '#3C84C9',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '7%',
  },
  tListDateView: {
    backgroundColor: '#00CF7F',
    width: '30%',
    height: 50,
    borderTopRightRadius: 8,
    position: 'absolute',
    left: '70%',
    bottom: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tListAvailText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },

  tListAvailDateText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  tListSessionView: {
    backgroundColor: '#3C84C9',
    width: '70%',
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    top: '85%',
    left: '30%',
  },
  tListSessionText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  //----card styles---------
  tListCardData: {
    backgroundColor: '#ffffff',
    height: 200,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: '7%',
    marginTop: '2%',
  },
  cardRowData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '5%',
  },
  cardLocationView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '1%',
    marginLeft: '5%',
  },
  cardLocationText: {
    textAlign: 'center',
    color: '#6A6A6A',
    fontSize: 10,
    fontWeight: '400',
  },
  cardColumnView: {
    marginTop: '2%',
    marginLeft: '1%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight: '5%',
  },
  cardName: {
    color: '#3C84C9',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: '7%',
  },
  cardDesignation: {
    color: '#6A6A6A',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '7%',
  },
  cardYoe: {
    color: '#3C84C9',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '7%',
  },

  cardDateView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },

  cardAvailDateText: {
    color: '#6A6A6A',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  cardDateText: {
    color: '#3C84C9',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
  cardSessionStyle:{
    backgroundColor: '#3C84C9',
    width: '100%',
    height: 30,
    position: 'absolute',
    alignItems: 'flex-start',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    top: '85%',
    left: '0%',
  },
  cardSessionText:{
    color:'#ffffff',
    fontSize:12,
    fontWeight:'400',
    marginLeft:'8%',
    textAlign:'center',
    marginTop:'1%'
  }
});
