import './ashleychase.styles.scss';
import Ashley from '../../assets/ashleychase.PNG';
const AshleyChase = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <img className="ashley" src={Ashley} alt="Ashley Chase" />
                    <hr />
                    <h6>Ashley Chase</h6>
                </div>
            </div>
        </div>
       
    )
}

export default AshleyChase;