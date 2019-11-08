import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm'

const DisplaySmurfs = (props) => {
const { smurfs, fetchSmurfs } = props

    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs])

    return (
        <div>
            <h1>hello smurfs</h1>
            <SmurfForm />
            {smurfs.map(item => (
                <Smurfs key={item.id} item={item}/>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return { smurfs: state.data }
}

const mapDispatchToProps = {
    fetchSmurfs
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplaySmurfs)