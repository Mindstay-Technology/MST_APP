import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  //----------------------------Styles for Search Modal--------------------

  searchModalContent: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '85%',
    width: '100%',
    top: '15%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
  },
  //----------------------------Styles for Filter Modal--------------------------

  filterModalContent: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '40%',
    width: '100%',
    top: '60%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '95%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  closeImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '25%',
  },
  modalContainer: {
    alignItems: 'flex-start',
    marginTop: '30%',
  },
  locationText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: '2%',
    alignSelf: 'center',
  },
  postText: {
    color: '#535353',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: '2%',
    alignSelf: 'center',
  },
  filterButton: {
    width: '60%',
    height: 45,
    backgroundColor: '#2676C2',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '25%',
  },
  filterText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  //---------------------------------Styles for Details Modal---------------
  detailContainer:{
    flex:1,
    backgroundColor:'#ffffff'
  },
  detailHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom:'3%'
  },
  detailSearchView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#8D8D8D',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '1%',
    width: '70%',
    opacity: 0.4,
    backgroundColor: '#ffffff',
  },
  detailSearchIconStyle: {
    
  },
  detailSearchInput: {
    height: 40,
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },

  bannerImageStyle: {
    width: '101%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: '2%',
  },
  rowDataStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    // marginLeft: '5%',
    marginBottom: '5%',
    // borderWidth: 1,
    // borderColor: 'red',
    width: '90%',
    height: 140,
  },
  detailProfile: {
    width:90,
    height:110,
    marginTop: '1%',
    borderRadius:10
  },
    columnData: {
    flexDirection: 'column',
   // justifyContent: 'space-around',
    marginLeft: '5%',
  },
  nameText: {
    color: '#2676C2',
    fontSize: 18,
    fontWeight: '500',
    marginBottom:'2%'
  },
  designationText: {
    color: '#6A6A6A',
    fontSize: 12,
    fontWeight: '400',
    marginBottom:'2%'
  },
  dateView: {
    backgroundColor: '#00CF7F',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'5%'
  },
  availText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },

  availDateText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  profileTextView: {
    width: '90%',
    //  marginLeft:'5%',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  profileText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '500',
  },
  contentText: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    width: '90%',
    marginBottom: '2%',
    lineHeight: 18,
    //justifyContent:'center',
    alignSelf: 'center',
  },
  horizontalLine: {
    width: '98%',
    height: 1,
    backgroundColor: '#D9D9D9',
    marginBottom: '3%',
    alignSelf: 'center',
  },
  titleText: {
    color: '#535353',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '5%',
    marginBottom: '2%',
  },
  certOrganizaTionView: {
    flexDirection: 'row',
    width: '90%',
    // marginLeft:'5%',
    marginBottom: '2%',
    alignSelf: 'center',
  },
  certDesignationText: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '500',
  },
  certOrganizaTionText: {
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '500',
  },
  topCertContentText: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
    lineHeight: 18,
    // textAlign: 'justify',
    //textAlignVertical: 'center',
  },
  readMoreStyle: {    
   // flexDirection:'row',
    width:'90%'
  },
  certContentText: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
    lineHeight: 18,
    // textAlign: 'justify',
    //textAlignVertical: 'center',
  },
  readMoreLink: {
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '400',
    position: 'absolute',
    left: '5%',
    bottom: '5%',
  },
  certContentText1:{
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '5%',
    lineHeight: 18,
  },
  certImage: {
    width: 160,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '3%',
  },
  skillsHeadText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#535353',
    marginLeft: '5%',
    marginBottom: '2%',
    marginTop:'5%'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '5%',
    width: '100%',
  },
  line: {
    height: 5,
    backgroundColor: '#2676C2',
    borderRadius: 10,
    marginRight: 5,
  },
  percentageText: {
    color: '#000',
    fontWeight: 'bold',
  },
  hireButton: {
    width: '101%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#2676C2',
    marginTop: '2%',
  },
  hireText: {
    color: '#ffffff',
    //  textAlign:'center',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },

  //-------------------------Styles for hamburger Modal------------------
  hamburgerModalContent: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '25%',
    width: '100%',
    top: '75%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
  },

  hamburgerCloseButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '88%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  hamburgerCloseImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '27%',
  },
  hamburgerTextView:{
    
    paddingTop:'12%',
    justifyContent:'center',    

  },
  hamburgerModalText:{
    color:'#535353',
    fontSize:16,
    fontWeight:'500',
    justifyContent:'center',    
    marginLeft:'5%',
    marginTop:'3%'    
  },
  hamburgerModalLine:{
    width:'100%',
    height:1,
    backgroundColor:'#D9D9D9'
  },

  //-------------------------Styles for connect Modal-----------------
  connectModalContainer:{
    backgroundColor: '#ffffff', //FDFEFE
    height: '20%',
    width: '100%',
    top: '80%',
    opacity: 1,
    borderWidth: 0.5,
}

});
