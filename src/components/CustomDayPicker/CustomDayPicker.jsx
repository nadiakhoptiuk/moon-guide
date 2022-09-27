import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './day-picker.css';

export default function CustomDayPicker() {
  return (
    <DayPicker
      mode="single"
      // selected={birthdate} onSelect={setBirthdate}
    />
  );
}
