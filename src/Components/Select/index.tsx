import React, {
  SelectHTMLAttributes, useEffect, useRef, useCallback, useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

   interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
      name: string;
      options: string[];
      icon?: React.ComponentType<IconBaseProps>;
   }

const Select:React.FC<SelectProps> = ({
  name, options, icon: Icon, ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      { Icon && <Icon size={20} /> }
      <select
        onBlur={handleSelectBlur}
        onFocus={handleSelectFocus}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        <option defaultValue={undefined}>
          Selecione...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
