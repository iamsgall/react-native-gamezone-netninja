import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { globalStyles } from '../styles/global'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FlatButton from '../shared/FlatButton'

export default function ReviewForm({ addReview }) {
  const ReviewSchema = yup
    .object({
      title: yup.string().required().min(4),
      body: yup.string().required().min(8),
      rating: yup
        .string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
          return parseInt(val) < 6 && parseInt(val) > 0
        }),
    })
    .required()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      body: '',
      rating: '',
    },
    resolver: yupResolver(ReviewSchema),
  })
  const onSubmit = data => {
    addReview(data, reset)
    reset()
    console.log(data)
  }

  console.log(errors)

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
          min: 4,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Review title'
          />
        )}
        name='title'
      />
      <Text style={globalStyles.errorText}>{errors.title?.message}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          min: 10,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Review body'
            multiline
            minHeight={60}
          />
        )}
        name='body'
      />
      <Text style={globalStyles.errorText}>{errors.body?.message}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          min: 1,
          max: 5,
          maxLength: 1,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Review rating (1-5)'
          />
        )}
        name='rating'
      />
      <Text style={globalStyles.errorText}>{errors.rating?.message}</Text>

      <FlatButton text='submit' onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({})
