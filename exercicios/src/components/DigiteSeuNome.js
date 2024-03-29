import React, { Fragment, useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    const [nome, setNome] = useState()
    return (
        <View>
            <Text style={Estilo.txtG}>{nome}</Text>
            <TextInput
                style={Estilo.txtG}
                placeholder="Digite..."
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}