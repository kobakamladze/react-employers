
import './app-info.css';

const Appinfo = function(props) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компаний N</h1>
            <h2>Обшее количество сотрудников: {props.sumarryCount}</h2>
            <h2>Премию получат: {props.promotedCount}</h2>
        </div>
    );
}

export default Appinfo;