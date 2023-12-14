import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom:'2%'
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

      //---------------------------Styles for Post Training ---------------------------
  
      postTrainingContainer:{
        flex:1,
        backgroundColor:'#ffffff',

      },

      companyNameText: {
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%'
      },
      companyNameInput: {
        height: 40,
        width: '95%',
        borderWidth: 1.3,
       borderColor: '#E3E3E3',
        borderRadius: 10,
        // padding: 0,
        color: '#888888',
        paddingLeft: 15,
        backgroundColor: '#ffffff',
        marginBottom: '3%',
      },
      technologyText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%'
      },
      dropDownSkillStyle: {
        backgroundColor: '#ffffff',
        borderWidth: 1.3,
        width: '95%',
        borderColor: '#E3E3E3',
        borderRadius: 10,
        // fontSize: 14,
        //fontWeight: '400',
        marginBottom: '3%',
        height: 85,
        color: '#8A8A8A80',
        //overflow:'scroll'
      },
      dropDownContainerStyle1: {
        backgroundColor: 'red',
        width: '95%',
        height:200,
        borderColor: '#E3E3E3',
        borderRadius: 10,
        position:'absolute'
      },
      techErrorStyle: {
        color: 'red',
        marginBottom: '1%',
        alignSelf: 'flex-start',
        width: '80%',
        marginTop: '-0.5%',
        marginLeft: '0.5%',
      },
      trainingTypeText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%',
      },
      radioFormView:{
        marginBottom:'3%'
      },
      participantsText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'3%',
      },
      totalParticipantsView:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'40%',
        height:25,
        borderColor:'#E3E3E3',
        borderWidth:1,
        borderRadius:10,
        marginBottom:'3%'
      },
      modeTrainingText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%',
      },
      experienceText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%',
      },
      dragExpText:{
        color:'#888888',
        fontSize:12,
        fontWeight:'500',
        marginBottom:'3%'
      },
      slider: {
        justifyContent:'center',
        marginBottom:'1%',
      },
      sliderValueStyle:{
        color:'#888888',
        fontSize:12,
        fontWeight:'500',
        marginBottom:'3%'
      },
      durationText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%',
      },
      budgetText:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%',
      },
      currencyView:{
      flexDirection:'row',
       width:'70%',
        height:52,
        borderWidth:1,
        borderColor:'#E3E3E3',
        borderRadius:8,
        marginBottom:'4%',
    
      },
      currencyDropDown: {
         fontSize: 14,
        fontWeight: '400',
        marginBottom: '3%',
        color: '#535353',
        backgroundColor: '#ffffff',
        borderWidth: 1,
       width: '70%',
        borderColor: '#ffffff',
        justifyContent:'center'
        //overflow:'scroll'
      },
      currencyDropDownContainer: {
        width: '30%',
        backgroundColor: 'red',
        height:200,
        borderColor: '#E3E3E3',
        borderRadius: 10,
        position:'absolute'
      },
      minInput: {
        color: '#888888',
        backgroundColor: '#ffffff',
        fontSize:14,
        fontWeight:'400',
        width:'40%',
       // borderWidth:1,
     //   borderColor:'#E3E3E3',
   //     position:'relative',
      //  right:'210%',
        textAlign:'center',
       
      },
      maxInput: {
        color: '#888888',
        backgroundColor: '#ffffff',
        fontSize:14,
        fontWeight:'400',
        width:'40%',
       // borderWidth:1,
     //   borderColor:'#E3E3E3',
        textAlign:'center',
       // left:'1%'
     //   position:'relative',
       // right:'210%'
      },
      verticalLine1:{
        height:50,
        width:1,
        backgroundColor:'#E3E3E3',
        right:'65%'
      },
      verticalLine2:{
        height:50,
        width:1,
        backgroundColor:'#E3E3E3',
      //  borderWidth:1,
      },
      tocView:{
        marginBottom:'5%'
      },
      tocText1:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginRight:'2%'
      },
      tocText2:{
        color: '#333333',
        fontSize: 10,
        fontWeight: '400',
        alignSelf:'center'
      },
      startEndDateView:{
        flexDirection:'row',
        marginBottom:'3%'

      },
      startDateView:{
        marginRight:'20%'
      },
      startDate:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'5%'
      },
      endDate:{
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'4%'
      },

      checkBoxText:{
        color:'#535353',
        fontSize:14,
        fontWeight:'500',
        alignSelf:'center',
        marginLeft:'2%'
      },
      buttonsView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginBottom:'5%'
      },
      resetButton:{
        width:'45%',
        height:50,
        backgroundColor:'#ffffff',
        borderColor:'#2676C2',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        marginRight:'5%'
      },
      resetText:{
        color:'#2676C2',
        fontSize:16,
        fontWeight:'500',
        alignSelf:'center'
      },
      submitButton:{
        width:'45%',
        height:50,
        backgroundColor:'#2676C2',
        borderColor:'#2676C2',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center'
      },
      submitText:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
        alignSelf:'center'
      },

      //-------------------------Styles for Post Job----------------------------------------
      
      postJobContainer:{
        flex:1, backgroundColor:'#ffffff',
      },
      jobTitleText: {
        color: '#333333',
        fontSize: 14,
        fontWeight: '500',
        marginBottom:'2%'
      },
      jobTitleInput: {
        height: 40,
        width: '95%',
        borderWidth: 1.3,
       borderColor: '#E3E3E3',
        borderRadius: 10,
        // padding: 0,
        color: '#888888',
        paddingLeft: 15,
        backgroundColor: '#ffffff',
        marginBottom: '3%',
      },
})