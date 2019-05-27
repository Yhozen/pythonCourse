import React from 'react'

const Footer = (props) => {
  return (
    <footer className='page-footer blue-grey darken-4'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Quienes Somos</h5>
            <p className='grey-text text-lighten-4'>-Christian Amo -Francisca Inostroza<br /> -Axel Kuljis  -Nicolas Manzano  <br /> -Gabriel Pérez     -Valeria Ruiz</p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Sitios de Interés</h5>
            <ul>
              <li><a className='grey-text text-lighten-3' href='http://www.uai.cl'>Universidad Adolfo Ibáñez</a></li>
              <li><a className='grey-text text-lighten-3' href='http://webcursos.uai.cl'>WebCursos</a></li>
              <li><a className='grey-text text-lighten-3' href='https://cs50.harvard.edu/'>CS50 Harvard</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
