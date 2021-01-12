import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Alert, Linking } from 'react-native';

import Header from '../Header';
import { Order } from '../types';
import OrderCard from '../OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';


/* google maps 

https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude} 
https://www.google.com/maps/dir mecanismo de direção do google maps
travelmode p2/ bicle/ carro etc
api=1 versão da api 
dir_action=navigate iniciar navegação 
destination=${order.latitude},${order.longitude}  localização de destino..


*/



type Props = {
  route: {
    params: {
      order: Order
    }
  }
}
{/* recebendo uma order pela navegação */ }
export default function OrderDetails({ route }: Props) {
  /* const order =route.params.order;  */
  const { order } = route.params;  //nome da constante é o mesmo do parametro, omissão desestruturação!
  const navigation = useNavigation()
  const handleOnCancel = () => {
    navigation.navigate('Orders')

  }

  const handleConfirmeDelivery = () => {
    confirmDelivery(order.id).then(()=>{
      Alert.alert(`Pedido ${order.id} entreque com sucesso!`)
      
    }).catch(()=>{
      Alert.alert(`Erro ao confirma entrega do pedido ${order.id}`)

    })

    navigation.navigate('Orders')

  }

const handleStartNavigation = ()=>{
Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
}


  return (<>
    <Header />


    <View style={styles.container}>
     
      <OrderCard order={order} />
        <RectButton style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStartNavigation}>Iniciar Navegação</Text>
        </RectButton>
        <RectButton style={styles.button} >
          <Text style={styles.buttonText} onPress={handleConfirmeDelivery}>Confirmar Entrega</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </RectButton>

    </View>


  </>);
}




const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }

});
//export default Header
// em to px em*16 -0.15*16 = -024px