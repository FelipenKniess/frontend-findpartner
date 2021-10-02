import React, {
  TextareaHTMLAttributes, useEffect, useRef, useCallback, useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

 interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
 }

const TextArea:React.FC<TextAreaProps> = ({ name, children, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={textAreaRef}
        {...rest}
      >
        {children}
      </textarea>
      {error && (
      <Error title={error}>
        <FiAlertCircle size={20} />
      </Error>
      )}
    </Container>
  );
};

export default TextArea;
