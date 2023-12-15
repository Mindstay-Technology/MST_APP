import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({

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
    paddingBottom: '3%',
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
    //  opacity: 0.4,
    backgroundColor: '#ffffff',
  },
  searchIconStyle: {
    alignSelf: 'center',
    marginRight: '2%',
  },
  searchInput: {
    height: 40,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: '400',
  },

  scrollViewContainer: {
    marginTop: '4%',
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
  likeText: {
    position: 'absolute',
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  homeSeparatorStyle: {
    height: 2,
    backgroundColor: 'black',
  },
  likeImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2676C2',
    position: 'absolute',
    justifyContent: 'center',
    top: '92%',
    left: '82%',
  },
  plusText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  CommentModalContent: {
    backgroundColor: '#ffffff', //FDFEFE
    height: '70%',
    width: '100%',
    top: '30%',
    opacity: 1,
    borderColor: '#1111111A',
    borderWidth: 0.5,
    paddingTop: '10%'
  },
  commentCloseButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffff',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '103%',
    borderColor: '#1111111A',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 3,
  },
  commentCloseImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '30%',
  },

  commentFlatListView:{
    marginLeft: '5%' , 
    marginBottom:'5%',
  },
  
  commentInputPostRow:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: '5%',
    paddingTop: '5%',
  },
  inputPostRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    width: '80%',
  },
  commentTextInput: {
    width: '80%',
    height: 40,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '2%',
  //  textAlign: 'center',
    alignSelf: 'center',
  },
  commentPostButton: {
    alignSelf: 'center',
    marginLeft: '3%',
  },
  commentPostText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '400',
  },
  CommentNameSkillView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '3%',
  },
  commentNameText: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '500',
  },
  commentSkillText: {
    color: '#888888',
    fontSize: 10,
    fontWeight: '400',
  },
  commentTimeText:{
    color:'#888888',
    fontSize:10,
    fontWeight:'300',
    position:'absolute',
    left:'70%'
  },
  postCommentBoxStyle: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor:'#EEEEEE',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: '10%',
    paddingLeft: '2%',
    paddingTop:'1%',
    paddingRight:'1%'
  },
  postCommentText: {
    color: '#535353',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 15,
    alignSelf: 'flex-start',
  },

});