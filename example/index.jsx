import { render } from "preact";
import {useState} from 'preact/hooks';
import {Lumber,TimberLog,mmTranslate,cashValue} from '../src/index';
import './index.css';


export default function App(){
    const [x, setInputValueX] = useState('');
    const handleInputChangeX = (event) => {
        setInputValueX(event.target.value);
    };
    const [y, setInputValueY] = useState('');
    const handleInputChangeY = (event) => {
        setInputValueY(event.target.value);
    };
    const [l1, setInputValueL1] = useState('');
    const handleInputChangeL1 = (event) => {
        setInputValueL1(event.target.value);
    };
    const [p1, setInputValueP1] = useState('');
    const handleInputChangeP1 = (event) => {
        setInputValueP1(event.target.value);
    };
    const luCFT = Lumber.cubicFeet(x,y,l1,'string');
    const lut = Lumber.ton(x,y,l1,'string');
    const luts = Lumber.ton(x,y,l1,'number');
    const luc = cashValue(luts,p1,'string');
    const ttf = Lumber.feetPerTon(x,y,'number');
    let result1 ;
    if(!x || !y || !l1){
        result1 = `ဗျက် ၊ ဒု နှင့် ပေရှည်ကွက်လပ်များကိုဖြည့်ပါ`
    }else{
        result1 = `${mmTranslate(x)} × ${mmTranslate(y)} သစ်ခွဲသား ${mmTranslate(l1)} ပေအတွက်ရလဒ်မှာ ${mmTranslate(luCFT)} , ${mmTranslate(lut)} ဖြစ်ပါသည်။`
    }
    let result2;
    if(!x || !y || !l1 || !p1){
        result2 = `ငွေပမာဏပါသိရှိလိုပါကစျေးနှုန်းကွက်လပ်ကိုဖြည့်ပါ`
    }else{
        result2 = `ငွေပမာဏ ${mmTranslate(luc)}ဖြစ်ပါသည်။`
    }
    // -------------------------------------------------------------------------------
    const [mgf, setInputValueMGF] = useState('');
    const handleInputChangeMGF = (event) => {
        setInputValueMGF(event.target.value);
    };
    const [mgi, setInputValueMGI] = useState('');
    const handleInputChangeMGI = (event) => {
        setInputValueMGI(event.target.value);
    };
    const [l2, setInputValueL2] = useState('');
    const handleInputChangeL2 = (event) => {
        setInputValueL2(event.target.value);
    };
    const [p2, setInputValueP2] = useState('');
    const handleInputChangeP2 = (event) => {
        setInputValueP2(event.target.value);
    };
    const loCFT = TimberLog.hoppusCube(mgf,mgi,l2,'string');
    const lot = TimberLog.hoppusTon(mgf,mgi,l2,'string');
    const lots = TimberLog.hoppusTon(mgf,mgi,l2,'number');
    const loc = cashValue(lots,p2,'string');


    return(

        <div className="a">
            <p>မြန်မာ့သစ်ထုထည်တန်တွက်ချက်ခြင်း</p>
            <p>သစ်ခွဲသား</p>
            <div className="rdiv">{result1}</div>
            <br></br>
            <div className="rdiv">{result2}</div>
            <br></br>
            <div className="b">
                <span>ဗျက်</span>
                <input value={x} onChange={handleInputChangeX} placeholder={'လက်မ '}></input>
                <span> ဒု </span>
                <input value={y} onChange={handleInputChangeY} placeholder={'လက်မ '}></input>
                <span>ပေရှည် </span>
                <input value={l1} onChange={handleInputChangeL1} placeholder={'ပေ '}></input>
                <span>စျေးနှုန်း</span>
                <input value={p1} onChange={handleInputChangeP1} placeholder={'ကျပ်'}></input>
            </div>
           
            <p>သစ်လုံး</p>
            <div className="rdiv">{result1}</div>
            <br></br>
            <div className="rdiv">{result2}</div>
            <br></br>
            <div className="b">
                <span>လုံးပါတ်</span>
                <input value={mgf} onChange={handleInputChangeMGF} placeholder={'ပေ '}></input>
                <span>လုံးပါတ်</span>
                <input value={mgi} onChange={handleInputChangeMGI} placeholder={'လက်မ '}></input>
                <span>ပေရှည်</span>
                <input value={l2} onChange={handleInputChangeL2} placeholder={'ပေ '}></input>
                <span>စျေးနှုန်း</span>
                <input value={p2} onChange={handleInputChangeP2} placeholder={'ကျပ်'}></input>
            </div>
        </div>
    )
};

render(<App />, document.getElementById('app'));