import {useFormikContext} from "formik";
import {DatePicker} from "jalali-react-datepicker";

const Date = ({parentName, name, label, style, hidden, ...props}) => {
  const {values, errors, touched, setFieldTouched, setFieldValue} =
    useFormikContext();

  const fieldName = parentName ? parentName + "." + name : name;

  const handleChange = ({value: {_d: date}}) => {
    date.setHours(4);
    date.setMinutes(30);

    const UTCDate = date.toISOString();

    UTCDate
      ? setFieldValue(fieldName, UTCDate)
      : (
          values[parentName].constructor === Object
            ? Object.keys(values[parentName]).length === 1
            : values[parentName].length === 1
        )
      ? setFieldValue(parentName, undefined)
      : setFieldValue(fieldName, undefined);
  };

  const handleBlur = () => setFieldTouched(fieldName, true);

  return (
      <DatePicker
        timePicker={false}
        onClickSubmitButton={handleChange}
        {...props}
      />
        );
};

export default Date;
