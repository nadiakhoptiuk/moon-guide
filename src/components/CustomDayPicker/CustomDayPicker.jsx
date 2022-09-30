import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './day-picker.css';

export default function CustomDayPicker({ selected, onSelect, className }) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      className={className}
    />
  );
}
