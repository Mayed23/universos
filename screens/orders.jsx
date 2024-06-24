import { FlatList, StyleSheet, Text, View } from 'react-native'
import orderData from '../data/orders.json'
import { OrderItem } from '../components/orderItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const Orders = () => {
  const cart = useSelector(state => state.cart.value)

  useEffect(() => {
    // 1. BUCAR EN LA BD DE FIREBASE
    // 2. ACTUALIZAR EL CART CON LA DATA OBTENIDA
  }, [])

  useEffect(() => {
    // HACER POST EN LA BD DE FIREBASE
  }, [cart])

  return (
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orderData}
        renderItem={({ item }) => <OrderItem {...item} />}
        ListEmptyComponent={<Text>No orders</Text>}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
})