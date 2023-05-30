import React, { useState } from "react";
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
const TextInput = (props) => {
  const {
    disabled,
    required,
    label,
    onChange,
    value,
    style,
    inputStyle,
    multiLineInput,
    inputLabelStyle,
    formStyle,
    placeholder,
    type,
    id,
    name,
    helperText,
    maxChar,
    error,
    onBlur,
    onFocus,
    maxLength,
    inputProps,
  } = props;

  return (
    <React.Fragment>
      <FormControl variant="standard" style={formStyle}>
        {multiLineInput ? (
          <TextField
            id="standard-multiline-flexible"
            label={label}
            multiline
            rows={3}
            variant="standard"
            style={style}
            InputLabelProps={{
              style: {
                marginTop: 10,
                ...inputLabelStyle,
              },
              shrink: true,
            }}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            helperText={helperText}
          />
        ) : (
          <>
            <InputLabel htmlFor="component-simple" style={inputLabelStyle}>
              {required ? (
                <>
                  {label} <span style={{ color: "red" }}>*</span>
                </>
              ) : (
                <>{label}</>
              )}
            </InputLabel>

            <Input
              onFocus={onFocus}
              // error={errorTest()}
              id={id}
              name={name}
              startAdornment={<span></span>}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              sx={inputStyle}
              type={type}
              inputProps={{
                maxLength: maxLength,
                ...inputProps,

                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              error={error}
              onBlur={onBlur}
            />
          </>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default TextInput;
