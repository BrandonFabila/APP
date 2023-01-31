import licencia from '../../Licence/cc.xlarge.png'
import style from './pie.module.css'

function PieCont () {
    return (
        <div className={style.cont}>
            <div className={style.text} >Design by Brandon Fabila</div>
            <img src={licencia} alt="CreativeCommons" className={style.image} />
        </div>
    )
}

export default PieCont