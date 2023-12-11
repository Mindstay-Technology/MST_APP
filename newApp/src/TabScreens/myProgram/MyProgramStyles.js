import { StyleSheet } from "react-native";

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
      headTextStyle:{
        color:'#888888',
        fontSize:14,
        fontWeight:'500'
      }
})