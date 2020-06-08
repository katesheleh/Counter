import React, { useState, useEffect, ChangeEvent } from 'react';
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

  let min = Number( localStorage.getItem( 'inputMinValue' ) );
  let max = Number( localStorage.getItem( 'inputMaxValue' ) );

  const [ inputMinValue, setInputMinValue ] = useState( min || props.minValue );
  const [ inputMaxValue, setInputMaxValue ] = useState( max || props.maxValue );
  const [ equalValue, setEqualValue ] = useState( min >= max );

  // SECOND WAY to save equalValue:
  // const [ equalValue, setEqualValue ] = useState( false );
  // useEffect( () => {
  //   if ( inputMinValue >= inputMaxValue ) {
  //     setEqualValue( true );
  //   }
  // }, [] );

  useEffect( () => { localStorage.setItem( 'inputMinValue', inputMinValue.toString() ); }, [ inputMinValue ] );
  useEffect( () => { localStorage.setItem( 'inputMaxValue', inputMaxValue.toString() ); }, [ inputMaxValue ] );
  useEffect( () => { localStorage.setItem( 'equalValue', equalValue.toString() ); }, [ equalValue ] );

  const onChangeMinValueHadler = ( e: ChangeEvent<HTMLInputElement> ) => {
    if ( +e.currentTarget.value >= inputMaxValue ) {
      setEqualValue( true );
    } else {
      setEqualValue( false );
    }
    setInputMinValue( +e.currentTarget.value );
  };

  const onChangeMaxValueHadler = ( e: ChangeEvent<HTMLInputElement> ) => {
    if ( +e.currentTarget.value === inputMinValue ) {
      setEqualValue( true );
    } else {
      setEqualValue( false );
    }
    setInputMaxValue( +e.currentTarget.value );
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
          onChange={ onChangeMinValueHadler }
          equal={ equalValue } />

        <Value
          title='Max value'
          value={ inputMaxValue }
          onChange={ onChangeMaxValueHadler }
          equal={ equalValue } />
      </div>

      <div className={ styles.counterValuesCol }>
        <Button
          title='Set'
          action={ setNewValues }
          disabled={ equalValue } />
      </div>
    </div>
  );
};

export default CounterValues;