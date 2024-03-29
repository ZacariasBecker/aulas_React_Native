import React, { Component, Fragment } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qNumeros: this.props.qNumeros,
        numeros: []
    }

    alterarQNumero = (qtde) => {
        this.setState({ qNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qNumeros).fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <Fragment>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena {this.state.qNumeros}
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Quantidade'
                    value={`${this.state.qNumeros}`}
                    onChangeText={this.alterarQNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </Fragment>
        )
    }
}