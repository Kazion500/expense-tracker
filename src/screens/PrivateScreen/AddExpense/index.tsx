import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from 'components/atoms/CustomText';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Formik, FormikValues } from 'formik';
import { WHITE_COLOR } from 'theme/colors';
import KeyboardAvoidingContainer from 'components/organisms/KeyboardAvoidingView';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.category) {
    errors.category = 'Category is required';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  }
  if (!values.amount) {
    errors.amount = 'Amount is required';
  }

  if (!values.amount.match(/^\d+$/)) {
    errors.amount = 'Amount must be a number';
  }

  if (!values.date) {
    errors.date = 'Date is required';
  }

  return errors;
};

const AddExpense = () => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <KeyboardAvoidingContainer>
      <ScrollView style={styles.container}>
        <CustomText size="lg" style={styles.title}>
          What did you buy today?
        </CustomText>
        <Formik
          initialValues={{
            amount: '',
            category: '',
            description: '',
            date: '',
          }}
          validate={validate}
          onSubmit={onSubmit}>
          {({ handleSubmit, handleChange, handleBlur, errors, values }) => (
            <>
              <Input
                label="Select Category"
                value={values.category}
                error={errors.category}
                onChangeText={handleChange('category')}
                onBlur={handleBlur('category')}
              />
              {errors.category && (
                <CustomText size="xs" color="danger" style={styles.errorText}>
                  {errors.category}
                </CustomText>
              )}
              <Input
                label="What did you buy?"
                error={errors.description}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
              />
              {errors.description && (
                <CustomText size="xs" color="danger" style={styles.errorText}>
                  {errors.description}
                </CustomText>
              )}

              <Input
                label="Amount"
                error={errors.amount}
                value={values.amount}
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
              />
              {errors.amount && (
                <CustomText size="xs" color="danger" style={styles.errorText}>
                  {errors.amount}
                </CustomText>
              )}
              <Input
                label="Date"
                error={errors.date}
                value={values.date}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
              />
              {errors.date && (
                <CustomText size="xs" color="danger" style={styles.errorText}>
                  {errors.date}
                </CustomText>
              )}

              <Button onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    marginBottom: 5,
  },
});

export default AddExpense;
