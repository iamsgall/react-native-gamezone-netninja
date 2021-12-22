import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Card from '../shared/Card'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'title1', rating: '1', body: 'body1', key: '1' },
    { title: 'title2', rating: '2', body: 'body2', key: '2' },
    { title: 'title3', rating: '3', body: 'body3', key: '3' },
    { title: 'title4', rating: '4', body: 'body4', key: '4' },
    { title: 'title5', rating: '5', body: 'body5', key: '5' },
  ])

  const [modalVisible, setModalVisible] = useState(false)

  const addReview = (review, reset) => {
    review.key = Math.random().toString()
    setReviews(currentReview => {
      return [review, ...currentReview]
    })
    setModalVisible(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal animationType='slide' visible={modalVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalVisible(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalVisible(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },

  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
})
