// Copyright to Pho Thin Maung , 2023

/**
 * @typedef {'number' | 'string'} OutputFormat
 */


class Lumber {
    static toString (){
        var str = ['Feet','Cubic Feet','Tons','Ton','Kyats']
        return str
    }
/**
 * Calculates the feet per ton of lumber.
 * 
 * @param {number} x - The width of the lumber in inches.
 * @param {number} y - The thickness of the lumber in inches.
 * @param {OutputFormat} t - The type of the lumber (0 for number, 1 for string).
 * @returns {string | number} - The feet per ton of lumber.
 */
static feetPerTon(x, y, t) {
    let type = typeof t === 'string' ? 1 : 0;
    let a = 7200 / (x * y);
    let rn = parseFloat(a.toFixed(3));
    let rs = rn + ' ' + Lumber.toString()[0];
    let r = [rn, rs][type];
    return r;
}
/**
 * Calculate the volume of a lumber in cubic feet.
 * 
 * @param {number} x -The width of the lumber in inches..
 * @param {number} y - The thickness of the lumber in inches.
 * @param {number} l - The length of the lumber in feet.
 * @param {OutputFormat} t - The type of the result, either "number" or "string".
 * 
 * @returns {number|string} - The volume of the lumber in cubic feet.
 */
static cubicFeet(x, y, l, t) {
    if (t === undefined || typeof t === 'number') {
        this.t = 0;
    } else if (typeof t === 'string') {
        this.t = 1;
    }

    const volume = (x * y * l * 50) / 7200;
    const roundedVolume = parseFloat(volume.toFixed(3));
    const volumeString = roundedVolume + ' ' + Lumber.toString()[1];
    const result = [roundedVolume, volumeString][this.t];

    return result;
}
/**
 * Calculates the tonnage based on the given dimensions of lumber .
 * 
 * @param {number} x -The width of the lumber in inches..
 * @param {number} y - The thickness of the lumber in inches.
 * @param {number} l - The length of the lumber in feet.
 * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
 * @returns {number | string} - The calculated tonnage in either number or string format.
 */
static ton(x, y, l, t) {
    if (t === undefined || t === 'number') {
        this.t = 0;
    } else if (t === 'string') {
        this.t = 1;
    }
    
    const a = ((x * y * l * 50) / 7200) / 50;
    const rn = parseFloat(a.toFixed(3));
    let rs;

    if (rn <= 1) {
        rs = rn + ' ' + Lumber.toString()[3];
    } else {
        rs = rn + ' ' + Lumber.toString()[2];
    }
    
    const r = [rn, rs][this.t];
    return r;
}
   
};
class TimberLog{
    static toString (){
        var str = ['Hoppus Cube','Hoppus Ton']
        return str
    }
/**
 * Calculation for Hoppus Cubic Feet of a timber log.
 * 
 * @param {number} mgf - Vealue of Middle Girth of a timber log in feet.
 * @param {number} mgi - Vealue of Middle Girth of a timber log in inches that after getting mgf and not more than 12 inches
 * @param {number} l - Length of a timber log in feet.
 * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
 *  @returns {number | string} -The calculated Hoppus Cube.
 */
    static hoppusCube(mgf,mgi,l,t){
        if (typeof t === 'undefined' || typeof t === 'number') {
            this.t = 0;
          } else if (typeof t === 'string') {
            this.t = 1;
          }
          this.mgf = mgf * 12;
          const MG = ((this.mgf + mgi)/4)*((this.mgf + mgi)/4);
          const a = (MG/144)*l;
          const rn = parseFloat(a.toFixed(3));
          const rs = rn + ' ' + TimberLog.toString()[0];
          const r = [rn, rs][this.t];
          return r;

    }
/**
 * Calculation for Hoppus Ton  of a timber log.
 * 
 * @param {number} mgf - Vealue of Middle Girth of a timber log in feet.
 * @param {number} mgi - Vealue of Middle Girth of a timber log in inches that after getting mgf and not more than 12 inches
 * @param {number} l - Length of a timber log in feet.
 * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
 *  @returns {number | string} -The calculated Hoppus Ton.
 */
    static hoppusTon(mgf,mgi,l,t){
        if (typeof t === 'undefined' || typeof t === 'number') {
            this.t = 0;
          } else if (typeof t === 'string') {
            this.t = 1;
          }
          this.mgf = mgf * 12;
          const MG = ((this.mgf + mgi)/4)*((this.mgf + mgi)/4);
          const a = ((MG/144)*l)/50;
          const rn = parseFloat(a.toFixed(3));
          const rs = rn + ' ' + TimberLog.toString()[1];
          const r = [rn, rs][this.t];
          return r;

    }

}


class Translate {
    constructor() {
        this.m_lang=Translate.Init();
    }
    /**
 * Translates a string by replacing occurrences of substrings from one language to another.
 * 
 * @param {string} str - The input string to be translated.
 * @param {number} toLn - The index of the language to translate to.
 * @param {number} fromLn - The index of the language to translate from.
 * @returns {string} - The translated string.
 */
    T(str,toLn=1,fromLn=0) {
		var i; var l=this.m_lang.length;
		var fstr,rstr,re;
		for(i=0;i<l;i++){
			fstr = this.m_lang[i][fromLn];  re = new RegExp(fstr, 'g');
			rstr = this.m_lang[i][toLn]; str = str.replace(re,rstr);
		}
		return str;
	}

    static Init(){
        return[
            ["0","၀"],
            ["1","၁"],
            ["2","၂"],
            ["3","၃"],
            ["4","၄"],
            ["5","၅"],
            ["6","၆"],
            ["7","၇"],
            ["8","၈"],
            ["9","၉"],
            ["Feet","ပေ"],
            ["Cubic Feet","ကုဗပေ"],
            ["Tons","ကုဗတန်"],
            ["Ton","ကုဗတန်"],
            ["Kyats","ကျပ်"],
            ["Cube","ကုဗပေ"],
            ["Hoppus "," ဟောပါစ်"],

        ]
    }
};
/**
 * Translates the given content to the specified language.
 * 
 * @param {string | number} content - The content to be translated.
 * @returns {string | number} The translated content.
 */
const mmTranslate = (content) => {
    var a = content.toString();
    const lang = 1;
    const translatedContent = new Translate().T(a,lang);
    return translatedContent;
}

/**
 * Calculate the cash value based on the given ton, price, and type.
 * 
 * @param {number} ton - The ton value.
 * @param {number} price - The price value.
 * @param {number|string} t - The type value. If it's a number, it will be treated as 0. If it's a string, it will be treated as 1.
 * @returns {string} - The cash value based on the given ton, price, and type.
 */
const cashValue = (ton, price, t) => {
    let type;
    if (typeof t === 'undefined' || typeof t === 'number') {
        type = 0;
    } else if (typeof t === 'string') {
        type = 1;
    }
    const a = ton * price;
    const rn = Math.floor(a);
    const rs = `${rn} ${Lumber.toString()[4]}`;
    const r = [rn, rs][type];
    return r;
}


export {Lumber,TimberLog,mmTranslate,cashValue};