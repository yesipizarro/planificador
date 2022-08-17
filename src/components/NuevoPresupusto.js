import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import globalStyles from '../styles'

const NuevoPresupusto = ({
    presupuesto, 
    setPresupuesto,
    handleNuevoPresupuesto
}) => {
   

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>

            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu Presupuesto: Ej.300'
                style={styles.input}
                value={presupuesto.toString()}
                onChangeText={setPresupuesto}
            />

            <Pressable
                 style={styles.boton}
                 onPress={()=> handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
      ...globalStyles.contenedor
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3b82f6',
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,
        color:'#AFC1DE'
    },
    boton:{
        marginTop: 30,
        backgroundColor: '#10484A',
        padding: 10,
        borderRadius: 10
    },
    botonTexto: {
        color: '#FFF',
        textAlign:'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default NuevoPresupusto