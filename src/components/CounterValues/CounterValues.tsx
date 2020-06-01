import React, { useState, ChangeEvent } from 'react';
import styles from './CounterValues.module.css';
import Button from '../common/Button/Button';
import Value from './Value/Value';

type CounterValuesType = {
  minValue: number;
  maxValue: number;
  setCount: ( value: number ) => void;
  setMinCountValue: ( value: number ) => void;
  setMaxCountValue: ( value: number ) => void;
};
const CounterValues = ( props: CounterValuesType ) => {

  // Change min value
  const [ inputMinValue, setInputMinValue ] = useState( props.minValue );

  const onChangeMinValueHadler = ( e: ChangeEvent<HTMLInputElement> ) => {
    setInputMinValue( Number( e.currentTarget.value ) );
  };

  // Change max value
  const [ inputMaxValue, setInputMaxValue ] = useState( props.maxValue );

  const onChangeMaxValueHadler = ( e: ChangeEvent<HTMLInputElement> ) => {
    setInputMaxValue( Number( e.currentTarget.value ) );
  };

  // Set updated min / max values on Click
  function setNewValues() {
    props.setCount( inputMinValue );
    props.setMinCountValue( inputMinValue );
    props.setMaxCountValue( inputMaxValue );
  }

  return (
    <div className={ styles.counterValues }>

      <div className={ styles.counterValuesInnerWrap }>
        <Value
          title='Min value'
          value={ inputMinValue }
          onChange={ onChangeMinValueHadler } />

        <Value
          title='Max value'
          value={ inputMaxValue }
          onChange={ onChangeMaxValueHadler } />
      </div>

      <div className={ styles.counterValuesCol }>
        <Button
          title='Set'
          action={ setNewValues }
          disabled={ false } />
      </div>
    </div>
  );
};

export default CounterValues;