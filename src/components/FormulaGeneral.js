import React, { Component } from 'react';
import Resultado from './Resultado';

class FormulaGeneral extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            a:0,
            b:0,
            c:0,
            resultado:0
        };
        this.calcularFormulaGeneral = this.calcularFormulaGeneral.bind(this);
        this.manejarSubmit = this.manejarSubmit.bind(this);
        this.manejarCambios = this.manejarCambios.bind(this);
    }

    calcularFormulaGeneral (aa,bb,cc) {
        //alert('Valor de aa: ' + aa);
        let x1=0;
        x1 = (-bb + Math.sqrt((bb*bb)-(4*aa*cc)))/(2*aa);
        //alert('Resultado: ' + x1);
        //this.setState({ resultado: x1 });

       /*this.setState({
            
               // ...this.state, //copio el state
                resultado : x1
            
        });*/
        //this.setState({resultado: x1});
        /*this.setState((state) => {
            // Importante: lee `state` en vez de `this.state` al actualizar.
            return {resultado: x1}
          });*/

          this.setState({ resultado: x1 }, () => {
            //alert('Resultado: ' +this.state.resultado);
            
          });

          /*this.setState((state, props) => ({
            propiedad1: state.propiedad1 + 1,
            propiedad2: state.propiedad2.concat(props.foo),
            ...
          });*/

        
        //alert('Resultado: ' +this.state.resultado);
        //return x1;
    }

    manejarSubmit = e => {
        e.preventDefault();
        //this.calcularFormulaGeneral(8,-2,-3);
        this.calcularFormulaGeneral(this.state.a, this.state.b, this.state.c);
        //console.log(this.state.datos.a);
        //alert('Valor de a: ' + this.state.datos.a);


    } 

    manejarCambios = e => {
        this.setState({
            
                ...this.state, //copio el state
                [e.target.name] : e.target.value
            
        })
    }

    render() {
        return (

            <form 
                onSubmit={this.manejarSubmit}  
            >
                <div className="form-row">
                    <div className="col">
                    <label>Valor de a:</label>
                    <input 
                        type="text" 
                        className="form-control"                         
                        name="a"
                        onChange={this.manejarCambios} 
                        value={this.state.a} />
                    </div>
                    <div className="col">
                    <label>Valor de b:</label>
                    <input 
                        type="text" 
                        className="form-control"                          
                        name="b" 
                        onChange={this.manejarCambios}
                        value={this.state.b} />
                    </div>
                    <div className="col">
                    <label>Valor de C:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="c" 
                        onChange={this.manejarCambios}
                        value={this.state.c} />
                    </div>
                </div>
    
                <input type="submit" className="py-3 mt-2 btn btn-success" value="Calcular"/>
                <Resultado
                    solucion={this.state.resultado}
                />
            </form>
            
        )
    }

  

}
export default FormulaGeneral;