import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from 'components/atoms/CustomText';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Formik, FormikValues } from 'formik';
import { WHITE_COLOR } from 'theme/colors';
import KeyboardAvoidingContainer from 'components/organisms/KeyboardAvoidingView';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.amount) {
    errors.amount = 'Amount is required';
  }

  if (!values.amount.match(/^\d+$/)) {
    errors.amount = 'Amount must be a number';
  }

  return errors;
};

const ChangeBudget = () => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.container}>
        <Formik
          initialValues={{
            amount: '',
          }}
          validate={validate}
          onSubmit={onSubmit}>
          {({ handleSubmit, handleChange, handleBlur, errors, values }) => (
            <>
              <Input
                label="New Budget"
                value={values.amount}
                error={errors.amount}
                placeholder="0.00"
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
              />
              {errors.amount && (
                <CustomText size="xs" color="danger" style={styles.errorText}>
                  {errors.amount}
                </CustomText>
              )}

              <Button onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    marginBottom: 5,
  },
});

export default ChangeBudget;
