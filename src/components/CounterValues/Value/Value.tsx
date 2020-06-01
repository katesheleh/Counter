import React from 'react';
import styles from './Value.module.css';

type ValueType = {
  title: string;
  value: any;
  onChange: any;
};

const Value = ( props: ValueType ) => {

  return (
    <div className={ styles.valueBlock }>
      <p className={ styles.title }>{ props.title }</p>
      <input
        type="number"
        value={ props.value }
        onChange={ props.onChange }
        className={ styles.input } />
    </div>
  );
};

export default Value;