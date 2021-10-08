import React, {Fragment} from "react";
import './Misc.css';

class Misc extends React.Component {    
    componentWillUnmount() {
        alert('Anda telah menghapus daftar belanja!!!')
    };

    constructor(props) {
        super(props)
        this.handleChangeStuff = this.handleChangeStuff.bind(this)
        this.state = {
            stuff: [
                ['Jaket Kulit', 650000],
                ['Hoodie', 170000],
                ['Jaket Denim', 360000],
                ['Jaket Boomber', 520000],
                ['Jaket Parka', 230000],
                ['Jaket Parasut', 370000],
            ],
            menu: {
                menu1: 0,
                menu2: 0,
                menu3: 0,
                menu4: 0
            },
            totalTagihan: 0,
        }
    }

    handleCalculation = () => {
        const {
            menu1,
            menu2,
            menu3,
            menu4
        } = this.state.menu
        var total = menu1 + menu2 + menu3 + menu4
        this.setState ({
            ...this.state.menu,
            totalTagihan: total
        })
    }

    handleChangeStuff(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu : {
                ...menu,
                [name]: Number(value)
            }
        }, this.handleCalculation);
    }

    render() {
        const {
            stuff,
            totalTagihan,
        } = this.state
        return (
            <>
            <div>
                <div style={{ height: '100%' }}>
                    <div className='cashier-calculator'>
                        <div className='sarapan'>
                            <h2>Mau pesan apa?</h2><br/>
                            <select onChange={this.handleChangeStuff} name='menu1'>
                            <option value='0'>Jaket 1</option>
                            <Fragment>
                            {
                                stuff.map(jaket => {
                                    return (
                                        <option value={jaket[1]}>{jaket[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='menu2'>
                            <option value='0'>Jaket 2</option>
                            <Fragment>
                            {
                                stuff.map(jaket => {
                                    return (
                                        <option value={jaket[1]}>{jaket[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='menu3'>
                            <option value='0'>Jaket 3</option>
                            <Fragment>
                            {
                                stuff.map(jaket => {
                                    return (
                                        <option value={jaket[1]}>{jaket[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='menu4'>
                            <option value='0'>Jaket 4</option>
                            <Fragment>
                            {
                                stuff.map(jaket => {
                                    return (
                                        <option value={jaket[1]}>{jaket[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select>
                            <h4>Total Harga Jaket: Rp {totalTagihan},-</h4>
                        </div>
                        <h2 style={{ color: '#6e0234', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>
                            Silakan Bayar: Rp {totalTagihan},-
                        </h2>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Misc;