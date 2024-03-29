import React, { Fragment } from 'react'
import { View, Text, FlatList } from 'react-native'

import Estilo from '../estilo'
import produtos from './produtos'

export default (props) => {

    const produtoRender = ({ item: p }) => {
        return (
            <Text>
                {p.id}) {p.nome} custa R${p.preco}
            </Text>
        )
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>
                Lista de produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </Fragment>
    )
}