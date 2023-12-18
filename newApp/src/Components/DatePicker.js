import {
  View,
  Text,
  Platform,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(null);
  const [datePlaceHolder, setDatePlaceHolder] = useState('DD/MM/MMMM');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const minDate = new Date(); // Set the minimum selectable date (tomorrow)

  minDate.setDate(minDate.getDate());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // For iOS, showDatePicker is always true
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  const formattedDate = date
    ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    : 'DD/MM/YYYY';

  return (
    <View style={{flex: 1}}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => showDatepicker()}>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.dateText}>{formattedDate}</Text>
          <Image source={require('../assets/icons/calender.png')} style={{width:20, height:20, resizeMode:'contain'}} />
         </View>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={minDate}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  dateContainer: {
    width: '110%',
    height: 35,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  dateText: {
    color: '#535353',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginRight:'2%'
  },
});
export default DatePicker;
